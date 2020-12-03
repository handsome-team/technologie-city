import React from "react";
import { NavLink} from "react-router-dom";
import "./MainTwo.scss";
import imgURL from './mainimg/bbanner.png';
import imgURL2 from './mainimg/b2.png';
import imgURL3 from './mainimg/b3.png';
import imgURL4 from './mainimg/a4.png';
import imgURL5 from './mainimg/b4.png';
import A1 from './mainimg/a1.png';
import C1 from './mainimg/c1.png';
import Footer from '../../footer/Footer'
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
                {/* 产品图片 */}
                <div className="productmain_1">
                    <img src={imgURL} />
                </div>
                {/* 选项卡按钮 */}
                <div className="productmain_2">
                    <div className={"yjn_xxk"+ (tabActiveIndex === 0 ? 'active': '')} onClick={this.handleTabClick.bind(this, 0)} ><b>历史与介绍</b></div>
                    <div className={"yjn_xxk"+ (tabActiveIndex === 1 ? 'active': '')} onClick={this.handleTabClick.bind(this, 1)}><b>参数与性能指示</b></div>
                </div>
                {/* 主题内容 */}
                <div className="xxk_main">
                    <div>
                        <img className={"img"+ (tabActiveIndex === 1 ? 'active': '')} src={imgURL2} />
                        <img className={"img"+ (tabActiveIndex === 1 ? 'active': '')} src={imgURL3} />
                        <img className={"img"+ (tabActiveIndex === 0 ? 'active': '')} src={imgURL5} />
                    </div>
                    <div className={"yjn_aboutcp"+ (tabActiveIndex === 0 ? 'active': '')}>
                        <img src={imgURL4} />
                        <NavLink to="/product/MainOne">
                        <div className="yjn_cp_pic">
                            <img src={A1} style={{marginRight:'60px'}}/>  
                            <div className="yjn_cptext">
                                CEWS-A型<br/>
                                环境控制全自动称重工作台
                            </div>
                        </div>
                        </NavLink>
                        <NavLink to="/product/MainThree">
                        <div className="yjn_cp_pic">
                            <img src={C1} />  
                            <div className="yjn_cptext">
                                CEWS-M型<br/>
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