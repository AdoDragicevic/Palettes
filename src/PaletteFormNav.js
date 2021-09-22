import { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import PaletteMetaForm from "./PaletteMetaForm";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import styles from "./styles/PaletteFormNavStyles";

class PaletteFormNav extends Component {
    
  state = {
    newPaletteName: "",
    formShowing: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showForm = () => {
    this.setState({ formShowing: true });
  };

  hideForm = () => {
    this.setState({ formShowing: false });
  };

  handleSubmit = newPalette => {
    this.props.handleSubmit(newPalette);
  };
    
  render() {
    const { formShowing } = this.state;
    const { classes, open, palettes, name } = this.props;
    return (
      <div className={classes.root}>
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
              <AddToPhotosIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6" 
              color="inherit" 
              noWrap
            >
              {name ? "Edit " : "Create a " } palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
              <Link to="/">
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                >
                  Go back
                </Button>
              </Link>
              <Button
                className={classes.button}
                variant="contained" 
                color="primary" 
                onClick={this.showForm}
              >
                Save
              </Button>
            </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm 
            palettes={palettes} 
            name={name}
            handleSubmit={this.handleSubmit}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  };
};

export default withStyles(styles, { withTheme: true })(PaletteFormNav);