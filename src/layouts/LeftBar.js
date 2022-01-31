import React from 'react';
import { Menu } from 'antd';
import {
	HomeOutlined,
	FileTextOutlined,
	InboxOutlined,
	LogoutOutlined,
} from '@ant-design/icons';

const LeftBar = () => {
	return (
		<div
			style={{
				height: '100%',
				backgroundColor: '#FFA6A6',
				borderRadius: '20px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					height: '15%',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<img
					alt="logo"
					style={{
						width: '45px',
						height: '45px',
						borderRadius: '5px',
						boxShadow: '0 15px 35px 0 #FFA6A6',
						borderColor: '#FF0000',
					}}
					src="https://s3-alpha-sig.figma.com/img/0f18/66f6/1daf1145d37ca7af55062e14f1d14533?Expires=1639958400&Signature=NDA7oRFMuVeQe158dq0~~UDRv6QXWqOTtD7YqKXzOA6JsfOKMhlItRDagU5YHyvF5R9Nlbh39z90yoZFujt6lBEsPIm0Jcip1zirrqgN7D9SoslARdEiTT1IEstZ7QGJJ5vF~-zVbGQEo4bw~2QdDp52bF6B0q-j8tojGYlwleEnEufX55~momrOoCmeoUhH2JGIbqqUi2GlI1H~ncNbywVYqCPUnGlu-6yEhmZxI4l3~W8trOfiGcJ0N28G2rJHAg6HJl7kIZd1xn0zcP3Xtczi4y7MHkfV7yWOvmmkwh~WECwP4~fWFIGXZRHKOIoqOMEfKQknMJKMMfunR6c7yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				/>
			</div>
			<Menu
				defaultSelectedKeys={['3']}
				style={{
					backgroundColor: '#FFA6A6',
					borderRightWidth: 0,
					marginTop: '75%',
				}}
			>
				<Menu.Item
					key="1"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<HomeOutlined
						style={{ fontSize: '30px', color: '#ffffff', marginTop: '12px' }}
					/>
				</Menu.Item>
				<Menu.Item
					key="2"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<InboxOutlined
						style={{ fontSize: '30px', color: '#ffffff', marginTop: '12px' }}
					/>
				</Menu.Item>
				<Menu.Item
					key="3"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<FileTextOutlined
						style={{ fontSize: '30px', color: '#ffffff', marginTop: '12px' }}
					/>
				</Menu.Item>
			</Menu>
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 'auto',
					marginBottom: '50%',
				}}
			>
				<LogoutOutlined style={{ fontSize: '30px', color: '#ffffff' }} />
			</div>
		</div>
	);
};

export default LeftBar;
