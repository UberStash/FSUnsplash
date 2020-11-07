import React, { useEffect, useState } from "react";
import Unsplash from "unsplash-js";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';


const toJson = require("unsplash-js").toJson;
const unsplash = new Unsplash({
  accessKey: "J7CpQbeIfmg5H_JOLBJ7EBtAv5mJqJM8b86_UqHMzos",
});

function AdForm() {
  const [state, setState] = useState({
    pictures: [],
    text: '',
    name: '',
    content: '',
    background: '',
    type: '',
    url: ''
  });

  const Test = function () {
    useEffect(() => {
      unsplash.search
        .photos(`${state.type}`, 1, 20, { orientation: "portrait", color: "green" })
        .then(toJson)
        .then((json) => {
          console.log(json.results);
          setState((prev) => ({
            ...prev,
            pictures: json.results,
          }));
          console.log(state);
        });
    }, [state.type]);
  };

  const pictureList = state.pictures.map((picture)=> {
        return <MenuItem value={picture.urls.full}>
        <Avatar alt="Remy Sharp" src={picture.urls.full} />
        </MenuItem>
        // console.log(picture)
      })
  
  
  Test()

  return (
      
    <form>
      
      <div>
        <label>
          Type of Business:
          <TextField id='type' name="type" onSelect={(event) => setState((prev) => ({
              ...prev,
            type: event.target.value,
          }), console.log(state.type))}/>
        </label>
      </div>

      <div>
        <label>
          Name of your Business:
          <TextField name="name" id="name" onChange={(event) => setState((prev) => ({
              ...prev,
            name: event.target.value,
          }), console.log(state.name))}/>
        </label>
      </div>
      <div>
     <label>
         Select Your Background
      <Select
      
          labelId="background"
          id="background"
          value={state.background}
          onChange={(event) => {
            event.preventDefault()  
            setState((prev) => ({
              ...prev,
            background: event.target.value,
          }), console.log(state))}}
        >
          {pictureList}
        </Select>
        </label>
        </div>
        <div>
    
        <label>
          Select Your Font Style:
          

          <Select
        //   SelectProps={{
        //     SelectDisplayProps: {
        //         "data-testid": "id-font"
        //     }
        // }}
          labelId="font"
          id="font"
          value={state.text}
          onChange={(event) => {
            event.preventDefault()  
            setState((prev) => ({
              ...prev,
            text: event.target.value,
          }), console.log(state))}}
        >
          <MenuItem value={'Bebas Neue'} style={{fontFamily: 'Bebas Neue'}}>Bold</MenuItem>
          <MenuItem value={'Amatic SC'} style={{fontFamily: 'Amatic SC'}}>Quiet</MenuItem>
          <MenuItem id="fancy" value={'Parisienne'} style={{fontFamily: 'Parisienne'}}>Fancy</MenuItem>
        </Select>
        </label>
      </div>
      <div>
          <label>
              What would you like written in the Ad?
              <br/>
      <TextField 
      id="content"
      multiline
      placeholder='what should your ad say?' text="text" onChange={(event) => setState((prev) => ({
              ...prev,
            content: event.target.value,
          }), console.log(state.content))}/>
          </label>
      </div>
      <div>
          <label>
              Do you want contact information in the ad?
              <br/>
      <TextField 
      id="contact"
      multiline
      placeholder='Contact Information?' text="text" onChange={(event) => setState((prev) => ({
              ...prev,
            contact: event.target.value,
          }), console.log(state.contact))}/>
          </label>
      </div>
      <div>
          <label>
              What URL would you like the ad to go to?
              <br/>
      <TextField 
      id="url"
      multiline
      placeholder='tell me where to send them when they click?' text="text" onChange={(event) => setState((prev) => ({
              ...prev,
            url: event.target.value,
          }), console.log(state.content))}/>
          </label>
      </div>
      <Button type="submit" variant="contained" color='secondary'>Preview</Button>
    </form>
  );
}

export default AdForm;
