import React from "react";
import Orders from "./Orders.js";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <div className="restaurant-order row">
        <div className="orders col-12 lg-col-12" />
        <Orders orderType="Pizzas" />
        <Orders orderType="Salads" />
        <Orders orderType="Chocolate cake" />
      </div>
    </div>
  );
};

export default Restaurant;
