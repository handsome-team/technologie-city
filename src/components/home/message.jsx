import React, { Component } from 'react'
import './message.scss'
import Footer from '../footer/Footer'
import { takeMessage } from '../../api/index'

export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "", // 姓名
            workplace: "", //公司名称
            sendEmail: "", //发送邮件
            contact: "", //联系方式
            qq: "", //qq
            message: "" //留言
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    sendMessage = async () => {
        const { name, workplace, sendEmail, contact, qq, message } = this.state;
        if (name === '') {
            return alert('姓名不能为空')
        } else if (workplace === '') {
            return alert('公司名称不能为空')
        } else if (sendEmail === '') {
            return alert('发送邮件不能为空')
        } else if (contact === '') {
            return alert('联系方式不能为空')
        } else if (qq === '') {
            return alert('qq不能为空')
        } else if (message === '') {
            return alert('留言不能为空')
        } else {
            const res = await takeMessage(this.state)
            if (res.code === 200) {
                alert(res.message)
                this.setState({
                    name: "", // 姓名
                    workplace: "", //公司名称
                    sendEmail: "", //发送邮件
                    contact: "", //联系方式
                    qq: "", //qq
                    message: "" //留言
                })
            } else {
                alert('留言失败')
            }
        }

    }
    render() {
        const { name, workplace, sendEmail, contact, qq, message } = this.state;
        return (<>]
            <div className='message-box'>
                <div className='message-nav'>
                    <span style={{ color: "#0149A9" }}>首页</span>
                    <span>&gt;&gt;在线留言</span>
                </div>
                <p className='message-bg'>在线留言</p>
                <div className="content-box">
                    <p className='title'>请填写下面的表单给我们留言（必填<span style={{ color: "red" }}>*</span>）</p>
                    <form>
                        <label className='short-label'>
                            你的姓名<span style={{ color: "red" }}>*</span>：
                                <input type="text" value={name} name='name' onChange={(e) => { this.handleChange(e) }} />
                        </label>
                        <label className='short-label'>
                            公司名称<span style={{ color: "red" }}>*</span>：
                                <input type="text" value={workplace} name='workplace' onChange={(e) => { this.handleChange(e) }} />
                        </label>
                        <label className='short-label'>
                            发送邮件<span style={{ color: "red" }}>*</span>：
                                <input type="text" value={sendEmail} name='sendEmail' onChange={(e) => { this.handleChange(e) }} />
                        </label>
                        <label className='short-label'>
                            联系方式<span style={{ color: "red" }}>*</span>：
                                <input type="text" value={contact} name='contact' onChange={(e) => { this.handleChange(e) }} />
                        </label>
                        <label className='long-label'>
                            QQ<span style={{ color: "red" }}>*</span>：
                                <input type="text" value={qq} name='qq' onChange={(e) => { this.handleChange(e) }} />
                        </label>
                        <label className='textarea'>
                            <input type="text" value={message} name='message' onChange={(e) => { this.handleChange(e) }} />
                        </label>
                        <p className='btn' onClick={() => { this.sendMessage() }}>发送留言</p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
        )
    }

}