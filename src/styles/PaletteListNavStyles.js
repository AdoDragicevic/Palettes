import sizes from "./sizes";

const styles = {
    nav: {
        padding: "0 3rem",
        backgroundColor: "rgb(53, 14, 170)",
        background: "linear-gradient(176deg, rgba(45,12,145,1) 19%, rgba(53,14,170,1) 72%)",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#eee",
        "& a": {
            color: "#eee",
            paddingRight: "5vw",
            fontSize: "1.4rem",
            textDecoration: "none"
        },
        [sizes("sm")]: {
          padding: "0 2rem"
        },
        [sizes("xs")]: {
          padding: "0 .5rem",
        }
    },
    button: {
        [sizes("sm")]: {
          padding: ".2rem .3rem"
        },
        [sizes("sm")]: {
          padding: ".1rem .3rem",
          fontSize: "12px"
        }
      }
};

export default styles;