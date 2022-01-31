import React from 'react';
import {
	PageHeader,
	Tabs,
	Button,
	Typography,
	Descriptions,
	Input,
	Row,
	List,
	Avatar,
	Divider,
} from 'antd';
import { BellOutlined, MoreOutlined } from '@ant-design/icons';

import { recentlyAddedData, topVotesData } from '../data/demo'; // test env

const { Text } = Typography;

const RightBar = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
			<PageHeader
				backIcon={false}
				title={<Text style={{ fontSize: '15px' }}>Anik Ghosh</Text>}
				subTitle="@anik"
				avatar={{
					shape: 'square',
					src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
					style: {
						border: '1px solid #aaaaab',
						borderRadius: '5px',
					},
				}}
				extra={[
					<BellOutlined
						style={{
							fontSize: '15px',
							color: '#aaaaab',
							marginTop: '10px',
						}}
					/>,
					<MoreOutlined
						style={{
							fontSize: '15px',
							color: '#aaaaab',
							marginTop: '10px',
						}}
					/>,
				]}
			>
				<Row>
					<Text
						type="secondary"
						style={{ fontSize: '12px', marginLeft: '15%' }}
					>
						Script Writer
					</Text>
				</Row>
			</PageHeader>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '83%',
					margin: '2%',
					border: '1px solid #d9d9d9',
					borderTopWidth: 0,
					borderBottomWidth: 0,
					borderRightWidth: 0,
					padding: '2% 5%',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: '2%',
					}}
				>
					<Text style={{ fontWeight: 'bolder' }}>Recently Added</Text>
					<Text type="secondary">View All</Text>
				</div>
				<List
					size="small"
					dataSource={recentlyAddedData}
					renderItem={(item) => (
						<List.Item style={{ borderWidth: 0 }}>
							<List.Item.Meta
								avatar={
									<Avatar
										src="https://joeschmoe.io/api/v1/random"
										shape="square"
										style={{
											border: '1px solid #aaaaab',
											borderRadius: '5px',
											marginTop: '3%',
										}}
									/>
								}
								title={
									<Text style={{ fontSize: '12px', marginBottom: 0 }}>
										{item.title}
									</Text>
								}
								description={<Text type="secondary">{item.author}</Text>}
							/>
							<Text type="secondary">{item.uploadedOn}</Text>
						</List.Item>
					)}
					style={{ width: '100%', height: '50%', overflowY: 'scroll' }}
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: '5%',
						marginBottom: '2%',
					}}
				>
					<Text style={{ fontWeight: 'bolder' }}>Top Votes</Text>
				</div>
				<List
					size="small"
					dataSource={topVotesData}
					renderItem={(item) => (
						<List.Item
							style={{
								borderWidth: 0,
							}}
						>
							<List.Item.Meta
								avatar={
									<Avatar
										src="https://joeschmoe.io/api/v1/random"
										shape="square"
										style={{
											border: '1px solid #aaaaab',
											borderRadius: '5px',
											marginTop: '3%',
										}}
									/>
								}
								title={
									<Text style={{ fontSize: '12px', marginBottom: 0 }}>
										{item.title}
									</Text>
								}
								description={<Text type="secondary">{item.author}</Text>}
							/>
							<Text type="secondary">{item.votes}</Text>
						</List.Item>
					)}
					style={{ width: '100%', height: '50%', overflowY: 'scroll' }}
				/>
			</div>
		</div>
	);
};

export default RightBar;
