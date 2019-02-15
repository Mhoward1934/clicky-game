import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-4">
            <p>Clicky Game</p>
          </div>
          <div className="col-md-4">
            <p>Click an image to begin!</p>
          </div>
          <div classname="col-md-4">
            <p>Score: <div id="score"></div> | Top Score: <div id="topScore"></div></p></div>
        </div>
          <div className="jumbotron">
            <h1>Clicky Game!</h1>
            <h4>Click on an image to earn points, but don't click on any more than once!</h4>
          </div>
        <header className="App-header">
          
        </header>
      </div >
    );
  }
}

export default App;
