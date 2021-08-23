import Palette from './Palette';
import PaletteList from "./PaletteList";
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import SingleColorPalette from './SingleColorPalette';

class App extends Component {

  findPalette(id) {
    return seedColors.find( plt => plt.id === id);
  };

  render() {
    return(
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={ (routeProps) => <NewPaletteForm />}
        />
        <Route 
          exact 
          path="/" 
          render={ (routeProps) => <PaletteList { ...routeProps } palettes={seedColors} /> } 
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