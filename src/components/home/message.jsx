import React, { Component } from 'react'
import './message.scss'
import Footer from '../footer/Footer'

export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            is: '>>',
            name: "", // 姓名
            workplace: "", //公司名称
            sendEmail: "", //发送邮件
            contact: "", //联系方式
            qq: "", //qq
            message: "" //留言
        };

    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }
    render() {

        return (
            <>
                <div className='message-box'>
                    <div className='message-nav'>
                        <span style={{ color: "#0149A9" }}>首页</span>
                        <span>{this.state.is}在线留言</span>
                    </div>
                    <p className='message-bg'>在线留言</p>
                    <div className="content-box">
                        <p className='title'>请填写下面的表单给我们留言（必填<span style={{ color: "red" }}>*</span>）</p>
                        <form>
                            <label className='short-label'>
                                你的姓名<span style={{ color: "red" }}>*</span>：
                                <input type="text" value={this.state.name} name='name' onChange={(e) => { this.handleChange(e) }} />
                            </label>
                            <label className='short-label'>
                                公司名称<span style={{ color: "red" }}>*</span>：
                                <input type="text" value={this.state.workplace} name='workplace' onChange={(e) => { this.handleChange(e) }} />
                            </label>
                            <label className='short-label'>
                                发送邮件<span style={{ color: "red" }}>*</span>：
                                <input type="text" value={this.state.sendEmail} name='sendEmail' onChange={(e) => { this.handleChange(e) }} />
                            </label>
                            <label className='short-label'>
                                联系方式<span style={{ color: "red" }}>*</span>：
                                <input type="text" value={this.state.contact} name='contact' onChange={(e) => { this.handleChange(e) }} />
                            </label>
                            <label className='long-label'>
                                QQ<span style={{ color: "red" }}>*</span>：
                                <input type="text" value={this.state.qq} name='qq' onChange={(e) => { this.handleChange(e) }} />
                            </label>
                            <label className='textarea'>
                                <input type="text" value={this.state.message} name='message' onChange={(e) => { this.handleChange(e) }} />
                            </label>
                            <p className='btn'>发送留言</p>
                        </form>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

}