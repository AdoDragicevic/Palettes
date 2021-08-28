import { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  
  state = {
    stage: "form",
    newPaletteName: ""
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", val => (
      this.props.palettes.every( ({ paletteName }) => paletteName.toLowerCase() !== val.toLowerCase())
    ));
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showEmojiPicker = () => {
    this.setState({ stage: "emoji" });
  };

  savePalette = emoji => {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.handleSubmit(newPalette);
  };

  render() {
    const { newPaletteName, stage } = this.state;
    const { hideForm } = this.props;
    return (
      <div>
        <Dialog 
          open={stage === "emoji"}
          onClose={hideForm}
        >
          <DialogTitle id="form-dialog-title">PICK PALETTE EMOJI</DialogTitle>
           <Picker
            title="Pick palette emoji"
            onSelect={ this.savePalette } 
          />
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Chose a palette name</DialogTitle>
          <ValidatorForm onSubmit={ this.showEmojiPicker }>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette. Make sure it's unique.
              </DialogContentText>
              <TextValidator
                value={newPaletteName}
                name="newPaletteName"
                label="Palette name"
                onChange={this.handleChange} 
                validators={[
                  "required",
                  "isPaletteNameUnique"
                ]}
                fullWidth
                margin="normal"
                errorMessages={[
                  "Enter palette name",
                  "Name already used"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button 
                onClick={hideForm} 
                color="primary"
              >
                Cancel
              </Button>
              <Button 
                variant="contained" 
                color="primary"
                type="submit"
              >
                Save palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  };
};

export default PaletteMetaForm;