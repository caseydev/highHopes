import React, { Component } from 'react'
import { PageHeader,Button } from 'antd';

import logo from "../images/logo.svg";
export default class PageHead extends Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <div className={logo}></div>
                    <nav>
                        <ul className='menu'>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms</a></li>
                            <li>
                                <Button type="primary" htmlType="submit">
                                    Contact Us
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
