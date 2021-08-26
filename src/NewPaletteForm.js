import { Component } from "react";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 63px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {

  static defaultProps = {
    maxColors: 20
  }

  state = {
    open: true,
    currentColor: "teal",
    newColorName: "",
    colors: this.props.palettes[0].colors
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", val => (
      this.state.colors.every( ({ name }) => name.toLowerCase() !== val.toLowerCase() )
    ));
    ValidatorForm.addValidationRule("isColorUnique", () => (
      this.state.colors.every( ({ color }) => color !== this.state.currentColor )
    ));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateCurrentColor = col => {
    this.setState({ currentColor: col.hex});
  };

  addNewColor = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.setState({ 
      colors: [ ...this.state.colors, newColor], 
      newColorName: "" 
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = newPaletteName => {
    const newPalette = {
      paletteName: newPaletteName,
      colors: this.state.colors,
      id: newPaletteName.toLowerCase().replaceAll(" ", "-")
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
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
   const rand = Math.floor(Math.random() * allColors.length);
   const randColor = allColors[rand];
   this.setState({ colors: [...this.state.colors, randColor ]});
  };

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, currentColor, newColorName, colors } = this.state;
    const paletteFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>

        <PaletteFormNav 
          open={open} 
          classes={classes}
          palettes={palettes}
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
          <Typography variant="h4">Design your palette</Typography>
          <div>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={this.clearColors}
            >
              Clear palette
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={this.addRandomColor}
              disabled={paletteFull}
            >
              Random color
            </Button>
          </div>
          <ChromePicker 
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm
            onSubmit={this.addNewColor}
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

export default withStyles(styles, { withTheme: true })(NewPaletteForm);