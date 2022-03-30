import { IWalletConnector } from 'web3/wallets/interfaces/IWalletConnector';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { AVAILABLE_CHAIN_IDS, SMART_CHAIN_RPC_URLS, WEB3_WALLET_CONNECT_BRIDGE } from 'web3/wallets/constants';

export const WalletConnectConfig: IWalletConnector = {
	id: 'walletconnect',
	logo: 'WalletConnectLogo',
	name: 'WalletConnect',
	factory(): AbstractConnector {
		return new WalletConnectConnector({
			supportedChainIds: AVAILABLE_CHAIN_IDS,
			rpc: SMART_CHAIN_RPC_URLS,
			bridge: WEB3_WALLET_CONNECT_BRIDGE,
			qrcode: true,
		});
	},
	onDisconnect(connector?: WalletConnectConnector): void {
		connector?.close();
	},
	onError(error: Error): Error | undefined {
		return error;
	},
};
