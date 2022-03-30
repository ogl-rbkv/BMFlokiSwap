import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { useCallback, useEffect, useState } from 'react';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { useEagerConnect } from 'web3/wallets/hooks/useEagerConnect';
import { useInactiveListener } from 'web3/wallets/hooks/useInactiveListener';
import { IWalletConnector } from 'web3/wallets/interfaces/IWalletConnector';
import { Web3ReactContextInterface } from '@web3-react/core/dist/types';

export const useWallet = (): {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	connect: (walletConnector: IWalletConnector, args?: Record<string, any>) => Promise<void>;
	disconnect: () => Promise<void>;
} & Web3ReactContextInterface<Web3Provider> => {
	const web3React = useWeb3React<Web3Provider>();

	// handle logic to recognize the connector currently being activated
	const [activatingConnector, setActivatingConnector] = useState<AbstractConnector | undefined>();
	useEffect(() => {
		if (activatingConnector && activatingConnector === web3React.connector) {
			setActivatingConnector(undefined);
		}
	}, [activatingConnector, web3React.connector]);

	// handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
	const triedEager = useEagerConnect();

	// handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
	useInactiveListener(!triedEager || !!activatingConnector);

	const connect = useCallback(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		async (walletConnector: IWalletConnector, args?: Record<string, any>): Promise<void> => {
			const connector = walletConnector.factory(args);

			setActivatingConnector(connector);
			web3React
				.activate(connector, undefined, true)
				// eslint-disable-next-line no-console
				.then(() => console.log('Connection success'))
				.catch((_error) => {
					const error = (walletConnector?.onError && walletConnector?.onError(_error)) ?? _error;
					web3React.setError(error);

					setActivatingConnector(undefined);
					// eslint-disable-next-line no-console
					console.error(`!!! ERROR while connecting ${_error}`);
				});
		},
		[web3React.activate],
	);

	const disconnect = useCallback(async (): Promise<void> => {
		web3React.deactivate();
	}, [web3React.deactivate]);

	return {
		...web3React,
		connect,
		disconnect,
	};
};
