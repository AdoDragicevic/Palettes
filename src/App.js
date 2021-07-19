import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])}/>
      </div>
    )
  }
}

export default App;
