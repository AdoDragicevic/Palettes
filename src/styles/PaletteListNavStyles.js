import sizes from "./sizes";

const styles = {
    nav: {
        backgroundColor: "rgb(53, 14, 170)",
        background: "linear-gradient(176deg, rgba(45,12,145,1) 19%, rgba(53,14,170,1) 72%)",
        height: "70px",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#eee",
        "& a": {
            color: "#eee",
            paddingRight: "5vw",
            fontSize: "1.4rem",
            textDecoration: "none"
        }
    },
    button: {
        [sizes("sm")]: {
          padding: ".2rem .3rem"
        },
        [sizes("xs")]: {
          margin: "0 .3rem",
        }
      }
};

export default styles;