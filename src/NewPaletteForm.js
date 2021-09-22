import { Component } from "react";
import PaletteForm from "./PaletteForm";
import seedColors from "./seedColors";


class NewPaletteForm extends Component {

  handleSubmit = newPalette => {
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  };

  render() {
    return (
      <PaletteForm 
        handleSubmit={this.handleSubmit}
        colors={seedColors[0].colors} 
        palettes={this.props.palettes}
      />
    )
  };

};

export default NewPaletteForm;