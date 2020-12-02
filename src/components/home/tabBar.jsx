import React, { useState } from "react";
import "./tabBar.scss";

const Tabbar = () => {
  const [zhi, setZhi] = useState("0");
  let array = [
    {
      url: "/home/u58.png",
      title: "CEWS-A型 环境控制全自动称重工作站",
      name: "cewsa",
      child: [
        "1.上下分体式模块化设计",
        "2.支持用户现有天平定制整机系统",
        "3.三轴机械手方案，精准完成称量任务",
      ],
    },
    {
      url: "/home/c图_u70.png",
      title: "CEWS-C型 环境控制全自动称重工作站",
      name: "cewsc",
      child: [
        "1.高洁净度的工作环境",
        "2.多次称重<5ug,科研级精度",
        "3.样品放置采用多层架设计，大容量",
      ],
    },
    {
      url: "/home/m图_u63.png",
      title: "CEWS-M型 恒温恒湿称重工作站",
      name: "cewsm",
      child: [
        "1.低音噪 低功耗设计，功率低于0.8千瓦",
        "2.模块化设计，单独模块重量低于70kg，易安装",
        "3.可扩展设计，样品容量可根据需要的扩展操作箱",
      ],
    },
  ];
  return (
    <div>
      {/* 选项卡 */}
      <div className="xuanxiang">
        <div className="xuanxiang_top">
          <div
            className={zhi === "0" ? "cewsa" : ""}
            onMouseOver={() => setZhi("0")}
          >
            <span>CEWS-A型</span> <span>→</span>
          </div>
          <div
            className={zhi === "1" ? "cewsa" : ""}
            onMouseOver={() => setZhi("1")}
          >
            <span>CEWS-C型</span> <span>→</span>
          </div>
          <div
            className={zhi === "2" ? "cewsa" : ""}
            onMouseOver={() => setZhi("2")}
          >
            <span>CEWS-M型</span> <span>→</span>
          </div>
        </div>
        {array.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div
                className={
                  zhi === String(index)
                    ? "block xuanxiang_con"
                    : "xuanxiang_con"
                }
              >
                <div className="xuanxiang_con_left">
                  <div className="xuanxiang_con_title">{item.title}</div>
                  <div className="biao"></div>
                  <ul>
                    {item.child.map((list, lindex) => {
                      return <li key={lindex}>{list}</li>;
                    })}
                  </ul>
                  <div className="button">MORE →</div>
                </div>
                <div className="xuanxiang_con_right">
                  <img src={item.url} alt="" />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Tabbar;
