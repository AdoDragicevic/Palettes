import sizes from "./sizes";

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    colors: {
        height: "90%",
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            color: "white",
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
            textTransform: "uppercase"
        },
        [sizes("lg")]: {
            width: "75%",
            height: "33.33333%"
        },
        [sizes("md")]: {
            width: "50%",
            height: "20%"
        },
        [sizes("xs")]: {
            width: "100%",
            height: "10%"
        }
    }
};

export default styles;