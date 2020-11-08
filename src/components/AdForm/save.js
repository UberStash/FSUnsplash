export function download(state) {
  let htmlText = `
    HTML
    --------------
    
    <a href={${state.url}}>
    <div id="preview">
      <div id="style">
        <h1 id="name">${state.name}</h1>
        <h3 id="message">${state.content}</h3>
        <p id="contact">${state.contact}</p>
        <p id="ad-price">${state.price}</p>
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
    color: ${state.color},
    background-repeat: no-repeat;
    backgroundA-attachment: scroll;
    background-position: center;
    background-size: cover;
    width: 40rem;
    height: 40rem;
    background-image: url(${state.background});
    border-radius: 2%;
  }
  `;

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
