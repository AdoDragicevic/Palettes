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
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        // SVG Bacground made with https://www.svgbackgrounds.com/
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        overflow: "auto",
    },
    heading: {
        fontSize: "2rem",
    },
    container: {
        width: "90%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes("xs")]: {
            width: "90%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#eee",
        "& a": {
            color: "#eee"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
        /*
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes("md")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.5rem",
        }
        */
    }
};

export default styles;