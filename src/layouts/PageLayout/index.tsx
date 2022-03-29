import { Box } from '@mui/material';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

interface IProps {
	children: JSX.Element;
}

export const PageLayout = ({ children }: IProps): JSX.Element => {
	return (
		<Box height={'100vh'} display={'flex'} flexDirection={'column'}>
			<Header />
			<Box flex={1} m={3}>
				{children}
			</Box>
			<Footer />
		</Box>
	);
};
