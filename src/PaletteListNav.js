import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import ColorfulHeader from "./ColorfulHeader";
import headerColors from "./headerColors.js";
import styles from "./styles/PaletteListNavStyles";

function PaletteListNav({ classes }) {
  const headerLetterColors = headerColors[Math.floor(Math.random() * headerColors.length)];  
  return (
    <nav className={classes.nav}>
      <ColorfulHeader 
        txt="Color Palettes" 
        colors={headerLetterColors}
      />
      <Link to="/palette/new">
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Create Palette
        </Button>
      </Link>
    </nav>  
  )
};

export default withStyles(styles)(PaletteListNav);