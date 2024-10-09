import React from 'react';
import { Layout, Menu } from 'antd';
import AppContent from './AppContext';

const { Header, Content } = Layout;

const AppLayout = () => {
    return (
        <Layout>
            <Header style={{ position: 'fixed', width: '100%', zIndex: 1 }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                </Menu>
            </Header>

            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: "100%",
                        background: '#bdbcbc',
                    }}
                >
                    <AppContent />
                </div>
            </Content>
        </Layout>
    );
};

export default AppLayout;
