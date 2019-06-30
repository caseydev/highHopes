import React, { Component } from "react";
import { Layout, Button, Checkbox, DatePicker, Input } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import TopImg from "../images/img-01.svg";
import PageHead from "./PageHead";
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class DashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHead />
        <div className="content-section">
          <Content className="container user-container container-sm">
            <div className='info-inner'>
                <strong className="content-big-title">Other Information</strong>
                <div className="info-slot">
                <strong className="content-title">Credentials</strong>
                <p>Please select your credentials levels</p>
                <ul className="selectable-list inline">
                    <li>
                    <Checkbox className="custom-checkbox minimal">LCSW</Checkbox>
                    </li>
                    <li>
                    <Checkbox className="custom-checkbox minimal">LPW</Checkbox>
                    </li>
                    <li>
                    <Checkbox className="custom-checkbox minimal">
                        Generalized Anxiety
                    </Checkbox>
                    </li>
                </ul>
                </div>
                <div className="info-slot">
                <strong className="content-title">Years Spent in school</strong>
                <Input placeholder="Text" />
                </div>
                <div className="info-slot">
                <strong className="content-title">License Details</strong>
                <div className="datepicker-row d-flex">
                    <DatePicker
                    className="datepicker-col"
                    placeholder="Start Date"
                    />
                    <DatePicker className="datepicker-col" placeholder="End Date" />
                </div>
                </div>
                <div className="btn-wrapper">
                <Button className="btn-verify" type="primary" htmlType="submit">
                    Next
                </Button>
                </div>
            </div>
          </Content>
        </div>
      </React.Fragment>
    );
  }
}
export default DashBoard;
