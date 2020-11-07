import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
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
    width: "40rem",
    height: "40rem",
    backgroundImage: `url(${props.state.background})`,
    borderRadius: "2%",
  };

  

  function download() {
    let htmlText = 
    
    `
    HTML
    --------------
    
    <a href={${props.state.url}}>
    <div id="preview">
      <div style={style}>
        <h1 id="name">${props.state.name}</h1>
        <h3 id="message">${props.state.content}</h3>
        <p id="contact">${props.state.contact}</p>
        <p id="ad-price">${props.state.price}</p>
      </div>
    </div>
  </a>
  
  
  CSS
  ----------------
  
  `

  const filename = "yourAd.txt";
    
    
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:htmlText/plain;charset=utf-8," + encodeURIComponent(htmlText)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

    

  

  

  console.log(style);
  return (
    <div>
    <a href={props.state.url}>
      <div id="preview">
        <div style={style}>
          <h1 id="name">{props.state.name}</h1>
          <h3 id="message">{props.state.content}</h3>
          <p id="contact">{props.state.contact}</p>
          <p id="ad-price">{props.state.price}</p>
        </div>
      </div>
    </a>
    <Button
    variant="contained"
    color="primary"
    size="large"
    onClick={download}
    // className={classes.button}
    startIcon={<SaveIcon />}
  >
    Save
  </Button>
  </div>
  );
}

export default AdPreview;
