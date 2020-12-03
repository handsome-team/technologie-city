import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Product from '../product/Product'
import User from '../user/User'
import Company from '../company/Company'
import Message from "../home/message"
import Qualifications from '../qualifications/Qualifications'
import MainOne from '../product/atype/MainOne'
import MainTwo from '../product/atype/MainTwo'
import MainThree from '../product/atype/MainThree'
import Details from "../company/Details";

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
              <NavLink to="/" exact activeStyle={{ color: '' }} activeClassName='active'>首页</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{ color: 'blue' }}>关于我们</NavLink>
            </li>
            <li>
              <NavLink to="/product" activeStyle={{ color: 'blue' }}>产品中心</NavLink>
            </li>
            <li>
              <NavLink to="/user" activeStyle={{ color: 'blue' }}>用户案例</NavLink>
            </li>
            <li>
              <NavLink to="/company" activeStyle={{ color: 'blue' }}>公司动态</NavLink>
            </li>
            <li>
              <NavLink to="/qualifications" activeStyle={{ color: 'blue' }} >资质证明</NavLink>
            </li>
          </ul>

        </nav>
        <div className="iconBox">
          <img src="/header/微信 (5).png" alt="" />
          <img src="/header/微博 (2).png" alt="" />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
          <Route path="/user" component={User} />
          <Route path="/company" exact component={Company} />
          <Route path="/company/:id" component={Details} />
          <Route path="/qualifications" component={Qualifications} />
          <Route path='/message' component={Message} />
          <Route path='/contact' component={Contact} />
          <Route path="/product/MainOne" component={MainOne} />  
                    <Route path="/product/MainTwo" component={MainTwo} />  
                    <Route path="/product/MainThree" component={MainThree} /> 
        </Switch>
      </div>
    </>
  );
}
