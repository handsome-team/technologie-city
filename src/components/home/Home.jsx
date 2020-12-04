import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./home.scss"
import Tabbar from "./tabBar"
import Companys from './companys'
import Footer from '../footer/Footer'
import Map from '../map/Map'
import { Carousel } from 'antd';
import Wing from '../wing/Wing'
const contentStyle = {
    height: '90vh',
    color: '#fff',
    lineHeight: '90vh',
    textAlign: 'center',
    dotPosition: 'right'
};
export default class Home extends Component {
    render() {
        return (
            <div className='home-outerBox'>
                <Wing />
                {/* 轮播图 */}
                <div className='bannery'>
                    <Carousel autoplay>
                        <div>
                            <h3 style={contentStyle}>
                                <img src='/home/banner_u1.png' alt="" />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <img src='/home/banner_u2.jpg' alt="" />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <img src='/home/banner_u3.jpg' alt="" />
                            </h3>
                        </div>
                    </Carousel>
                    <div className='jiantouy'>
                        <span style={{ margin: '0px 15px 0px 15px' }}> Prev </span>
                        <span> Next</span>
                    </div>
                    <div className='nexty'>
                        <img src='/home/a_u76.png' alt="" />
                    </div>
                </div>
                {/* 关于我们 */}
                <div className="home-about">
                    <div className='home-img'>
                        <img src="/home/关于我们_u45.png" alt="" />
                    </div>
                    <div className='about-box'>
                        <img className='about-left' src="/home/关-图_u48.png" alt="" />
                        <div className='about-right'>
                            <img className='font-img' src="/home/u49.png" alt="" />
                            <div className="about-tab">
                                <NavLink to="/about">
                                    <img className='btn-img' src="/home/u50.png" alt="" />
                                    <img className='btn-dir' src="/home/banner1_u3.png" alt="" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 产品中心 */}
                <div className="home-product">
                    <div className='home-img'>
                        <img src="/home/u71.png" alt="" />
                    </div>
                    <Tabbar />
                </div>
                {/* 展示案例 */}
                <div className="showBox">
                    <ul className='mid-box'>
                        <li className='midbox-li'>
                            <img className='midbox-icon' src="/home/用户案例-标_u90.png" alt="" />
                            <p className='mid-font'>用户案例</p>
                            <p className='font-eng'>USER CASE</p>
                            <img className='mid-jiantou' src="/home/u92.png" alt="" />
                        </li>
                        <li className='midbox-li'>
                            <img className='midbox-icon' src="/home/资质证明_u96.png" alt="" />
                            <p className='mid-font'>资质证明</p>
                            <p className='font-eng'>QUALIFICATION</p>
                            <img className='mid-jiantou' src="/home/u92.png" alt="" />
                        </li>
                        <li className='midbox-li'>
                            <NavLink to='/message'>
                                <img className='midbox-icon message' src="/home/在线留言_u101.png" alt="" />
                                <p className='mid-font'>在线留言</p>
                                <p className='font-eng'>MESSAGE</p>
                                <img className='mid-jiantou' src="/home/u92.png" alt="" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* 公司动态 */}
                <div className="company-dynamic">
                    <div className='home-img'>
                        <img src="/home/u119.png" alt="" />
                    </div>
                    {/* 选项卡 */}
                    <Companys />
                    <div className="company-tab">
                        <NavLink to="/company">
                            <img className='btn-img' src="/home/u50.png" alt="" />
                            <img className='btn-dir' src="/home/banner1_u3.png" alt="" />
                        </NavLink>
                    </div>
                </div>
                {/* 地图 */}
                <Map />
                <Footer />
            </div>
        )
    }
}
