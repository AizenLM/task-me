import React from "react";
import Header from "./Header";
import "./presentation.css";
import About from "./About";
import Features from "./Features";

export default function index() {
  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        <Features></Features>
      </main>
    </div>
  );
}
