import { IWalletConnector } from 'web3/wallets/interfaces/IWalletConnector';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { AVAILABLE_CHAIN_IDS } from 'web3/wallets/constants';

type MetaMaskError = Error & {
	code: number;
};

export const MetaMaskWalletConfig: IWalletConnector = {
	id: 'metamask',
	name: 'MetaMask',
	logo: 'MetaMaskLogo',
	factory(): AbstractConnector {
		return new InjectedConnector({
			supportedChainIds: AVAILABLE_CHAIN_IDS,
		});
	},
	onError(error: MetaMaskError): Error | undefined {
		if (error.code === -32002) {
			return new Error('MetaMask is already processing. Please verify MetaMask extension.');
		}
	},
};
