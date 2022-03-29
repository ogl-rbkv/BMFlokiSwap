import { Paper, styled, Typography } from '@mui/material';
import { useWallet } from 'web3/wallets/hooks/useWallet';

const CustomPaper = styled(Paper)(() => ({
	padding: '20px',
	marginBottom: '20px',
}));

export const Web3Info = (): JSX.Element => {
	const wallet = useWallet();

	return (
		<CustomPaper>
			<Typography mb={1} variant={'subtitle1'}>
				Account: {wallet.account ?? 'none'}
			</Typography>
			<Typography mb={1} variant={'subtitle1'}>
				Active: {wallet.active ? 'yes' : 'no'}
			</Typography>
			<Typography mb={1} variant={'subtitle1'}>
				Supported Chain IDs: {wallet.connector?.supportedChainIds?.join(', ') ?? 'none'}
			</Typography>
			<Typography mb={1} variant={'subtitle1'}>
				Chain ID: {wallet.chainId ?? 'none'}
			</Typography>
			<Typography mb={1} variant={'subtitle1'}>
				Error: {wallet.error?.message ?? 'none'}
			</Typography>
		</CustomPaper>
	);
};
