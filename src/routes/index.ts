import { IRoute } from 'routes/interfaces/IRoute';
import { Paths } from './paths';

import { Home } from 'pages/Home';
import { Playground } from 'pages/Playground';

export const Routes: IRoute[] = [
	{
		path: Paths.playground,
		page: Playground,
	},
	{
		path: Paths.home,
		page: Home,
		exact: true,
	},
];
