import React from "react";
import { NavLink } from "react-router-dom";
import "./MainOne.scss";
import imgURL from './mainimg/abanner.png';
import imgURL2 from './mainimg/a2.png';
import imgURL3 from './mainimg/a3.png';
import imgURL4 from './mainimg/a4.png';
import B1 from './mainimg/b1.png';
import C1 from './mainimg/c1.png';
import Footer from '../../footer/Footer'
import Wing from '../../wing/Wing'
class ProductMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabActiveIndex: 0
        }
    }
    render() {
        let tabActiveIndex = this.state.tabActiveIndex;
        return (
            <div>
                <Wing />
                {/* 产品图片 */}
                <div className="productmain_1">
                    <img src={imgURL} />
                </div>
                {/* 选项卡按钮 */}
                <div className="productmain_2">
                    <div className={"yjn_xxk" + (tabActiveIndex === 0 ? 'active' : '')} onClick={this.handleTabClick.bind(this, 0)} ><b>历史与介绍</b></div>
                    <div className={"yjn_xxk" + (tabActiveIndex === 1 ? 'active' : '')} onClick={this.handleTabClick.bind(this, 1)}><b>参数与性能指示</b></div>
                </div>
                {/* 主题内容 */}
                <div className="xxk_main">
                    <div>
                        <img className={"img" + (tabActiveIndex === 1 ? 'active' : '')} src={imgURL2} />
                        <img src={imgURL3} />
                    </div>
                    <div className={"yjn_aboutcp" + (tabActiveIndex === 0 ? 'active' : '')}>
                        <img src={imgURL4} />
                        <NavLink to="/product/MainTwo">
                            <div className="yjn_cp_pic">
                                <img src={B1} style={{ marginRight: '60px' }} />
                                <div className="yjn_cptext">
                                    CEWS-C型<br />
                                    环境控制称重工作台
                            </div>
                            </div>
                        </NavLink>
                        <NavLink to="/product/MainThree">
                            <div className="yjn_cp_pic">
                                <img src={C1} />
                                <div className="yjn_cptext">
                                    CEWS-M型<br />
                                    恒温恒湿称重工作站
                            </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
    // 选项卡点击事件
    handleTabClick(tabActiveIndex) {
        this.setState({
            tabActiveIndex
        })
    }
};

export default ProductMain;