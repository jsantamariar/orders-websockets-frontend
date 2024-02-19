import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import CreateTicket from "./CreateTicket";
import Line from "./Line";
import Desktop from "./Desktop";
import useCurrentPath from "../hooks/CurrentPathHook";

const { Header, Sider, Content } = Layout;

function RouterPage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { isLogin } = useCurrentPath();

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: (
                  <Link to="/login">{!isLogin ? "Home Page" : "Login"}</Link>
                ),
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link to="/line">Line of tickets</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link to="/create">Create ticket</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          ></Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/create" element={<CreateTicket />}></Route>
              <Route path="/line" element={<Line />}></Route>
              <Route path="/desktop" element={<Desktop />}></Route>
              <Route path="/*" element={<Navigate to="/login" />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default RouterPage;
