import React from 'react';
import { isPublicPath } from '../utils/routes';

const AuthContext = React.createContext({
	auth: null,
	setAuth: () => {},
});

export const AuthContextProvider = ({ children }) => {
	const [auth, setAuth] = React.useState({
		id: '',
		token: '',
		roles: ['user'],
	});

	React.useEffect(() => {
		const getToken = async () => {
			try {
				// make API call and set auth data
				setAuthData({ id: '123', token: 'abc123', roles: ['user'] });
			} catch (err) {
				// reset auth data
				setAuthData({ id: '', token: '', roles: ['user'] });
			}
		};
		getToken();
		return () => {
			// clean up
		};
	}, []);

	const setAuthData = ({ id, token, roles }) => {
		if (!id || !token) {
			if (auth.id || auth.token) {
				setAuth({ id: '', token: '', roles: [] });
			}
			if (!isPublicPath(window.location.pathname)) {
				window.history.replaceState(null, '', '/');
			}
			return;
		}
		setAuth({ id, token, roles });
		return;
	};

	return (
		<AuthContext.Provider value={{ auth, setAuth: setAuthData }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
