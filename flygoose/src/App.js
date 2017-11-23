import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import './App.css';
import Nav from './Nav'
class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
   <Nav/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
