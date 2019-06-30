import React, { Component } from "react";
import {
  Layout,
  Button,
  Input,
} from "antd";
const { Header, Content, Footer, Sider } = Layout;
import TopImg from "../images/img-01.svg";
import PageHead from "./PageHead";

class DashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHead />
        <div className="content-section">
          <Content className="container user-container container-sm text-center">
            <div className='img-top'><img src={TopImg} /></div>
            <div className='sub-info'>
              <strong className='content-title'>Check Your Email</strong>
              <p className='note'>An confirm email with code has been sent to</p>
              <a className='email-placeholder' href='#'>semple@gmail.com</a>
              <div className='input-box'>
                <Input value="6" />
                <Input />
                <Input />
                <Input />
              </div>
              <p>Please enter the code from the email</p>
              <div className='btn-wrapper'>
                <Button className='btn-verify' type="primary" htmlType="submit">
                  Verify
                </Button>
              </div>
              <p>Don't  receive email?  <a href="#">Resent</a> </p>
            </div>
          </Content>
        </div>
      </React.Fragment>
    );
  }
}
export default DashBoard;
