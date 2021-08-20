import { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";
import "./ColorBox.css";

const styles = {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover button": {
            opacitiy: "1"
        } 
    },
    copyText: {
        color: props => chroma(props.background).luminance() <= 0.4 ? "white" : "black"
    },
    colorName: {
        color: props => chroma(props.background).luminance() >= 0.4 ? "white" : "black"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() <= 0.4 ? "white" : "rgba(0, 0, 0, .5)",
        backgroundColor: "rgba(255, 255, 255, .3)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "50px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
        opacity: "0"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() <= 0.4 ? "white" : "rgba(0, 0, 0, .5)",
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
        color: "white",
        textDecoration: "none",
        textTransform: "uppercase"
    }
};

class ColorBox extends Component {

    state = { copied: false };

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout( () => this.setState({ copied: false }), 1500)
        });
    };

    render() {
        const { name, background, moreUrl, showingFullPalette, classes } = this.props;
        const { copied } = this.state;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div style={{ background }} className={`copy-overlay ${copied && "show"}`}></div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={classes.colorName}>{name}</span>
                            {showingFullPalette && (
                                <Link to={moreUrl} onClick={ e => e.stopPropagation() }>
                                    <span className={classes.seeMore}>More</span>
                                </Link>
                            )}
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox);