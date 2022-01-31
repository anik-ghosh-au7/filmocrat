import React from 'react';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import TopBar from './TopBar';

const Wrapper = ({ children }) => (
	<div style={{ height: '100vh', width: '100vw', display: 'flex' }}>
		<div style={{ flex: 1, padding: '1%' }}>
			<LeftBar />
		</div>
		<div
			style={{
				flex: 12,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<div>
				<TopBar />
			</div>
			<div
				style={{
					display: 'flex',
					height: '100%',
					margin: '2%',
				}}
			>
				{children}
			</div>
		</div>
		<div style={{ flex: 4 }}>
			<RightBar />
		</div>
	</div>
);

export default Wrapper;
