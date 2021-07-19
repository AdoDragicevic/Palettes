import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import { Component } from 'react';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return(
      <div className="App">
        <Palette { ...seedColors[4] }/>
      </div>
    )
  }
}

export default App;
