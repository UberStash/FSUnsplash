import React, {useEffect, useState} from 'react';
import Unsplash from "unsplash-js";
const toJson = require("unsplash-js").toJson;
const unsplash = new Unsplash({
    accessKey: "J7CpQbeIfmg5H_JOLBJ7EBtAv5mJqJM8b86_UqHMzos",
  });

function AdForm() {

    const [state, setState] = useState({
        pictures: []
    })
      
    const Test = function () {
       useEffect(()=> {
        unsplash.search
        .photos("dogs", 1, 10, { orientation: "portrait", color: "green" })
        .then(toJson)
        .then((json) => {
          console.log(json.results);
          setState((prev) => ({
              ...prev,
              pictures: json.results,
            }))
            console.log(state)
        });
       }, [])
        
      };
    
      Test()


    return (
        <form>
        <label>
          Name of your Business:
          <input type="dropdown" name="name" />
        </label>
        
        <input type="submit" value="Submit" />
        
        <select value="Radish">
  <option value="Orange">Orange</option>
  <option value="Radish">Radish</option>
  <option value="Cherry">Cherry</option>
</select>
      </form>
    );
  }
  
  export default AdForm;