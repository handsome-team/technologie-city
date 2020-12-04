import "./about.scss";
import React from "react";
import { getAboutus } from "../../api/index";

import { useState, useEffect } from "react";
import Footer from '../footer/Footer'
import Map from '../map/Map'
import Wing from '../wing/Wing'
// 组件
export default function About(props) {
  // 当前页面
  const nowurl = props.match.path.substr(1, props.match.path.length - 1);
  const [left, setLeft] = useState(0);
  const [seleted, setSeleted] = useState(0);
  const [datalist, setDatalist] = useState([]);
  useEffect(() => {
    const getAboutData = async () => {
      let { data, code } = await getAboutus();
      if (code == 200) {
        setDatalist(data);
      }
    };
    getAboutData();
  }, []);
  // 左右按钮事件
  const onMousclick = () => {
    setLeft(left - 500);
    if (seleted === 0) {
      setSeleted(seleted + 2);
    } else {
      setSeleted(seleted + 1);
    }
    if (left < -1000) {
      setSeleted(1);
      setLeft(0);
    }
  };
  // 上面的时间点事件
  let indexs = 0;
  const onMousClicks = (index) => {
    setSeleted(index);
    if (index === 0 || index === 1) {
      setLeft(0);
    } else {
      if (indexs > index) {
        setLeft((index - 1) * 500);
      }
      if (indexs < index) {
        setLeft((index - 1) * -500);
      }
      indexs = index;
    }
  };
  return (
    <div className="aboutcontainer">
      <Wing />
      {/* 顶部图片 */}
      <div className="topimg">
        <img src={`${process.env.PUBLIC_URL}/about/u421.png`} />
      </div>
      {/* 当前所在页面 */}
      <div className="label">
        <span className='shouye'>首页&gt;&gt;</span>
        <span style={{ color: "black" }}>
          {nowurl == "about" ? "关于我们" : ""}
        </span>
      </div>
      {/* 历史盒子 */}
      <div className="history">
        <div className="historytitle">
          <img src={`${process.env.PUBLIC_URL}/about/u446.png`} />
        </div>
        <div className="historycontent">
          <img src={`${process.env.PUBLIC_URL}/about/u447.png`} />
        </div>
      </div>
      {/* 发展盒子 */}
      <div className="h_top-three">
        <div className="h_top-three-box">
          <img src="/about/u420.png" alt="" />
          <div className="h_top-content">
            <img src="/about/u448.png" alt="" className='devobgimg' />
            <div className="h_top-content-footer-dot">
              <div
                onClick={() => {
                  onMousClicks(0);
                }}
              >
                <p>现在</p>
                <p
                  className={
                    seleted === 0
                      ? "h_top-content-footer-dot-bg h_top-content-footer-dot-bg-select"
                      : "h_top-content-footer-dot-bg"
                  }
                >
                  <span></span>
                </p>
              </div>
              <div
                onClick={() => {
                  onMousClicks(1);
                }}
              >
                <p>2018</p>
                <p
                  className={
                    seleted === 1
                      ? "h_top-content-footer-dot-bg h_top-content-footer-dot-bg-select"
                      : "h_top-content-footer-dot-bg"
                  }
                >
                  <span></span>
                </p>
              </div>
              <div
                onClick={() => {
                  onMousClicks(2);
                }}
              >
                <p>2015</p>
                <p
                  className={
                    seleted === 2
                      ? "h_top-content-footer-dot-bg h_top-content-footer-dot-bg-select"
                      : "h_top-content-footer-dot-bg"
                  }
                >
                  <span></span>
                </p>
              </div>
              <div
                onClick={() => {
                  onMousClicks(3);
                }}
              >
                <p>2014</p>
                <p
                  className={
                    seleted === 3
                      ? "h_top-content-footer-dot-bg h_top-content-footer-dot-bg-select"
                      : "h_top-content-footer-dot-bg"
                  }
                >
                  <span></span>
                </p>
              </div>
              <div
                onClick={() => {
                  onMousClicks(4);
                }}
              >
                <p>2012</p>
                <p
                  className={
                    seleted === 4
                      ? "h_top-content-footer-dot-bg h_top-content-footer-dot-bg-select"
                      : "h_top-content-footer-dot-bg"
                  }
                >
                  <span></span>
                </p>
              </div>
            </div>
            <div className="h_top-content-bottom-footer"></div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <ul style={{ left: left + "px" }}>
            {datalist.length == 0 ? <></> : datalist.map((item) => {
              return (
                <li key={item.id}>
                  <p className="h_top-three-pb">{item.time}</p>
                  <p className="h_top-three-p">{item.text}</p>
                </li>)
            })}
          </ul>
          <div style={{ textAlign: "center" }}>
            <img
              className="h_top-three-img-fz"
              src="/about/fazhanjiantou.png"
              onClick={onMousclick}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 地图 */}
      <Map />
      {/* 底部 */}
      <Footer />
    </div>
  );
}
