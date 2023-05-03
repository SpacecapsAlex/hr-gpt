// import { Layout, Menu } from 'antd';
import { useEffect } from 'react';
// import { useRecoilState } from 'recoil';

// import { menuItemsStart } from './AppConstants';
// import { menuItemsState } from './state/atom/menuState';
// import { modalState } from './state/atom/modalState';
// import { alertState } from './state/atom/alertState';
// import { Alert, Modal, UserCreateForm } from './component';

import './App.css';
import { ParserExample } from './exaplePages/parserExample';

// const { Header, Sider, Content } = Layout;

export const App = () => {
  // const [menuItems, setMenuItems] = useRecoilState(menuItemsState);
  // const [alert, setAlert] = useRecoilState(alertState);
  // const [modal, setModal] = useRecoilState(modalState);
  // const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    console.log('App');
    // setMenuItems(menuItemsStart);
  }, []);
  return (
    // <Layout className="min-h-screen">
    //   <Modal
    //     title={modal.title}
    //     isOpen={modal.isOpen}
    //     isClosable={modal.isClosable}
    //     handleOk={() => {
    //       modal.handleOk?.();
    //       setModal({ ...modal, isOpen: false });
    //     }}
    //     handleCancel={() => {
    //       modal.handleCancel?.();
    //       setModal({ ...modal, isOpen: false });
    //     }}
    //     footer={modal.footer}
    //     okButtonProps={modal.okButtonProps}
    //     cancelButtonProps={modal.cancelButtonProps}
    //     width={modal.width}
    //   >
    //     {modal.children}
    //   </Modal>
    //   <Alert
    //     type={alert.type}
    //     title={alert.title}
    //     description={alert.description}
    //     isIconShow={alert.isIconShow}
    //     isClosable={alert.isClosable}
    //     isShow={alert.isShow}
    //     handleClose={() => setAlert({ ...alert, isShow: false })}
    //     afterClose={alert.afterClose}
    //     action={alert.action}
    //     closeText={alert.closeText}
    //     banner={alert.banner}
    //   />
    //   <Sider
    //     className="sider"
    //     collapsible
    //     collapsed={collapsed}
    //     onCollapse={(value) => setCollapsed(value)}
    //   >
    //     <div className="titleWrapper">
    //       <a href={'#'}>{collapsed ? 'HR' : 'HR-GPT'}</a>
    //     </div>
    //     <Menu
    //       className="menu"
    //       defaultSelectedKeys={['1']}
    //       mode="inline"
    //       items={menuItems}
    //     />
    //   </Sider>
    //   <Layout className="site-layout">
    //     <Header>HEADER</Header>
    //     <Content>
    //       CONTENT
    //       <UserCreateForm />
    //     </Content>
    //   </Layout>
    // </Layout>
    <ParserExample />
  );
};
