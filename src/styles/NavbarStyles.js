import sizes from "./sizes";

const styles = {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh"
    },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        height: "100%",
        display: "flex",
        alignItems: "center",
        textTransform: "uppercase",
        "& a": {
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
            letterSpacing: "1px",
        },
        [sizes("xs")]: {
            display: "none"
        }
    },
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-handle, & .rc-slider-handle:active, & .rc-slider-handle:hover, & .rc-slider-handle:focus": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "0",
            marginTop: "-3px"
        },
        "& .rc-slider-rail": {
            height: "8px"
        },
        [sizes("sm")]: {
            width: "150px"
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    }
};

export default styles;