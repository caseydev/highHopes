import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import PageHead from "./PageHead";
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class NormalLoginForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched("email") && getFieldError("email");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 24 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 24 }
        }
      };
    return (
      <React.Fragment>
        <PageHead />
        <div className="container user-container">
          <div className="left-pos">
            <div className="inner-left">
              <h1>Hello, Friend!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.{" "}
              </p>
              <div className="frame">
                <strong>Don't you have an account?</strong>
                <a className="ant-btn ant-btn-primary" href="/register">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
          <Form
            onSubmit={this.handleSubmit}
            {...formItemLayout}
            className="login-form"
          >
              <div className='inner'>
            <Form.Item
              validateStatus={emailError ? "error" : ""}
              help={emailError || ""}
            >
              {getFieldDecorator("email", {
                rules: [
                  { required: true, message: "Please input your email!" },
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              )}
            </Form.Item>
            <Form.Item
              validateStatus={passwordError ? "error" : ""}
              help={passwordError || ""}
            >
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
            </Form.Item>
            <Form.Item className='btn-row'>
              <Button
                type="primary"
                className="login-form-button"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Sign In
              </Button>
            </Form.Item>
            <Form.Item className='frame-row'>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>
              </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}
const LoginForm = Form.create({ name: "normal_login" })(NormalLoginForm);
export default LoginForm;
