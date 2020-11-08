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
    backgroundImage: `url(${props.state.background})`,
    backgroundColor: props.state.background? "null" : "black",
    borderRadius: "2%",
    fontFamily: props.state.text ? props.state.text : 'Bebas Neue',
    border: '1px solid black'
  };

  

  function download() {
    let htmlText = 
    
    `
    HTML
    --------------
    
    <a href={${props.state.url}}>
    <div id="preview">
      <div id="style">
        <h1 id="name">${props.state.name}</h1>
        <h3 id="message">${props.state.content}</h3>
        <p id="contact">${props.state.contact}</p>
        <p id="ad-price">${props.state.price}</p>
      </div>
    </div>
  </a>
  
  
  CSS
  ----------------
  
  
h1, h3{
    font-size: 3rem;
    background-color: rgba(235, 229, 229, 0.404);
    border-radius: 20px;
    padding: 5px;
    margin: .5em;
}

h3{
    font-size: 1.5em;
}

#preview {
    margin: 5rem;
    position:relative;
    width: 38rem;
    display: flex;
    flex-direction: column;
}

#message{
    float: right;
    padding-top: .5rem;
    margin: .5rem;
    
}

a {
    text-decoration: none;
 } 

#ad-price{
   /* float: right; */
   position: absolute;
    bottom: 0;
    right: 0;
    font-size: 2rem;
    background-color: rgba(235, 229, 229, 0.404);
    align-content: flex-end;
    border-radius: 20px;
    padding: 5px;
}

#contact{
    float: left;
    margin: 0.5rem 0.5rem;
    background-color: rgba(235, 229, 229, 0.404);
    border-radius: 20px;
    padding: 5px;
}

#style{
    color: ${props.state.color},
    background-repeat: no-repeat;
    backgroundA-attachment: scroll;
    background-position: center;
    background-size: cover;
    width: 40rem;
    height: 40rem;
    background-image: url(${props.state.background});
    border-radius: 2%;
  }
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
    <Button
    id='save'
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
