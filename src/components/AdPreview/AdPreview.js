import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Container from "@material-ui/core/Container";
import "./AdPreview.css";
function AdPreview(props) {
  console.log(props);

  const style = {
    color: props.state.color ? props.state.color : 'black',
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "40rem",
    height: "40rem",
    backgroundImage: props.state.background ? `url(${props.state.background})` : `url("https://images.unsplash.com/photo-1603820909538-b961d37f43a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE4MDU5Mn0")`,
    // backgroundColor: props.state.background? "null" : "white",
    borderRadius: "2%",
    fontFamily: props.state.text ? props.state.text : 'Bebas Neue',
    // border: '1px solid black'
  };

  

  
    

  

  

  console.log(style);
  return (
    <div id='preview-container'>
    <a href={props.state.url}>
      <div id="preview">
        <div style={style}>
          <h1 id="name">{props.state.name ? props.state.name : 'Your Business Name'}</h1>
          <h3 id="message">{props.state.content ? props.state.content : 'Your Message'}</h3>
          <h3 id="contact">{props.state.contact ? props.state.contact : 'Your Contact Information'}</h3>
          <h3 id="ad-price">{props.state.price ? props.state.price : "Your Price"}</h3>
        </div>
      </div>
    </a>
    
  </div>
  );
}

export default AdPreview;
