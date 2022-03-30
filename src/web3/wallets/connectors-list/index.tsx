import { MetaMaskWalletConfig } from 'web3/wallets/connectors-list/MetaMask';
import { IWalletConnector } from 'web3/wallets/interfaces/IWalletConnector';
import { WalletConnectConfig } from 'web3/wallets/connectors-list/WalletConnect';

export enum ConnectorNames {
	MetaMask = 'MetaMask',
	WalletConnect = 'WalletConnect',
}

export const WalletConnectors: {
	[name in ConnectorNames]: IWalletConnector;
} = {
	[ConnectorNames.MetaMask]: MetaMaskWalletConfig,
	[ConnectorNames.WalletConnect]: WalletConnectConfig,
};
