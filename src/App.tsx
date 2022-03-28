import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Routes as AppRoutes } from './routes';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTheme } from 'constants/CustomTheme';
import { PageLayout } from 'layouts/PageLayout';

export const App = () => {
	return (
		<ThemeProvider theme={CustomTheme}>
			<Router>
				<Routes>
					{AppRoutes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={<PageLayout>{route.page()}</PageLayout>}
						/>
					))}
				</Routes>
			</Router>
		</ThemeProvider>
	);
};
