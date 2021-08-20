import { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

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
        const colorBoxes = this._shades.map( color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[format]}
                showingFullPalette={false}
            />
        ));
        return (
            <div className="SingleColorPalette Palette">
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="go-back ColorBox">
                        <Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default SingleColorComponent;