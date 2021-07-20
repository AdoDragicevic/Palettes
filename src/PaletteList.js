import { Component } from "react";
import { Link } from "react-router-dom";


class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div className="PaletteList">
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