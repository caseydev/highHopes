import React, { Component } from "react";
import {
  Layout,
  Button,
  Checkbox,
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
            <strong className="content-big-title">Please select all areas you exterise in</strong>
            <ul className='selectable-list'>
              <li><Checkbox className='custom-checkbox' >Bipolarity</Checkbox></li>
              <li><Checkbox  className='custom-checkbox'>Depression</Checkbox></li>
              <li><Checkbox  className='custom-checkbox'>Bipolarity</Checkbox></li>
              <li><Checkbox  className='custom-checkbox'>Depression</Checkbox></li>
              <li><Checkbox  className='custom-checkbox'>Bipolarity</Checkbox></li>
              <li><Checkbox  className='custom-checkbox'>Depression</Checkbox></li>
            </ul>
            <div className='btn-wrapper'>
            <Button className='btn-verify' type="primary" htmlType="submit">
                  Next
                </Button>
            </div>
          </Content>
        </div>
      </React.Fragment>
    );
  }
}
export default DashBoard;
