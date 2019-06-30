import React, { Component } from "react";
import SliderMenu from "./SliderMenu";
import "antd/dist/antd.css";
import {
  Layout,
  Card,
  Menu,
  Breadcrumb,
  Icon,
  Button,
  Row,
  Col,
  Avatar,
  Form,
  Input,
  List
} from "antd";
const { Header, Content, Footer, Sider } = Layout;
import PageHead from "./PageHead";

class DashBoard extends Component {
  render() {
    const data = [
      {
        title: 'New user Edvard Grieg has passed your Surveys',
        avatar: '<Icon type="menu-fold" />'
      },
      {
        title: 'Years Spent in school 12',
        avatar: '<Icon type="menu-fold" />'
      },
      {
        title: 'License Detail Start Date - End Date',
        avatar: '<Icon type="menu-fold" />'
      },
      {
        title: 'Information from the User',
        avatar: '<Icon type="menu-fold" />'
      },
      {
        title: 'New user Nicole Miller has passed your Surveys',
        avatar: '<Icon type="menu-fold" />'
      },
      {
        title: 'New user Michael Kors has passed your Surveys',
        avatar: '<Icon type="menu-fold" />'
      },
      {
        title: 'New user Edvard Grieg has passed your Surveys',
        avatar: '<Icon type="menu-fold" />'
      },
      {
        title: 'Years Spent in school 12',
        avatar: '<Icon type="menu-fold" />'
      },
      {
        title: 'License Detail Start Date - End Date',
        avatar: '<Icon type="menu-fold" />'
      },
      {
        title: 'Information from the User',
        avatar: '<Icon type="menu-fold" />'
      },
      {
        title: 'New user Nicole Miller has passed your Surveys',
        avatar: '<Icon type="menu-fold" />'
      },
    ];
    return (
      <React.Fragment>
        <PageHead />
        <div className="content-section">
          <Content className="container-full">
            <Row gutter={16}>
              <Col span={6}>
                <Card className='dash-block card-full'>
                  <div className="user-block">
                    <Avatar size={120} icon="user" />
                    <Form>
                      <Form.Item>
                        <Input placeholder="First Name" />
                      </Form.Item>
                      <Form.Item>
                        <Input placeholder="Last Name" />
                      </Form.Item>
                      <Form.Item className='btn-wrapper'>
                      <Button type="primary" htmlType="submit">
                        Change Password
                      </Button>
                      </Form.Item>
                    </Form>
                    <div className='btn-del'>
                      <Button type="danger" htmlType="submit">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={11}>
                <Card className='dash-block' title='Expertise'>
                  <div className='dash-header'><a href='#'><i class="far fa-edit"></i></a></div>
                </Card>
                <Card className='dash-block' title='Bio'>
                  <div className='dash-header'><a href='#'><i class="far fa-edit"></i></a></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </Card>
              </Col>
              <Col span={7}>
                <Card className='dash-block card-full' title='Other Information'>
                  <div className='dash-header'><a href='#'><i class="far fa-edit"></i></a></div>
                  <div className='dash-body'>
                    <List
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={item.avatar}
                            title={<a href="#">{item.title}</a>}
                          />
                        </List.Item>
                      )}
                    />,
                  </div>
                </Card>
              </Col>
            </Row>
          </Content>
        </div>
      </React.Fragment>
    );
  }
}
export default DashBoard;
