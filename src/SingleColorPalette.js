import { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import styles from "./styles/PaletteStyles";


class SingleColorComponent extends Component {
    
    constructor(props) {
        super(props);
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
        const { id } = this.props.palette;
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
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorComponent);