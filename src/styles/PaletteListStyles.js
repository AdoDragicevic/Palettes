import sizes from "./sizes";
import bg from "./bg.svg";

const styles = {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-in"
        }
    },
    root: {
        height: "100vh",
        // SVG Bacground made with https://www.svgbackgrounds.com/
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        overflow: "auto",
    },
    container: {
        margin: "0 auto",
        width: "90%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes("xs")]: {
            width: "90%"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
};

export default styles;