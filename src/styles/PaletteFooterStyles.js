import sizes from "./sizes";

const styles = {
    PaletteFooter: {
        backgroundColor: "white",
        height: "3vh",
        minHeight: "25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
        padding: ".2rem",
        paddingRight: "2rem",
        [sizes("xs")]: {
            paddingRight: ".2rem",
            fontSize: "15px"
        }
    },
    emoji: {
        fontSize: "1rem",
        marginLeft: ".3rem"
    }
};

export default styles;