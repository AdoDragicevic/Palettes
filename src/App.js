import Palette from './Palette';
import PaletteList from "./PaletteList";
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import SingleColorPalette from './SingleColorPalette';

class App extends Component {

  state = { palettes: seedColors };

  findPalette = id => {
    return this.state.palettes.find( plt => plt.id === id);
  };

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette] })
  };

  render() {
    return(
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={ (routeProps) => <NewPaletteForm savePalette={this.savePalette} { ...routeProps } />}
        />
        <Route 
          exact 
          path="/" 
          render={ (routeProps) => <PaletteList { ...routeProps } palettes={this.state.palettes} /> } 
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