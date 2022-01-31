import Login from '../pages/Login';
import Scripts from '../pages/Scripts';

export const publicPaths = ['/'];

export const isPublicPath = (path) => {
	return publicPaths.includes(path);
};

export const publicRoutes = [
	{
		path: '/',
		element: <Login />,
		title: 'Login',
	},
];

export const privateRoutes = [
	{
		path: '/scripts',
		element: <Scripts />,
		title: 'Scripts',
	},
];
