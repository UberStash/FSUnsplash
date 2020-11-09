import React, { useEffect, useState } from "react";
import Unsplash from "unsplash-js";
import "./AdForm.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Form from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import { download } from "./save";
import SaveIcon from "@material-ui/icons/Save";
import { Grid } from "@material-ui/core";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";

const toJson = require("unsplash-js").toJson;
const unsplash = new Unsplash({
  accessKey: "J7CpQbeIfmg5H_JOLBJ7EBtAv5mJqJM8b86_UqHMzos",
});

function AdForm(props) {
  const [state, setState] = useState({
    pictures: [],
    text: "",
    name: "",
    content: "",
    background: "",
    contact: "",
    type: "",
    url: "",
    price: "",
    color: "black",
  });

  // background picture search (runs on type state change)
  useEffect(() => {
    unsplash.search
      .photos(`${state.type}`, 1, 20, {
        orientation: "portrait",
        color: "green",
      })
      .then(toJson)
      .then((json) => {
        setState((prev) => ({
          ...prev,
          pictures: json.results,
        }));
      });
  }, [state.type]);

  // map results of api call
  const pictureList = state.pictures.map((picture) => {
    return (
      <MenuItem value={picture.urls.full}>
        <img alt="image" className="img" src={picture.urls.small} />
      </MenuItem>
    );
  });

  return (
    <section id="form">
      <Form>
        <Grid
          container
          spacing={0}
          display="flex"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} lg={6}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={() => props.passBack(state)}
              startIcon={<PresentToAllIcon />}
            >
              Preview
            </Button>

            <div className="input">
              <label>
                Business name
                <br />
                <TextField
                  style={{ width: "20rem" }}
                  id="name"
                  InputProps={{ disableUnderline: true }}
                  onChange={(event) =>
                    setState((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div className="input">
              <label>
                Your message
                <br />
                <TextField
                  id="content"
                  style={{ width: "20rem" }}
                  InputProps={{ disableUnderline: true }}
                  onChange={(event) =>
                    setState((prev) => ({
                      ...prev,
                      content: event.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div className="input">
              <label>
                Your contact info
                <br />
                <TextField
                  style={{ width: "20rem" }}
                  id="contact-info"
                  InputProps={{ disableUnderline: true }}
                  text="text"
                  onChange={(event) =>
                    setState((prev) => ({
                      ...prev,
                      contact: event.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div className="input">
              <label>
                Price to be displayed
                <br />
                <TextField
                  style={{ width: "20rem" }}
                  InputProps={{ disableUnderline: true }}
                  id="price"
                  text="text"
                  onChange={(event) =>
                    setState((prev) => ({
                      ...prev,
                      price: event.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div className="input">
              <label>
                URL for the link
                <br />
                <TextField
                  id="url"
                  style={{ width: "20rem" }}
                  InputProps={{ disableUnderline: true }}
                  text="text"
                  onChange={(event) =>
                    setState((prev) => ({
                      ...prev,
                      url: event.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div className="input">
              <label>
                Font
                <Select
                  style={{ borderRadius: ".5rem", width: "5rem" }}
                  disableUnderline
                  id="font"
                  value={state.text}
                  onChange={(event) => {
                    event.preventDefault();
                    setState((prev) => ({
                      ...prev,
                      text: event.target.value,
                    }));
                  }}
                >
                  <MenuItem
                    value={"Bebas Neue"}
                    style={{ fontFamily: "Bebas Neue" }}
                  >
                    Bold
                  </MenuItem>
                  <MenuItem
                    value={"Amatic SC"}
                    style={{ fontFamily: "Amatic SC" }}
                  >
                    Quiet
                  </MenuItem>
                  <MenuItem
                    id="fancy"
                    value={"Parisienne"}
                    style={{ fontFamily: "Parisienne" }}
                  >
                    Fancy
                  </MenuItem>
                </Select>
              </label>

              <label>
                Color
                <Input
                  style={{ width: "5rem" }}
                  disableUnderline
                  type="color"
                  id="color"
                  value={state.color}
                  onChange={(event) => {
                    event.preventDefault();
                    setState((prev) => ({
                      ...prev,
                      color: event.target.value,
                    }));
                  }}
                />
              </label>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Button
              id="save"
              variant="contained"
              color="primary"
              size="large"
              onClick={() => download(state)}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>

            <div className="input">
              <label>
                Background search
                <br />
                <TextField
                  style={{ width: "20rem" }}
                  id="type"
                  name="type"
                  InputProps={{ disableUnderline: true }}
                  onSelect={(event) =>
                    setState((prev) => ({
                      ...prev,
                      type: event.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div className="input">
              <label>
                Select your background
                <br />
                <Select
                  disableUnderline
                  id="background"
                  value={state.background}
                  style={{ width: "20rem" }}
                  onChange={(event) => {
                    event.preventDefault();
                    setState((prev) => ({
                      ...prev,
                      background: event.target.value,
                    }));
                  }}
                >
                  {pictureList}
                </Select>
              </label>
            </div>
          </Grid>
        </Grid>
      </Form>
    </section>
  );
}

export default AdForm;
