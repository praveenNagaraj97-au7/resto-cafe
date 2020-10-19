import React from "react";
import { useSelector } from "react-redux";

import history from "../history";
import "./styles/header.scss";

const fontAwesome = document.createElement("link");
fontAwesome.rel = "stylesheet";
fontAwesome.href =
  "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
fontAwesome.integrity =
  "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN";
fontAwesome.crossOrigin = "anonymous";
document.head.appendChild(fontAwesome);

export default () => {
  const count = useSelector(({ foodCart: { totalItems } }) => totalItems);

  return (
    <div className='header'>
      <div className='company-name' onClick={() => history.push("/")}>
        Resto Cafe
      </div>
      <div className='cart-container'>
        <span className='fa-stack fa-size has-badge' data-count={count}>
          <i className='fa fa-circle fa-stack-2x'></i>
          <i className='fa fa-shopping-cart fa-stack-1x fa-inverse'></i>
        </span>
      </div>
    </div>
  );
};
