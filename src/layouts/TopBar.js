import React from 'react';
import { PageHeader, Tabs, Typography, Input, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Text } = Typography;

const TopBar = () => {
	return (
		<PageHeader
			backIcon={false}
			title="Hello, Anik"
			extra={[
				<Input
					addonBefore={
						<SearchOutlined
							style={{
								fontSize: '20px',
								color: '#aaaaab',
							}}
						/>
					}
					bordered={false}
					placeholder="Search"
					style={{ width: '30vw' }}
				/>,
			]}
			footer={
				<Tabs defaultActiveKey="1" style={{ marginLeft: 'auto' }}>
					<TabPane tab="Movie" key="1" />
					<TabPane tab="Script" key="2" />
					<TabPane tab="Storyline" key="3" />
					<TabPane tab="Production" key="4" />
				</Tabs>
			}
		>
			<Row>
				<Text type="secondary" style={{ fontSize: '15px' }}>
					Welcome back
				</Text>
			</Row>
		</PageHeader>
	);
};

export default TopBar;
