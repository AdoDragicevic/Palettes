import { Component } from "react";
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteFormNavStyles";
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';


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
    
  render() {
    const { formShowing } = this.state;
    const { classes, open, palettes, handleSubmit } = this.props;
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
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a palette
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
            handleSubmit={handleSubmit}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  };
};

export default withStyles(styles, { withTheme: true })(PaletteFormNav);