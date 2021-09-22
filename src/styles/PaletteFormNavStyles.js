import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  title: {
    [sizes("sm")]: {
      display: "none"
    }
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    },
    [sizes("xs")]: {
      marginRight: "0.3rem"
    }
  },
  button: {
    margin: "0 0.5rem",
    [sizes("sm")]: {
      padding: ".2rem .3rem"
    },
    [sizes("xs")]: {
      width: "80px",
      margin: "0 .3rem",
    }
  }
});

export default styles;