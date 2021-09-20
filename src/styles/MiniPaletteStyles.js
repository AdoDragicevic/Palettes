const styles = {
    root: {
        backgroundColor: "rgba(0, 0, 0, .8)",
        borderRadius: "5px",
        padding: "0 0 .5rem 0",
        margin: "1rem",
        minWidth: "250px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: 1
        }
    },
    deleteIcon: {
        backgroundColor: "#BA2D0B",
        color: "#eee",
        width: "18px",
        height: "18px",
        position: "absolute",
        top: ".3rem",
        right: ".3rem",
        padding: "10px",
        zIndex: 3,
        opacity: 0,
        borderRadius: "3px"
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        
        overflow: "hidden"
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "25px",
        marginTop: "5px"
    },
    title: {
        display: "inline-block",
        color: "white",
        letterSpacing: "1.2px",
        fontWeight: "100",
        paddingLeft: "5px"
    },
    emoji: {
        fontSize: "1.2rem",
        paddingRight: "5px"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4px",
    }
};

export default styles;