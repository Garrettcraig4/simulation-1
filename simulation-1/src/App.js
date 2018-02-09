import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./Components/Header";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />

        <Header />
      </div>
    );
  }
}

export default App;
