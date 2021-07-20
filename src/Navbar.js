import { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {

    state = { format: "hex", open: false };

    handleFormatChange = e => {
        this.setState({ format: e.target.value, open: true});
        this.props.handleChange(e.target.value);
    };

    closeSnapbar = () => {
        this.setState({ open: false });
    };

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <Link to="/">
                        reactcolorpicker
                    </Link>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level} 
                            min={100} 
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    open={this.state.open} 
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
                    ContentProps= {{
                        "aria-descibedby": "message-id"
                    }}
                    onClose={this.closeSnapbar}
                    action={[
                        <IconButton 
                            onClick={this.closeSnapbar}
                            color="inherit"
                            key="close"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />         
            </header>
        )
    }
}

export default Navbar;