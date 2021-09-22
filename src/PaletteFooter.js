import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "./styles/PaletteFooterStyles";

function PaletteFooter(props) {
    const { paletteName, paletteId, emoji, classes } = props;
    return(
        <footer className={classes.PaletteFooter}>
            <Link to={`/palette/edit/${paletteId}`}> Edit Palette </Link>
            <div>
                <span>{paletteName}</span>
                <span className={classes.emoji}>{emoji}</span>
            </div> 
        </footer>
    )
};

export default withStyles(styles)(PaletteFooter);