import sizes from "./sizes";
import bg from "./bg.svg";

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#350EAA",
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        overflow: "auto"
    },
    heading: {
        fontSize: "2rem"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes("lg")]: {
            width: "80%"
        },
        [sizes("xs")]: {
            width: "75%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a": {
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
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
    }
};

export default styles;