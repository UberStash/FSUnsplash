import React, { useEffect, useState } from "react";
import "./AdPreview.css";
function AdPreview(props) {
console.log(props)
    return (
        <a href={props.state.url}>
        <div style={{  
  background: "url(" + props.state.background + ")",
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat'
}} class="img"></div>
        <p class="exp">{props.state.content}</p>
<p class="title">{props.state.name}</p>
      </a>
    )
}

export default AdPreview;