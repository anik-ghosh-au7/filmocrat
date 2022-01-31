import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import Router from './Router';

const App = () => {
	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<BrowserRouter>
				<AuthContextProvider>
					<Router />
				</AuthContextProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
