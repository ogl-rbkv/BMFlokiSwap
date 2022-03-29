import { InjectedConnector } from '@web3-react/injected-connector';
import { AVAILABLE_CHAIN_IDS } from 'web3/wallets/constants';

export const injected = new InjectedConnector({
	supportedChainIds: AVAILABLE_CHAIN_IDS,
});
