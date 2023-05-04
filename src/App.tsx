import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import { menuItemsStart } from './AppConstants';
import { menuItemsState } from './state/atom/menuState';
import { modalState } from './state/atom/modalState';
import { alertState } from './state/atom/alertState';
import { Alert, Modal } from './component';
import { Paths } from './constants/path';
import { LoginPage } from './pages/LoginPage/LoginPage';
import './App.css';
import { CandidateTablePage } from './pages';

const { Header, Sider, Content } = Layout;

export const App = () => {
  const [menuItems, setMenuItems] = useRecoilState(menuItemsState);
  const [alert, setAlert] = useRecoilState(alertState);
  const [modal, setModal] = useRecoilState(modalState);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const loginData = localStorage.getItem('userData');
  console.log(loginData);
  useEffect(() => {
    setMenuItems(menuItemsStart);
  }, []);
  return (
    <Layout className="min-h-screen">
      <Modal
        title={modal.title}
        isOpen={modal.isOpen}
        isClosable={modal.isClosable}
        handleOk={() => {
          modal.handleOk?.();
          setModal({ ...modal, isOpen: false });
        }}
        handleCancel={() => {
          modal.handleCancel?.();
          setModal({ ...modal, isOpen: false });
        }}
        footer={modal.footer}
        okButtonProps={modal.okButtonProps}
        cancelButtonProps={modal.cancelButtonProps}
        width={modal.width}
      >
        {modal.children}
      </Modal>
      <Alert
        type={alert.type}
        title={alert.title}
        description={alert.description}
        isIconShow={alert.isIconShow}
        isClosable={alert.isClosable}
        isShow={alert.isShow}
        handleClose={() => setAlert({ ...alert, isShow: false })}
        afterClose={alert.afterClose}
        action={alert.action}
        closeText={alert.closeText}
        banner={alert.banner}
      />
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
        <Routes>
          <Route path={Paths.main} element={loginData ? <CandidateTablePage /> : <LoginPage />} />
          <Route path={Paths.login} element={<LoginPage />} />
          <Route path={Paths.login} element={<CandidateTablePage />} />
        </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
