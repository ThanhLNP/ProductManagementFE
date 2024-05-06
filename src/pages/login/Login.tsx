import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { DASHBOARD_PAGE } from "constants";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "services";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const { login } = useContext(AuthContext) || {};
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values: any) => {
    if (login) {
      await login(values);
      navigate(DASHBOARD_PAGE);
    } else {
      console.error("Login function is not available.");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="m-auto"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
