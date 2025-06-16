import React, { useState } from 'react';
import {
  IdcardOutlined,
  FileOutlined,
  GithubOutlined,
  BookOutlined,
  UserOutlined,
  PictureOutlined,
} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Page from '../pages/Page';
import Dashboard from '../pages/Dashboard';
import FloatingInfo from '../floatingInfos/FloatingInfo';
import ImageJapan from '../pages/Images/ImageJapan';
import ImageNaruto from '../pages/Images/ImageNaruto';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('My Information', '1', <IdcardOutlined />),
  getItem('Github Profile', '2', <GithubOutlined />),
  getItem('My Friend ', 'sub1', <UserOutlined />, [
    getItem('Jab', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Performance', 'sub2', <BookOutlined />, [
    getItem('Team 1', '6'), 
    getItem('Team 2', '8')
  ]),
  getItem('Picture', 'sub3', <PictureOutlined />, [
    getItem('Location', 'sub4', null, [
      getItem('Japan', '9'),
    ]),
    getItem('Anime', 'sub5', null, [
      getItem('Naruto', '10'),
    ]),
  ]),
  getItem('Files', '11', <FileOutlined />),
];

const breadcrumbMap = {
  '1': [{ title: 'My Information' }],
  '2': [{ title: 'Github Profile' }],
  '3': [{ title: 'My Friend' }, { title: 'Jab' }],
  '4': [{ title: 'My Friend' }, { title: 'Bill' }],
  '5': [{ title: 'My Friend' }, { title: 'Alex' }],
  '6': [{ title: 'Performance' }, { title: 'Team 1' }],
  '8': [{ title: 'Performance' }, { title: 'Team 2' }],
  '9': [{ title: 'Picture' }, { title: 'Japan' }],
  '10': [{ title: 'Picture' }, { title: 'Naruto' }],
  '11': [{ title: 'Files' }],
};

const Sibar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedkey, setSelectedKey] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={({ key }) => {
            setSelectedKey(key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} 
          items={breadcrumbMap[selectedkey] || []} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="overflow-auto scrollbar-hide">
              {selectedkey === '1' && <Page />}
              {selectedkey === '2' && <Dashboard />}
              {selectedkey === '3' && (
                <iframe
                  src="https://example-bmsp-jab.vercel.app/"
                  title="Jab"
                  width="100%"
                  height="600"
                  style={{ border: 0, borderRadius: 12, minHeight: 500 }}
                  allowFullScreen
                />
              )}
              {selectedkey === '9' && <ImageJapan />}
              {selectedkey === '10' && <ImageNaruto />}
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
        <FloatingInfo /> {/* สภาพอากาส */}
      </Layout>
    </Layout>
  );
};
export default Sibar;