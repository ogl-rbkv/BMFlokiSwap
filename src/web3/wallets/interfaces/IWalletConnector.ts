import { AbstractConnector } from '@web3-react/abstract-connector';

export interface IWalletConnector {
	id: string;
	name: string;
	logo: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	factory(args?: Record<string, any>): AbstractConnector;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onConnect?(connector: AbstractConnector, args?: Record<string, any>): void;
	onDisconnect?(connector?: AbstractConnector): void;
	onError?(error: Error): Error | undefined;
}
