import { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";


class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div className="PaletteList">
                <MiniPalette />
                {palettes.map( palette => (
                    <h1>
                        <Link to={`/palette/${palette.id}`}>
                        {palette.paletteName}
                        </Link>
                    </h1>
                ))}
            </div>
        )
    }
}

export default PaletteList;