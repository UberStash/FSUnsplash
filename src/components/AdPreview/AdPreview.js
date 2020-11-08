import React from "react";

import "./AdPreview.css";
function AdPreview(props) {
  const style = {
    color: props.state.color ? props.state.color : "black",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "40rem",
    height: "40rem",
    backgroundImage: props.state.background
      ? `url(${props.state.background})`
      : `url("https://images.unsplash.com/photo-1603820909538-b961d37f43a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE4MDU5Mn0")`,
    borderRadius: "2%",
    fontFamily: props.state.text ? props.state.text : "Bebas Neue",
  };

  let url = !props.state.url.includes("http://")
    ? "http://" + props.state.url
    : props.state.url;

  return (
    <div id="preview-container">
      <a href={url}>
        <div >
          <div style={style} id="preview">
            <h1 id="name">
              {props.state.name ? props.state.name : "Your Business Name"}
            </h1>
            <h3 id="message">
              {props.state.content ? props.state.content : "Your Message"}
            </h3>
            <h3 id="contact">
              {props.state.contact
                ? props.state.contact
                : "Your Contact Information"}
            </h3>
            <h3 id="ad-price">
              {props.state.price ? props.state.price : "Your Price"}
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default AdPreview;
