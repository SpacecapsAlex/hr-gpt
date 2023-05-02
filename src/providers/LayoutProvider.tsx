import React, { FC, useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { menuItemsStart } from '../AppConstants';
import { menuItemsState, MenuItemsType } from '../state/atom/menuState';
import { userState, userStateType } from '../state/atom/userState';

import layoutProviderStyles from './LayoutProvider.module.css';

import './LayoutProvider.css';

const { Header, Sider, Content } = Layout;

type LayoutProviderProps = {
  children: React.ReactNode;
};

export const LayoutProvider: FC = ({ children }: LayoutProviderProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useRecoilState<MenuItemsType[]>(menuItemsState);
  const userProfile = useRecoilValue<userStateType>(userState);

  useEffect(() => {
    setMenuItems(menuItemsStart);
  }, []);

  if (!userProfile.id) {
    return (
      <Layout className="min-h-screen">
        <Content>
          {children}
        </Content>
      </Layout>
    );
  }

  return (
    <Layout className="min-h-screen">
      <Sider
        className={layoutProviderStyles.siderWrapper}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={layoutProviderStyles.titleWrapper}>
          <a href={'#'}>{collapsed ? 'HR' : 'HR-GPT'}</a>
        </div>
        <Menu
          className={layoutProviderStyles.menuWrapper}
          defaultSelectedKeys={['1']}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout className={layoutProviderStyles.siteLayoutWrapper}>
        <Header className={layoutProviderStyles.headerWrapper}>HEADER</Header>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
