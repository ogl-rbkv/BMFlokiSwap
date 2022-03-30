import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Paths } from 'routes/paths';

export const Header = (): JSX.Element => {
	return (
		<Box display="flex" flexDirection="row" alignItems={'center'} marginX={3}>
			<Typography variant={'h3'}>Header</Typography>
			<Link component={RouterLink} to={Paths.home} variant={'subtitle1'} ml={4}>
				Home
			</Link>
			<Link component={RouterLink} to={Paths.playground} variant={'subtitle1'} ml={4}>
				Playground
			</Link>
		</Box>
	);
};
