import { Component } from "react";
import PaletteForm from "./PaletteForm";

class EditPaletteForm extends Component {

  constructor(props) {
    super(props);
    this._palette = props.palettes.find(p => p.id === props.match.params.id);
  };

  handleSubmit = newPalette => {
    this.props.replacePalette(this._palette.id, newPalette);
    this.props.history.push("/");
  };

  render() {
    return (
      <PaletteForm
        handleSubmit={this.handleSubmit}
        colors={this._palette.colors} 
        name={this._palette.paletteName}
        palettes={this.props.palettes}
      />
    )
  };

};

export default EditPaletteForm;