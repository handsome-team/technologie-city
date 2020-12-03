import React from "react";
import { NavLink} from "react-router-dom";

const Product = () => {
  return (
    <div>
        <NavLink to="/product/MainOne">详情页一</NavLink><br/>
        <NavLink to="/product/MainTwo">详情页二</NavLink><br/>
        <NavLink to="/product/MainThree">详情页三</NavLink>
    </div>
  );
};

export default Product;

 