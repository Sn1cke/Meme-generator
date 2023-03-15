import React from "react";
import memesData from "../memesData";

export default function Meme() {
  function newMemeButton() {
    console.log(
      memesData.data.memes[
        Math.floor(Math.random() * memesData.data.memes.length - 1)
      ].url
    );
  }
  return (
    <main>
      <div className="caption-form">
        <input
          className="caption-input"
          type="text"
          name="first-caption"
          id="first-caption"
          placeholder="Top text"
        />
        <input
          className="caption-input"
          type="text"
          name="second-caption"
          id="second-caption"
          placeholder="Bottom text"
        />
        <button className="generate-meme-btn" onClick={newMemeButton}>
          Get new meme image!
        </button>
      </div>
    </main>
  );
}
