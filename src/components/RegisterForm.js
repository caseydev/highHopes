import React, { Component } from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
import PageHead from "./PageHead";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };
  compareToFirstEmail = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("email")) {
      callback("Two emails that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <React.Fragment>
        <PageHead />
        <div className='container user-container'>
          <div className='left-pos'>
            <div className='inner-left'>
              <h1>Hello, Friend!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. </p>
              <div className='frame'>
                <strong>Already a user?</strong>
                <a className="ant-btn ant-btn-primary" href="/login">
                  Sign In
                </a>
              </div>
            </div>
          </div>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <div className='inner'>
              <Form.Item
              >
                {getFieldDecorator("firstname", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your firstname!",
                      whitespace: true
                    }
                  ]
                })(<Input  placeholder="First Name" />)}
              </Form.Item>

              <Form.Item
              >
                {getFieldDecorator("lastname", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your lastname!",
                      whitespace: true
                    }
                  ]
                })(<Input placeholder="Last Name"/>)}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input placeholder="Email" />)}
              </Form.Item>
              <Form.Item hasFeedback>
                {getFieldDecorator("confirmemail", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid confirm E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your confirm E-mail!"
                    },
                    {
                      validator: this.compareToFirstEmail
                    }
                  ]
                })(<Input onBlur={this.handleConfirmBlur} placeholder="Confirm Email" />)}
              </Form.Item>
              <Form.Item hasFeedback>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your password!"
                    }
                  ]
                })(<Input.Password  placeholder="Password"/>)}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Sign Up
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

const RegisterForm = Form.create({ name: "register" })(RegistrationForm);

export default RegisterForm;
