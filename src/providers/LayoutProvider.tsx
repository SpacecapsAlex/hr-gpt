import React, { FC, useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { useRecoilState } from 'recoil';
import { menuItemsStart } from '../AppConstants';
import { menuItemsState, MenuItemsType } from '../state/atom/menuState';

import './LayoutProvider.css';

const { Header, Sider, Content } = Layout;

type LayoutProviderProps = {
  children: React.ReactNode;
};

export const LayoutProvider: FC = ({ children }: LayoutProviderProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useRecoilState<MenuItemsType[]>(menuItemsState);

  useEffect(() => {
    setMenuItems(menuItemsStart);
  }, []);

  return (
    <Layout className="min-h-screen">
      <Sider
        className="sider"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="titleWrapper">
          <a href={'#'}>{collapsed ? 'HR' : 'HR-GPT'}</a>
        </div>
        <Menu
          className="menu"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout className="site-layout">
        <Header>HEADER</Header>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
