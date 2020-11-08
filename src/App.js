import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import AdForm from "./components/AdForm/AdForm";
import AdPreview from "./components/AdPreview/AdPreview";
import Header from "./components/Header/Header";
// TODO: Replace "APP_ACCESS_KEY" with your own key, which
// can be generated here: https://unsplash.com/developers

function App() {
  const [state, setState] = useState({
    pictures: [],
    text: "",
    name: "",
    contact: "",
    content: "",
    background: "",
    type: "",
    url: "",
    price: "",
    color: "",
    visible: false,
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
      color: state.color,
      visible: true,
    });
  };

  return (
    <div>
      <Header setState={setState} />
      {state.visible ? (
        <Grid container direction="row" justify="center">
          <Grid item xs={12} lg={6} class="main-containers">
            <AdForm passBack={passBack} />
          </Grid>
          <Grid item xs={12} lg={6} id="preview-app" class="main-containers">
            <AdPreview state={state} />
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
}

export default App;
