import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Projetos from './Components/Projetos/Projetos';
import Header from './Components/Header';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Bem-vindo aos Projetos</h1>
          </header>
          <p className="App-intro">
            Lista de projetos <code>on going</code> na DAPP
          </p>
            <Projetos />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;