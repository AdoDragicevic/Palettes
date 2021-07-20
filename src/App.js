import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import { Component } from 'react';
import { Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return(
      <Switch>
          <Route exact path="/" render={ () => <h1> Palette List </h1>} />
          <Route exact path="/:id" render={ () => <p> individual palette </p>} />
        </Switch>
    )
  }
}

export default App;


/*
<div className="App">
        <Palette palette={generatePalette(seedColors[4])}/>
      </div>
*/