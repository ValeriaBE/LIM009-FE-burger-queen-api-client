import React, { Component } from 'react';
import '../css/App.css';
import Routes from './Router'

class App extends Component {
  render() {
    return (
      <>
        <div className="container-fluid d-flex col-12 fill-available body-color align-items-center column">
          <Routes />
        </div>
      </>
    )
  }
}

export default App;
