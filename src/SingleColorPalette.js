import { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    colors: {
        height: "90%",
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            border: "none",
            backgroundColor: "rgba(255, 255, 255, .3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textDecoration: "none",
            textTransform: "uppercase"
        }
    },
};

class SingleColorComponent extends Component {
    
    constructor(props) {
        super(props);
        // we calculate it within the component, but we do not need to add it 
        // to state, because it never changes
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = { format: "hex" };
    };

    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        const allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter( color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1);
    };

    changeFormat = format => {
        this.setState({ format });
    };

    render() {
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const colorBoxes = this._shades.map( color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[format]}
                showingFullPalette={false}
            />
        ));
        return (
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorComponent);