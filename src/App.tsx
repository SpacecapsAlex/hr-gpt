import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import './App.css';
import { menuItemsStart } from './AppConstants';
import { menuItemsState } from './state/atom/menuState';

const { Header, Sider, Content } = Layout;

export const App = () => {
  const [menuItems, setMenuItems] = useRecoilState(menuItemsState);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => { setMenuItems(menuItemsStart); }, []);
  return (
    <Layout className='min-h-screen'>
      <Sider className='sider' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='titleWrapper'><a href={'#'}>{collapsed ? 'HR' : 'HR-GPT'}</a></div>
        <Menu className="menu" defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
      </Sider>
      <Layout className="site-layout">
      <Header>
        HEADER
      </Header>
      <Content>
      CONTENT
      </Content>
      </Layout>
    </Layout>
  );
};
