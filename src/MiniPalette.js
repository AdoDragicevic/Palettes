import { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {

  deletePalette = e => {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  };

  handleClick = () => {
    this.props.goToPalette(this.props.id);
  };

  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    const miniPalettes = colors.map( color => (
      <div 
          className={classes.miniColor} 
          style={{ backgroundColor: color.color }}
          key={color.name}
      >
      </div>
    ));
    return (
      <div className={classes.root} onClick={this.handleClick}>
        <DeleteIcon 
          className={classes.deleteIcon} 
          style={{ transition: "all .3s ease-in-out" }}
          onClick={this.deletePalette}
        />
        <div className={classes.colors}> {miniPalettes} </div>
        <div className={classes.footer}>
          <h5 className={classes.title}>
            {paletteName}
          </h5>
          <span className={classes.emoji}>{emoji}</span>
        </div>
      </div>
    );
  };
};

export default withStyles(styles)(MiniPalette);