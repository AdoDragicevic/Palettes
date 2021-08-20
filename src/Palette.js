import { Component } from "react";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles";
import "./Palette.css";

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    colors: {
        height: "90%",
    },
    PaletteFooter: {
        backgroundColor: "white",
        height: "3vh",
        lineHeight: "3vh",
        display: "flex",
        justifyContent: "flex-end",
        fontWeight: "bold",
        padding: ".2rem",
        paddingRight: "2rem"
    }
};

class Palette extends Component {

    state = { level: 500, format: "hex" };

    changeLevel = level => {
        this.setState({ level });
    };

    changeFormat = format => {
        this.setState({ format });
    };

    render() {
        const { level, format } = this.state;
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const colorBoxes = colors[level].map( color => (
            //mislim da je ovaj showLink potpuno nepotreban
            //unutar ColorBox provjeri da li ima moreUrl i to je to
            <ColorBox 
                key={color.id} 
                background={color[format]} 
                name={color.name}
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette
            />
        ));
        return (
            <div className={classes.Palette}>
                <Navbar
                    level={level} 
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showingAllColors
                />
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);