import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import ".././Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "./../services/Login";
import { notification } from "antd";

const FormLogin = () => {
  const navigate = useNavigate();
  const onFinish = async(values) => {
    console.log("Success:", values);
    const response = await loginApi({
     ...values
    });
    console.log("response", response)
    if ( response && !response?.data?.error) {
      navigate("/success", { state: { key: values } });
    } else if (response?.data?.error) {
      // notification.error({ message: response?.data?.message });
    }
  };

  return (
    <div className="px-2">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please Enter your Email!" }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
       
          name="password"
          rules={[{ required: true, message: "Please Enter your Password!" }]}>
          <Input
            type="password"
            // id="success"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div className="fp-div">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="forgotpassword">
              <span>Forgot password</span>
            </Link>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button "
            style={{ width: "100%", height: "3rem" }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
