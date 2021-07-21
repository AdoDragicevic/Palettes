import { Component } from "react";
import ColorBox from "./ColorBox";
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
        const { colors, paletteName, id } = this.props.palette;
        const colorBoxes = colors[level].map( color => (
            //mislim da je ovaj showLink potpuno nepotreban
            //unutar ColorBox provjeri da li ima moreUrl i to je to
            <ColorBox 
                key={color.id} 
                background={color[format]} 
                name={color.name}
                moreUrl={`/palette/${id}/${color.id}`}
                showLink
            />
        ));
        return (
            <div className="Palette">
                <Navbar
                    level={level} 
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className="Palette-footer">
                    <span>{paletteName}</span>
                    {//<span className="emoji">{emoji}</span>
                    }
                </footer>
            </div>
        )
    }
}

export default Palette;