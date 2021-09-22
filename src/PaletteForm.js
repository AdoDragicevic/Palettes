import { Component } from "react";
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteFormStyles";

class PaletteForm extends Component {
  
  static defaultProps = {
    maxColors: 20
  };

  state = {
    open: true,
    colors: this.props.colors
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor = newColor => {
    this.setState({ colors: [ ...this.state.colors, newColor] });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  removeColor = colorName => {
    this.setState({ colors: this.state.colors.filter( col => col.name !== colorName) });
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    if (oldIndex === newIndex) return;
    const { colors } = this.state;
    const cutOut = colors.splice(oldIndex, 1);
    colors.splice(newIndex, 0, ...cutOut);
    this.setState({ colors });
  };

  clearColors = () => {
    this.setState({ colors: [] });
  };

  addRandomColor = () => {
    const allColors = this.props.palettes.map(p => p.colors).flat();
    let randColor;
    if (allColors.length > 20) {
      do randColor = this.getRandColor(allColors);
      while (!this.isColorAlreadyPresent(randColor, this.state.colors));
    } 
    else randColor = { color: "#000", name: "Black"}
    this.setState({ colors: [...this.state.colors, randColor] });
  };

  isColorAlreadyPresent(randColor, colors) {
    return colors.every( color => (color.color !== randColor.color && color.name !== randColor.name) );
  };

  getRandColor(colors) {
    const rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
  };

  handleSubmit = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replaceAll(" ", "-");
    newPalette.colors = this.state.colors;
    this.props.handleSubmit(newPalette);
  };

  render() {
    const { classes, maxColors, palettes, name } = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          name={name}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
            <Divider />
            <div className={classes.container}>
            <Typography
              className={classes.title}
              variant="h4" 
              gutterBottom
            >
              Design your palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                variant="contained" 
                color="secondary" 
                onClick={this.clearColors}
              >
                Clear palette
              </Button>
              <Button
                className={classes.button}
                variant="contained" 
                color="primary" 
                onClick={this.addRandomColor}
                disabled={paletteFull}
              >
                Random color
              </Button>
            </div>
            <ColorPickerForm 
              paletteFull={paletteFull}
              colors={colors}
              addNewColor={this.addNewColor}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList 
            colors={colors} 
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  };

};

export default withStyles(styles, { withTheme: true })(PaletteForm);