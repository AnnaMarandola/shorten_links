import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

export default withStyles((theme) => ({
  root: {
    padding: "0.7em 1.5em",
    borderRadius: "30px",
    fontSize: "18px",
    border: "0px",
    color: "white",
    textTransform: "initial",
    fontWeight: 600,
    minWidth: "7rem",
    backgroundColor: theme.palette.primary.turquoise,
    "&:hover": {
      backgroundColor: theme.palette.secondary.clearBlue,
      color: theme.palette.primary.yellow,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      margin: "auto",
    },
  },
}))((props) => (
  <Button variant="outlined" className={props.classes.root} {...props} />
));
