import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import { injected } from 'web3/wallets/connectors-list/injected';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;

export const useInactiveListener = (suppress = false): void => {
	const { active, error, activate } = useWeb3React();

	useEffect(() => {
		const { ethereum } = window;
		if (ethereum && ethereum.on && !active && !error && !suppress) {
			const handleConnect = () => {
				// eslint-disable-next-line no-console
				console.log("Handling 'connect' event");
				activate(injected);
			};
			const handleChainChanged = (chainId: string | number) => {
				// eslint-disable-next-line no-console
				console.log("Handling 'chainChanged' event with payload", chainId);
				activate(injected);
			};
			const handleAccountsChanged = (accounts: string[]) => {
				// eslint-disable-next-line no-console
				console.log("Handling 'accountsChanged' event with payload", accounts);
				if (accounts.length > 0) {
					activate(injected);
				}
			};
			const handleNetworkChanged = (networkId: string | number) => {
				// eslint-disable-next-line no-console
				console.log("Handling 'networkChanged' event with payload", networkId);
				activate(injected);
			};

			ethereum.on('connect', handleConnect);
			ethereum.on('chainChanged', handleChainChanged);
			ethereum.on('accountsChanged', handleAccountsChanged);
			ethereum.on('networkChanged', handleNetworkChanged);

			return () => {
				if (ethereum.removeListener) {
					ethereum.removeListener('connect', handleConnect);
					ethereum.removeListener('chainChanged', handleChainChanged);
					ethereum.removeListener('accountsChanged', handleAccountsChanged);
					ethereum.removeListener('networkChanged', handleNetworkChanged);
				}
			};
		}
	}, [active, error, suppress, activate]);
};
