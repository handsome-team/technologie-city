import React, { Component } from 'react'
import './contact.scss'
import Map from '../map/Map'
import Footer from '../footer/Footer'
export default class Contact extends Component {
    render() {
        return (
            <div className="contactBox">
                <p className="oneTitle">
                    <span className='bbb'>首页 {'>>'}</span>
                    <span className="aaa">产品中心</span>
                </p>
                <div className='twotitle'>
                    <p>联系我们</p>
                </div>
                <div className="contact-map">
                    <img src="/home/u309.png" alt="" />
                </div>
                <div className='informationBox'>
                    <div className='information'>
                        <p>服务热线:023-67665376</p>
                        <p>公司邮箱：liu2yuan54@cigit.ac.cn</p>
                        <p>公司地址:重庆市北陪区高新园方正大道266号</p>
                    </div>
                </div>
                <Map />
                <Footer />
            </div>
        )
    }
}