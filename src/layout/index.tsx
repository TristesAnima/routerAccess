import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { menus } from '../menu';

const { Header, Sider, Content } = Layout;

const Index: React.FC = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        style={{
          background: colorBgContainer
        }}
      >
        <div style={{ height: 32, margin: 16, background: 'rgba(0,0,0, .2)', borderRadius: 6 }} />

        <Menu
          onClick={(e) => navigate(e.key)}
          defaultSelectedKeys={[window.location.pathname]}
          mode="inline"
          items={menus}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center'
          }}
        />
        <Content style={{ margin: 12 }}>
          <Breadcrumb>
            <Outlet />
          </Breadcrumb>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
