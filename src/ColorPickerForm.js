import { Component } from "react";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";

class ColorPickerForm extends Component {

  state = {
    currentColor: "teal",
    newColorName: ""
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", val => (
      this.props.colors.every( ({ name }) => name.toLowerCase() !== val.toLowerCase() )
    ));
    ValidatorForm.addValidationRule("isColorUnique", () => (
      this.props.colors.every( ({ color }) => color !== this.state.currentColor )
    ));
  };

  updateCurrentColor = col => {
    this.setState({ currentColor: col.hex});
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    }
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  };
    
  render() {
    const { currentColor, newColorName } = this.state;
    const { paletteFull } = this.props;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm
          onSubmit={this.handleSubmit}
        >
          <TextValidator 
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={[
              "required", 
              "isColorNameUnique", 
              "isColorUnique"
            ]}
            errorMessages={[
              "Enter a color name", 
              "Name must be unique", 
              "Color already added"
            ]}
          />
          <Button 
            variant="contained" 
            color="primary" 
            style={{ backgroundColor: `${paletteFull ? "gray" : currentColor}`}}
            type="submit"
            disabled={paletteFull}
          >
            {paletteFull ? "Palette full" : "Add color"}
          </Button>
        </ValidatorForm>
    </div>  
    );
  };
};

export default ColorPickerForm;