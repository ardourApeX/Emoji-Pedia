import React, { useState } from "react";
import "./styles.css";
import bg from "./bg.svg";
var emojiDatabase = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes"
};
var suggestions = ["😀", "😃", "😄", "😆", "🤣"];
export default function App() {
  const [meaning, setMeaning] = useState("");
  //Function to handle TYPED EMOJIS
  function onchangeHandler(event) {
    var meaning = emojiDatabase[event.target.value];
    console.log(event.target.value);
    if (event.target.value === "") {
      meaning = "";
    } else if (meaning === undefined) {
      meaning = "We do not have this in out database :(";
    }
    setMeaning(meaning);
  }
  //Function to handle CLICKED EMOJIS
  function emojiClickHandler(emoji) {
    // console.log(emoji);
    setMeaning(emojiDatabase[emoji]);
  }
  return (
    <div>
      <div>
        <h1 id="Heading">Emoji-Encylopedia</h1>
        <img id="Wallpaper" src={bg} alt="Wallpaper"></img>
        <input
          placeholder="Place your emoji here..."
          onChange={onchangeHandler}
        ></input>
      </div>
      <div id="div2">
        <h2 id="Suggestion">Suggestions</h2>
        {suggestions.map(function (emoji) {
          return (
            <span
              id="Emojis"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <div></div>
      <h2 id="output-text">
        According to Emoji-pedia it means: <span>{meaning}</span>
      </h2>
    </div>
  );
}
