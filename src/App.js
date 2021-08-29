import { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Palette from './Palette';
import PaletteList from "./PaletteList";
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import SingleColorPalette from './SingleColorPalette';
import Page from "./Page";

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
    const { palettes } = this.state;
    return(
      <Route 
        render={ ({ location }) => (
          <TransitionGroup>
            <CSSTransition 
              classNames="page"
              timeout={500}
              key={location.key}
            >
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={ (routeProps) => (
                    <Page>
                      <NewPaletteForm 
                        savePalette={this.savePalette} 
                        palettes={palettes} 
                        { ...routeProps } 
                      />
                    </Page>
                  )}
                />
                <Route 
                  exact 
                  path="/" 
                  render={ (routeProps) => (
                    <Page>
                      <PaletteList
                        { ...routeProps }
                        palettes={palettes}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )} 
                />
                <Route 
                  exact 
                  path="/palette/:id" 
                  render={ (routeProps) => (
                    <Page>
                      <Palette 
                        palette={ generatePalette(this.findPalette(routeProps.match.params.id))} 
                      />
                    </Page>
                  )}
                />
                <Route 
                  exact 
                  path="/palette/:paletteId/:colorId"
                  render={ (routeProps) => (
                    <Page>
                      <SingleColorPalette
                        palette={ generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                        colorId={ routeProps.match.params.colorId }
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    )
  }
}

export default App;