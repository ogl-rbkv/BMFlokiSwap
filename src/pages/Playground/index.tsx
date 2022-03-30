import { Box, Button, Typography } from '@mui/material';
import { Web3Info } from 'pages/Playground/components/Web3Info';
import { ConnectorNames, WalletConnectors } from 'web3/wallets/connectors-list';
import { useWallet } from 'web3/wallets/hooks/useWallet';

export const Playground = (): JSX.Element => {
	const wallet = useWallet();

	return (
		<>
			<Typography variant={'subtitle1'} mb={3}>
				Playground page
			</Typography>
			<Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
				<Web3Info />
				{Object.keys(WalletConnectors).map((connectorName) => {
					const currentConnector = WalletConnectors[connectorName as ConnectorNames];

					return (
						<Box mb={1} key={currentConnector.id}>
							<Button
								variant={'outlined'}
								onClick={() => wallet.connect(WalletConnectors[connectorName as ConnectorNames])}
							>
								<Typography variant={'button'}>Connect with {currentConnector.name}</Typography>
							</Button>
						</Box>
					);
				})}
			</Box>
			<Button variant={'outlined'} onClick={() => wallet.disconnect()}>
				<Typography variant={'button'}>Disconnect</Typography>
			</Button>
		</>
	);
};
