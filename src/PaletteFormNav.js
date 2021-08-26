import { Component } from "react";
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px"
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
  navBtns: {

  }
});

class PaletteFormNav extends Component {
    
  state = {
    newPaletteName: ""
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", val => (
      this.props.palettes.every( ({ paletteName }) => paletteName.toLowerCase() !== val.toLowerCase())
    ));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
    
  render() {
    const { classes, open } = this.props;
    const { newPaletteName } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
              <ValidatorForm 
                onSubmit={ () => this.props.handleSubmit(newPaletteName) }
              >
                <TextValidator
                  value={this.state.newPaletteName}
                  name="newPaletteName"
                  label="Palette name"
                  onChange={this.handleChange} 
                  validators={[
                    "required",
                    "isPaletteNameUnique"
                  ]}
                  errorMessages={[
                    "Enter palette name",
                    "Name already used"
                  ]}
                />
                <Button 
                  variant="contained" 
                  color="primary"
                  type="submit"
                >
                  Save palette
                </Button>
              </ValidatorForm>
              <Link to="/">
                <Button
                  variant="contained"
                  color="secondary"
                >
                  Go back
                </Button>
              </Link>
            </div>
        </AppBar>
      </div>
    );
  };
};

export default withStyles(styles, { withTheme: true })(PaletteFormNav);