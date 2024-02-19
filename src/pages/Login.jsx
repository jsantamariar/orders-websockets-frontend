import React, { useContext, useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Typography,
} from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { getUserStorage } from "../helpers/getUserStorage";
import { UiContext } from "../context/UiContext";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [user] = useState(getUserStorage());
  const { setIsLogged } = useContext(UiContext);

  const onFinish = ({ agent, desktop }) => {
    localStorage.setItem("agent", agent);
    localStorage.setItem("desktop", desktop);
    setIsLogged(true);

    navigate("/desktop");
  };

  const onFinishFailed = (errorInfo) => {};

  if (user.agent || user.desktop) {
    return <Navigate to="/desktop" />;
  }

  return (
    <>
      <Title>Login</Title>
      <Text>Add your name and your desktop number</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Agent Name"
          name="agent"
          rules={[
            {
              required: true,
              message: "Please add your user name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desktop"
          name="desktop"
          rules={[
            {
              required: true,
              message: "Please add your desktop number",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
