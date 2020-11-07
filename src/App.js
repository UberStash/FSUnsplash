import Unsplash from "unsplash-js";
import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AdForm from "./components/AdForm/AdForm";
import AdPreview from "./components/AdPreview/AdPreview" 
// TODO: Replace "APP_ACCESS_KEY" with your own key, which
// can be generated here: https://unsplash.com/developers






function App() {
  const [state, setState] = useState({
    pictures: [],
    text: '',
    name: '',
    content: '',
    background: '',
    type: '',
    url: ''
  });

  const passBack = (state) => {
    setState({
    text: state.text,
    name: state.name,
    content: state.content,
    background: state.background,
    url: state.url
    })
  }


  return (
    <div>
    <AdForm passBack={passBack}/>
    
    <AdPreview state={state}/>
    </div>
  );
}

export default App;
