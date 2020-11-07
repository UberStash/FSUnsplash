import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import "./AdPreview.css";
function AdPreview(props) {
  console.log(props);

  const style = {
    color: `${props.state.color}`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "400px",
    backgroundImage: `url(${props.state.background})`,
    borderRadius: '2%'
  };

console.log(style)
  return (
    <div id='preview'>
      <div style={style}>
        <h1>{props.state.name}</h1>
        <h3>{props.state.content}</h3>
        <p>{props.state.contact}</p>
        <p>{props.state.price}</p>
      </div>
    </div>
  );
}

export default AdPreview;
