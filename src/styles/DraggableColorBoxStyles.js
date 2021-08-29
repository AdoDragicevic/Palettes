import sizes from "./sizes";

const styles = {
    root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    },
    [sizes("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes("sm")]: {
      width: "100%",
      height: "5%"
    }
  },
  boxContent: {
    boxSizing: "border-box",
    position: "absolute",
    left: "0",
    bottom: "0",
    padding: "10px",
    width: "100%",
    color: "rgba(0, 0, 0, .5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all .3s ease-in-out"
  }
};

export default styles;