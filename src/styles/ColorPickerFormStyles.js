import sizes from "./sizes";

const styles = {
    root: {
      width: "80%",
      textAlign: "center"
    },
    picker: {
      margin: "0 auto",
      width: "100% !important",
      maxWidth: "300px !important",
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
      width: "200px",
      margin: "20px 0"
    },
    addColor: {
      fontSize: "15px"
    }
};

export default styles;