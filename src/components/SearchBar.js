import { withStyles, TextField, Button } from "@material-ui/core";
import BGDESKTOP from "../assets/bg-shorten-desktop.svg";
import BGMOBILE from "../assets/bg-shorten-mobile.svg";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.whiteish,
  },
  form: {
    width: "80%",
    marginLeft: "10%",
    backgroundColor: theme.palette.primary.deepBlue,
    backgroundImage: `url(${BGMOBILE})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 120% ",
    backgroundSize: "cover",
    padding: "1.5rem",
    borderRadius: "10px",
    display: "flex",
    position: "relative",
    top: "-90px",
    [theme.breakpoints.up("md")]: {
      padding: "2.5rem",
      textAlign: "center",
      flexDirection: "column",
      width: "70%",
      marginLeft: "15%",
      backgroundImage: `url(${BGDESKTOP})`,
      backgroundPosition: "center 20% ",
      position: "relative",
      top: "-75px",
    },
  },
  input: {
    backgroundColor: "white",
    borderRadius: "10px",
    marginBottom: "1rem",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "80%",
      marginBottom: 0,
      marginRight: "1rem",
      margin: "0.5rem",

    },
  },
  shortenBtn: {
    padding: "0.9em 2em",
    width: "100%",
    borderRadius: "10px",
    fontSize: "1rem",
    border: "0px",
    color: "white",
    textTransform: "initial",
    fontWeight: 600,
    backgroundColor: theme.palette.primary.turquoise,
    "&:hover": {
      backgroundColor: theme.palette.secondary.clearBlue,
      color: theme.palette.primary.yellow,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      width: "15%",
      minWidth: "10rem",
      marginLeft: "1rem",
      margin: "0.5rem",

    },
  },
});

const SearchBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <form>
          <TextField
            variant="outlined"
            label="Shorten a link here..."
            className={classes.input}
            color="secondary"
          />
          <Button className={classes.shortenBtn}>Shorten it!</Button>
        </form>
      </div>
    </div>
  );
};

export default withStyles(styles)(SearchBar);
