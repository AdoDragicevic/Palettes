import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import { Component } from 'react';
import { Switch, Route } from "react-router-dom"

class App extends Component {

  findPalette(id) {
    return seedColors.find( plt => plt.id === id);
  };

  render() {
    return(
      <Switch>
          <Route exact path="/" render={ () => <h1> Palette List </h1>} />
          <Route exact path="/:id" render={ (routeProps) => (
              <Palette palette={ generatePalette(this.findPalette(routeProps.match.params.id))} />
            )} 
          />
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