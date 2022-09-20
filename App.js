import React from "react";
import "./App.css";
import memesData from "./memesData";

function App() {
  function displayText() {
    console.log("Hover");
  }

  const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {
    setMemeImage(memesData.data.memes[Math.round(Math.random() * 100)].url);
  }

  return (
    <div className="App">
      <div className="form">
        <div className="input-fields-holder holder">
          <input placeholder="Top text" type="text"></input>
          <input placeholder="Bottom text" type="text"></input>
        </div>
        <div className="button-holder holder">
          <button onClick={getMemeImage}>Get a new meme image</button>
        </div>
      </div>

      <div onMouseOver={displayText} className="image-holder holder">
        <img src={memeImage} />
      </div>
    </div>
  );
}

export default App;
