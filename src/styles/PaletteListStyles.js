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
    nav: {
        backgroundColor: "rgba(53, 14, 170, 1)",
        marginBottom: "3rem",
        height: "70px",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#eee",
        "& a": {
            color: "#eee",
            paddingRight: "5vw",
            fontSize: "1.4rem"
        }
    },
    heading: {
        fontSize: "2rem",
        paddingLeft: "5vw",
        fontWeight: "500"
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