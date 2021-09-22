import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorfulHeaderStyles";

function ColorfulHeader({ classes, txt, colors }) {
  if (!txt) return null;
  let content = txt;
  if (colors && txt.length <= colors.length) {
    content = txt.split("").map((ltr, i) => (
      <span
        className={classes.letter} 
        key={i} 
        style={{ color: colors[i] }}
      >
        {ltr}
      </span>
    ));
  }
  return <h1 className={classes.ColorfulHeader}>{content}</h1>;
};

export default withStyles(styles)(ColorfulHeader);