import React from 'react';
import { Card } from 'antd';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
	return (
		<Card
			style={{
				display: 'flex',
				height: '100%',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<LoginForm />
		</Card>
	);
};

export default Login;
