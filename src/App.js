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
    
      <Grid container
      direction="row"
      justify="center"
      alignItems="center" 
      >
        <Grid item xs class='main-containers'>
        <AdForm passBack={passBack} />
        </Grid>
        <Grid item xs id='preview-app' class='main-containers'>
        <AdPreview state={state}/>
        </Grid>
        </Grid>
    
    
    
    
  );
}

export default App;
