import './wing.scss'
import { useState } from 'react'

export default function Wing() {
    const [isShow, onShow] = useState(null)
    const iconOver = (index) => {
        console.log(index)
        onShow(index)
    };
    const iconout = (index) => {
        console.log(index)
        onShow(index)
    };
    // 箭头点击事件
    const topclick = () => {
        console.log(111)
    }
    return (
        <div className="wing">
            <div className="wing-box">
                <a href="#">
                    <div className="wing-icon" onClick={() => topclick()}>
                        <img src="/wing/xuanfujiantou@2x.png" alt="" />
                    </div>
                </a>
                <div className="wing-icon" onMouseOver={() => { iconOver(0) }} onMouseOut={() => {
                    iconout(null)
                }}>
                    <img src="/wing/dianhua @2x.png" alt="" />
                </div>
                <div className="wing-icon" onMouseOver={() => { iconOver(1) }} onMouseOut={() => {
                    iconout(null)
                }}>
                    <img src="/wing/zixun@2x.png" alt="" />
                </div>
                <div className="wing-icon" onMouseOver={() => { iconOver(2) }} onMouseOut={() => {
                    iconout(null)
                }}>
                    <img src="/wing/youjian@2x.png" alt="" />
                </div>
            </div>
            <div className={isShow === 0 ? 'wing-div1' : 'wing-div'}>
                {
                    isShow === 0 ? <div>电话直呼</div> : <></>
                }
            </div>
            <div className={isShow === 1 ? 'wing-div2' : 'wing-div'}>
                {
                    isShow === 1 ? <div>在线留言</div> : <></>
                }
            </div>
            <div className={isShow === 2 ? 'wing-div3' : 'wing-div'}>
                {
                    isShow === 2 ? <div>发送邮件</div> : <></>
                }
            </div>
        </div>
    )
}
