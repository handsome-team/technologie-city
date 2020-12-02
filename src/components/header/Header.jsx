import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Product from "../product/Product";
import User from "../user/User";
import Company from "../company/Company";
import Qualifications from "../qualifications/Qualifications";
import "./header.scss";
export default function Header() {
  return (
    <>
      <div className="navBox">
        <nav className="navtab">
          <div className="navlogo">
            <img src="/header/20407796_1601348957.png" alt="" />
          </div>
          <ul>
            <li>
              <NavLink to="/">首页</NavLink>
            </li>
            <li>
              <NavLink to="/about">关于我们</NavLink>
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
        <div className="iconBox">
          <img src="/header/27c31510bcda57a12dc19bf50e56fa3.png" alt="" />
          <img src="/header/6ed37420cff1f306799af4db05eded6.png" alt="" />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
          <Route path="/user" component={User} />
          <Route path="/company" component={Company} />
          <Route path="/qualifications" component={Qualifications} />
        </Switch>
      </div>
    </>
  );
}
