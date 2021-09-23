import sizes from "./sizes";

const styles = {
    ColorfulHeader: {
        fontSize: "2rem",
        fontWeight: "500",
        letterSpacing: "1px",
        [sizes("sm")]: {
            fontSize: "1.5rem"
        },
        [sizes("xs")]: {
            fontSize: "1rem"
        }
    },
    letter: {
        transition: "all 2s ease"
    }
};

export default styles;