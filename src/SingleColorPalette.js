import { color } from "@material-ui/system";
import { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorComponent extends Component {
    
    constructor(props) {
        super(props);
        // we calculate it within the component, but we do not need to add it 
        // to state, because it never changes
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
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

    render() {
        const colorBoxes = this._shades.map( color => (
            <ColorBox 
                key={color.id} 
                name={color.name} 
                background={color.hex}
                showLink={false}
            />
        ));
        return (
            <div className="Palette">
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default SingleColorComponent;