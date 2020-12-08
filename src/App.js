import "./customLogo.png"
import "./images.jpeg"
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"

import React, { useState, useEffect } from "react"

import HomePage from "./components/Homepage"

function App() {

  return (
    <BrowserRouter>
      <Route path="/home">
        <HomePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
