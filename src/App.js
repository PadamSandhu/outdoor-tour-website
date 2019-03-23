import React, { Component } from "react";
import { Header } from "./components/header";
import Home from "./components/home";
// import Grid from "./components/grid";
import "./styles/index.scss";

class App extends Component {
  render() {
    console.log("this Application uses BEM css Architecture");
    return (
      <div className="App">
        <Header />
        {/* <Grid /> */}
        <Home />
      </div>
    );
  }
}

export default App;
