import React from "react";
import { Switch, Route } from "react-router-dom";
import ChildOne from "./MainOne";
import ChildTwo from "./MainTwo";
import ChildThree from "./MainThree";
import Home from "./Home";

const Product = () => {
  return (
    <div>
      <Switch>
        <Route path={`/product/MainOne`} component={ChildOne} />
        <Route path={`/product/MainTwo`} component={ChildTwo} />
        <Route path={`/product/MainThree`} component={ChildThree} />
        <Route path={`/product`} component={Home} />
      </Switch>
    </div>
  );
};

export default Product;

 