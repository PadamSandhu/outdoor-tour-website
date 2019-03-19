import React, { Component } from 'react';
import {Header} from "./components/header";
import './styles/index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
      </div>
    );
  }
}

export default App;
