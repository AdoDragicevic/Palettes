import Palette from './Palette';
import PaletteList from "./PaletteList";
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import SingleColorPalette from './SingleColorPalette';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
  };

  findPalette = id => {
    return this.state.palettes.find( plt => plt.id === id);
  };

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage );
  };

  deletePalette = id => {
    this.setState(st => ({ palettes: st.palettes.filter(p => p.id !== id) }), this.syncLocalStorage);
  };

  syncLocalStorage() {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  };

  render() {
    return(
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={ (routeProps) => (
            <NewPaletteForm 
              savePalette={this.savePalette} 
              palettes={this.state.palettes} 
              { ...routeProps } 
            />
          )}
        />
        <Route 
          exact 
          path="/" 
          render={ (routeProps) => (
            <PaletteList 
              { ...routeProps } 
              palettes={this.state.palettes} 
              deletePalette={this.deletePalette} 
            />
          )} 
        />
        <Route 
          exact 
          path="/palette/:id" 
          render={ (routeProps) => <Palette palette={ generatePalette(this.findPalette(routeProps.match.params.id))} /> }
        />
          <Route 
            exact 
            path="/palette/:paletteId/:colorId"
            render={ (routeProps) => (
              <SingleColorPalette
                palette={ generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                colorId={ routeProps.match.params.colorId }
              />
            )}
          />
      </Switch>
    )
  }
}

export default App;