import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
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
      <Link to="/palette/new">Create Palette</Link>
    </nav>  
  )
};

export default withStyles(styles)(PaletteListNav);