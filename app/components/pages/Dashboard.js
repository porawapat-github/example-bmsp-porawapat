import React, { useEffect, useState } from 'react';
import { Card, Avatar, Row, Col, Table, Tag, Typography, Spin, message, Divider, Space, Button, Grid } from 'antd';
import { GithubOutlined, UserOutlined, TeamOutlined, BookOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const DashboardGit = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const screens = useBreakpoint();

  useEffect(() => {
    // Fetch user profile data
    fetch('https://api.github.com/users/porawapat-github')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        return res.json();
      })
      .then(data => {
        setUserData(data);
        setLoadingUser(false);
      })
      .catch(err => {
        console.error(err);
        message.error('Unable to retrieve user');
        setLoadingUser(false);
      });

    // Fetch user repositories
    fetch('https://api.github.com/users/porawapat-github/repos')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch repositories');
        }
        return res.json();
      })
      .then(data => {
        // เรียงจากใหม่ไปเก่า (ล่าสุดอยู่บนสุด)
        const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
        setLoadingRepos(false);
      })
      .catch(err => {
        // บันทึกข้อผิดพลาดและแสดงข้อความ
        console.error(err);
        message.error('Unable to retrie Repository ได้');
        setLoadingRepos(false);
      });
  }, []);

  const columns = [
    {
      title: 'Name Repository',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <a href={record.html_url} target="_blank" rel="noopener noreferrer">
          <GithubOutlined style={{ marginRight: 6 }} />
          <Text strong>{text}</Text>
        </a>
      ),
      ellipsis: true,
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
      render: (lang) => (
        <Tag color={lang === 'JavaScript' ? 'gold' : lang === 'TypeScript' ? 'blue' : lang ? 'green' : 'default'}>
          {lang || 'N/A'}
        </Tag>
      ),
      width: 120,
      responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      responsive: ['md'],
      render: (desc) => <Text type="secondary">{desc || '-'}</Text>,
      ellipsis: true,
    },
    {
      title: 'Last Update',
      dataIndex: 'updated_at',
      key: 'updated_at',
      render: (date) => <Text>{new Date(date).toLocaleDateString()}</Text>,
      responsive: ['sm', 'md', 'lg', 'xl'],
      width: 140,
    },
  ];

  return (
    <div
      style={{
        padding: screens.xs ? 8 : 24,
        background: '#f5f7fa',
        minHeight: '100vh',
      }}
    >
      <Card
        variant="filled"
        style={{
          marginBottom: 24,
          background: '#001529',
          borderRadius: 16,
        }}
        bodyStyle={{
          padding: screens.xs ? 12 : 24,
        }}
      >
        <Row align="middle" gutter={[16, 16]}>
          <Col xs={24} sm={6} md={4} style={{ textAlign: 'center' }}>
            <Avatar
              size={screens.xs ? 64 : 100}
              src={userData?.avatar_url}
              icon={<UserOutlined />}
              style={{
                border: '3px solid #fff',
                boxShadow: '0 2px 8px #00000022',
                marginBottom: screens.xs ? 8 : 0,
              }}
            />
          </Col>
          <Col xs={24} sm={18} md={20}>
            <Title
              level={screens.xs ? 4 : 2}
              style={{ color: '#fff', marginBottom: screens.xs ? 8 : 0 }}
            >
              <GithubOutlined /> GitHub Dashboard
            </Title>
            {loadingUser ? (
              <Spin tip="loading data of user..." />
            ) : (
              userData && (
                <Space direction="vertical" size="small">
                  <Title
                    level={screens.xs ? 5 : 4}
                    style={{ color: '#fff', margin: 0 }}
                  >
                    {userData.name || userData.login}
                  </Title>
                  <Paragraph style={{ color: '#fff', margin: 0, fontSize: screens.xs ? 13 : undefined }}>
                    <TeamOutlined /> <strong>Followers:</strong> {userData.followers} &nbsp;|&nbsp;
                    <UserOutlined /> <strong>Following:</strong> {userData.following} &nbsp;|&nbsp;
                    <BookOutlined /> <strong>Public Repos:</strong> {userData.public_repos}
                  </Paragraph>
                  <Button
                    type="primary"
                    icon={<GithubOutlined />}
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size={screens.xs ? "small" : "middle"}
                  >
                    View GitHub Profile
                  </Button>
                </Space>
              )
            )}
          </Col>
        </Row>
      </Card>

      <Divider orientation="left">
        <Title level={screens.xs ? 4 : 3} style={{ margin: 0 }}>
          List Repository
        </Title>
      </Divider>

      <Card
        variant="outlined"
        hoverable
        style={{ borderRadius: 16 }}
        bodyStyle={{ padding: screens.xs ? 8 : 24 }}
      >
        <Spin tip="Loading of Repository..." spinning={loadingRepos}>
          <Table
            columns={columns}
            dataSource={repos}
            rowKey="id"
            pagination={{ pageSize: screens.xs ? 3 : 5 }}
            bordered
            style={{ minHeight: 200 }}
            scroll={{ x: 600 }}
            size={screens.xs ? "small" : "middle"}
          />
        </Spin>
      </Card>
    </div>
  );
};

export default DashboardGit;
