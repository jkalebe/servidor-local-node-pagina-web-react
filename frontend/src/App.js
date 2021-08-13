import './App.css';
import React from 'react'
import {Route} from 'react-router-dom'
import Search from './Search'
import Insert from './Insert';

function App() {


  return (
    <div className="main">
      <Route exact path="/search" render={props => <Search/>} />
      <Route exact path="/" render={props => <Search/>} />
      <Route exact path="/insert" render={props => <Insert/>} />
    </div>
  );
}

export default App;
