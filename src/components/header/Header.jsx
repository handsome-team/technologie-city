import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Product from '../product/Product'
import User from '../user/User'
import Company from '../company/Company'
import Message from "../home/message"
import Qualifications from '../qualifications/Qualifications'
import './header.scss'
import Contact from '../home/contact'
export default function Header() {
    return (
        <>
            <div className="navBox">
                <nav className='navtab'>
                    <div className="navlogo">
                        <img src='/header/20407796_1601348957.png' alt="" />
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/">首页</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" >关于我们</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">产品中心</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user">用户案例</NavLink>
                        </li>
                        <li>
                            <NavLink to="/company">公司动态</NavLink>
                        </li>
                        <li>
                            <NavLink to="/qualifications">资质证明</NavLink>
                        </li>
                    </ul>

                </nav>
                <div className='iconBox'>
                    <span className="icon1 iconfont">&#xe637;</span>
                    <span className="icon2 iconfont">&#xe61a;</span>
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/product" component={Product} />
                    <Route path="/user" component={User} />
                    <Route path="/company" component={Company} />
                    <Route path="/qualifications" component={Qualifications} />
                    <Route path='/message' component={Message} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        </>
    )
}
