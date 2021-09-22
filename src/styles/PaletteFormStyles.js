import sizes from "./sizes";
import { DRAWER_WIDTH } from "../constants";

const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex',
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
    [sizes("xs")]: {
      overflowY: "auto"
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    overflowY: "auto",
    overflowX: "hidden",
    [sizes("md")]: {
      width: "100vw",
    }
  },
  title: {
    [sizes("xs")]: {
      display: "none"
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    width: "100%",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 63px)",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    padding: 0
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  buttons: {
    width: "100%",
    textAlign: "center"
  },
  button: {
    width: "50%",
    [sizes("xs")]: {
      width: "150px",
      fontSize: ".8rem"
    }
  }
});

export default styles;