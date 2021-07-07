import { withStyles, Typography } from "@material-ui/core";
import BOOSTMOBILE from "../assets/bg-boost-mobile.svg";
import BOOSTDESKTOP from "../assets/bg-boost-desktop.svg";
import CTAButton from "./CTAButton";

const styles = (theme) => ({
  root: {
    width: "100%",
    height: "20rem",
    backgroundColor: theme.palette.primary.deepBlue,
    backgroundImage: `url(${BOOSTMOBILE})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 60% ",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${BOOSTDESKTOP})`,
      backgroundPosition: "center 5%",
      height: "18rem",
    },
  },
  title: {
    color: "white",
    marginTop: "6rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: "2rem",
      marginTop: "6rem",
    },
  },
  getStartedBtn: {
    width: "12rem",
    marginBottom: "6rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: "rem",
      padding: "1rem 0"
    },

  },
});

const BoostBanner = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Boost your links today
      </Typography>
      <CTAButton className={classes.getStartedBtn}>Get Started</CTAButton>
    </div>
  );
};

export default withStyles(styles)(BoostBanner);
