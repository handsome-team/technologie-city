import './footer.scss'
export default function Footer() {
    return (
        <div className="footerBox">
            <div className="footer">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src="/header/20407796_1601348957@2x.png" alt=""/>                  
                    </div>
                    <div className="footer-nav">
                        <ul>
                            <li>首页</li>
                            <li>关于我们</li>
                            <li>产品中心</li>
                            <li>资质证明</li>
                            <li>用户案例</li>
                            <li>联系我们</li>
                        </ul>
                    </div>
                    <div className="copyright">
                        Copyright @ 2020.All rights reserved.重庆国科诚远环境科技有限公司.版权所有.渝ICP备19016729号
                    </div>
                </div>
                <div className="footer-right">
                    <div className="code">
                        <img src="/footer/erweima @2x.png" alt=""/>
                        <p>更多详情  扫码关注</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
