import Unsplash from "unsplash-js";
import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
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
    contact: '',
    content: '',
    background: '',
    type: '',
    url: '',
    price: '',
    color: '',
  });

  const passBack = (state) => {
    setState({
    text: state.text,
    name: state.name,
    content: state.content,
    background: state.background,
    url: state.url,
    contact: state.contact,
    price: state.price,
    color: state.color
    })
  }


  return (
    
      <Grid container spacing={3}>
        <Grid item xs={6}>
        <AdForm passBack={passBack}/>
        </Grid>
        <Grid item xs={6}>
        <AdPreview state={state}/>
        </Grid>
        </Grid>
    
    
    
    
  );
}

export default App;
