import { Component } from "react";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import "./Palette.css";

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
            <div className="Palette">
                <Navbar
                    level={level} 
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showingAllColors
                />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default Palette;