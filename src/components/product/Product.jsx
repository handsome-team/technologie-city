import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./product.scss";
import { getProductdata } from "../../api/index";
import Footer from '../footer/Footer'
import Wing from '../wing/Wing'
const Product = () => {
  let [count, setCount] = useState([]);
  useEffect(() => {
    getProductdata().then((res) => {
      var data = res.data;
      data = data.map((item) => {
        item.child = item.child.split("#");
        return item;
      });
      setCount(data)
    });
  }, []);
  let route = useLocation();
  const [state, setState] = useState(1);

  return (
    <div className="productcontainer">
      <Wing />
      <img className="product_banner" src="/Product/q_bg.png" alt="" />
      <div className="product_bread">
        <NavLink to="/">
          <span className="unsele">
            首页 {">"}
            {">"}
          </span>
        </NavLink>
        <span className="sele">产品中心</span>
      </div>
      <div className="product_title">恒温恒湿称重系统</div>
      <div className="product_swper">
        {count.map((item, index) => {
          console.log(item)
          return (
            <React.Fragment key={index}>
              <div className={state === index ? "selec block" : "selec none"}>
                <img className="selec_img" src={item.url} alt="" />
                <div className="selec_right">
                  <div className="qian_title">
                    <p>{item.name}</p>
                    <p>{item.title}</p>
                  </div>
                  <ul className="qian_list">
                    {item.child.map((list, lindex) => {
                      return (
                        <li key={lindex}>
                          <span>{list}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <p>......</p>
                </div>
                <NavLink to={`/product/${item.ir}`}>
                  <button className="buton">MORE →</button>
                </NavLink>
              </div>
              <div
                className={
                  state === index
                    ? "qian qian_left none"
                    : "qian qian_left block"
                }
                name={index}
                onClick={() => setState(index)}
              >
                <div className="qian_title">
                  <p>{item.name}</p>
                  <p>{item.title}</p>
                </div>
                <ul className="qian_list">
                  {item.child.map((list, lindex) => {
                    return (
                      <li key={lindex}>
                        <span>{list}</span>
                      </li>
                    );
                  })}
                </ul>
                <p>......</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div style={{ width: "100%", height: "30px" }}></div>
      <Footer></Footer>
    </div>
  );
};

export default Product;
