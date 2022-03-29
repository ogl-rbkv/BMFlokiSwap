import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import { WEB3_POLLING_INTERVAL } from 'web3/wallets/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLibrary = (provider: any): Web3Provider => {
	const library = new Web3Provider(provider);
	library.pollingInterval = WEB3_POLLING_INTERVAL;
	return library;
};

interface IProps {
	children: JSX.Element;
}

export const Web3WalletProvider = ({ children }: IProps): JSX.Element => {
	return <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>;
};
