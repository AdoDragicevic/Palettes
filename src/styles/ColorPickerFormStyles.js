import sizes from "./sizes";

const styles = {
    root: {
      width: "80%",
    },
    picker: {
      width: "100% !important",
      marginTop: "2rem"
    },
    addColor: {
      width: "100%",
      padding: ".5rem",
      marginTop: "1rem",
      fontSize: "1.5rem",
      [sizes("xs")]: {
        fontSize: "1rem"
      }
    },
    colorNameInput: {
      width: "100%",
      margin: "20px 0"
    }
};

export default styles;