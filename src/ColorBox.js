import { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styles/ColorBoxStyles";

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
            <>
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div 
                        style={{ background }} 
                        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
                    >
                    </div>
                    <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && (
                    <Link to={moreUrl} onClick={ e => e.stopPropagation() }>
                        <span className={classes.seeMore}>More</span>
                    </Link>
                    )}
                </div>
                </CopyToClipboard>
                  <Snackbar
                    open={this.state.copied} 
                    autoHideDuration={500}
                    message={<span id="message-id">Copied to clipboard</span>}
                    ContentProps= {{"aria-labelledby": "message-id"}}
                  />   
            </>
        );
    }
}

export default withStyles(styles)(ColorBox);