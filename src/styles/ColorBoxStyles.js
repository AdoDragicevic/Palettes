import chroma from "chroma-js";
import sizes from "./sizes";

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
            opacity: 1
        },
        [sizes("lg")]: {
            width: "25%",
            height: props => props.showingFullPalette ? "20%" : "33.3333%",
        },
        [sizes("md")]: {
            width: "50%",
            height: props => props.showingFullPalette ? "10%" : "20%",
        },
        [sizes("xs")]: {
            width: "100%",
            height: props => props.showingFullPalette ? "5%" : "10%",
        },
        minHeight: "70px",
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
        [sizes("xs")]: {
            height: "100%",
            lineHeight: "70px"
        }
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
        textDecoration: "none",
        textTransform: "uppercase",
        opacity: 0,
        [sizes("xs")]: {
            display: "none"
        }
    },
    boxContent: {
        boxSizing: "border-box",
        position: "absolute",
        left: "0",
        bottom: "0",
        padding: "10px",
        width: "100%",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform .6s ease-in-out",
        transform: "scale(0.1)",
        [sizes("xs")]: {
            display: "none"
        }
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(20)",
        zIndex: "10",
        position: "absolute",
        [sizes("xs")]: {
            display: "none"
        }
    },
    copyMessage: {
        zIndex: "-1",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            backgroundColor: "rgba(255 , 255, 255, .3)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            [sizes("xs")]: {
                fontSize: "5rem"
            }
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100"
        },
        [sizes("xs")]: {
            display: "none"
        }
    },
    showMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "20",
        transitionDelay: ".3s",
        transition: "all .4s ease-in-out",
        textTransform: "uppercase",
        [sizes("xs")]: {
            display: "none"
        }
    }
};

export default styles;