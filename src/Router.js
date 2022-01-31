import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin, Space } from 'antd';
import AuthContext from './contexts/AuthContext';
import { privateRoutes, publicRoutes } from './utils/routes';
import Wrapper from './layouts';

const RouteProvider = () => {
	const { auth } = React.useContext(AuthContext);
	console.log('auth ====>>>>>>> ', auth);

	if (!auth.id || !auth.token || !auth.roles.length) {
		return (
			<React.Suspense
				fallback={
					<Space size="middle">
						<Spin size="large" />
					</Space>
				}
			>
				<Routes>
					{publicRoutes.map((routeObj) => (
						<Route
							path={routeObj.path}
							key={routeObj.path}
							element={routeObj.element}
						/>
					))}
				</Routes>
			</React.Suspense>
		);
	}

	if (auth.roles.includes('user')) {
		return (
			<React.Suspense
				fallback={
					<Space size="middle">
						<Spin size="large" />
					</Space>
				}
			>
				<Wrapper>
					<Routes>
						{privateRoutes.map((routeObj) => (
							<Route
								path={routeObj.path}
								key={routeObj.path}
								element={routeObj.element}
							/>
						))}
					</Routes>
				</Wrapper>
			</React.Suspense>
		);
	}
};

export default RouteProvider;
