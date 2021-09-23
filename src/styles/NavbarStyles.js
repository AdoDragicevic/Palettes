import sizes from "./sizes";

const styles = {
    Navbar: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        minHeight: "max-content",
        backgroundColor: "#F5F5F5"
    },
    leftContent: {
        display: "flex",
        alignItems: "center",
        [sizes("sm")]: {
            width: "100%",
            justifyContent: "space-between"
        }
    },
    logo: {
        height: "50px",
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",       
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
            letterSpacing: "1px",
        }
    },
    level: {
        [sizes("sm")]: {
            display: "none"
        }
    },
    slider: {
        width: "200px",
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
            height: "8px",
            backgroundColor: "rgba(0, 0, 0, .2)"
        },
        [sizes("sm")]: {
            width: "90vw",
            
        }
    },
    rightContent: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-end",
        [sizes("sm")]: {
            justifyContent: "center",
            width: "100vw",
            padding: "1rem 0"
        }
    },
    selectContainer: {
        marginRight: "1rem"
    }
};

export default styles;