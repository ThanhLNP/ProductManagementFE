import { HomeOutlined, ProductOutlined } from "@ant-design/icons";
import { Layout as LibLayout, Menu, theme } from "antd";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { DASHBOARD_PAGE, PRODUCT_PAGE } from "constants";

const { Header, Content, Footer, Sider } = LibLayout;

const Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menu = [
    {
      icon: <HomeOutlined />,
      title: "Dashboard",
      path: DASHBOARD_PAGE,
    },
    {
      icon: <ProductOutlined />,
      title: "Product",
      path: PRODUCT_PAGE,
    },
  ];

  return (
    <LibLayout className="h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
          {menu.map((item) => (
            <Menu.Item key={item.path}>
              <NavLink to={item.path}>
                {item.icon}
                <span className="title">{item.title}</span>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <LibLayout>
        <Header style={{ padding: 0, background: colorBgContainer }} />

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>

        <Footer>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </LibLayout>
    </LibLayout>
  );
};

export default Layout;
