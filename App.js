import React from "react";
import "./App.css";
import memesData from "./memesData";

function App() {
  function displayText() {
    console.log("Hover");
  }
  function handleClick() {
    console.log(memesData.data.memes[Math.round(Math.random() * 100)].url);
  }

  const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {}

  return (
    <div className="App">
      <div className="form">
        <div className="input-fields-holder holder">
          <input placeholder="Top text" type="text"></input>
          <input placeholder="Bottom text" type="text"></input>
        </div>
        <div className="button-holder holder">
          <button onClick={handleClick}>Get a new meme image</button>
        </div>
      </div>

      <div onMouseOver={displayText} className="image-holder holder">
        <img></img>
      </div>
    </div>
  );
}

export default App;
