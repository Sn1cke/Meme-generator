import React from "react";
import "./App.scss";
import Header from "./components/header";
import Meme from "./components/meme";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Meme />
    </div>
  );
}
