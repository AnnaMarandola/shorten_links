import CTAButton from "./CTAButton";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import HERO from "../assets/illustration-working.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    backgroundColor: "white",
    overflow: "hidden",
    paddingBottom: "10rem",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: "2rem",
      paddingBottom: "12rem"
    },
  },
  textContainer: {
    textAlign: "center",
    width: "90%",
    marginLeft: "5%",
    [theme.breakpoints.up("md")]: {
      width: "40%",
      marginLeft: "15%",
      textAlign: "left",
      marginTop: "5rem",
    },
  },
  title: {
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {},
  },
  subtitle: {
    marginBottom: "2rem",
    [theme.breakpoints.up("md")]: {
        width: "70%"
    },
  },
  imageContainer: {
    overflowRight: "hidden",
    [theme.breakpoints.up("md")]: {},
  },
  heroImg: {
    width: "125%",
    marginLeft: "3rem",
    overflowRight: "hidden",
    marginBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      width: "140%",
      marginLeft: "0rem",
    },
  },
  getStartedBtn: {
    width: "60%",
    [theme.breakpoints.up("sm")]: {
        width: "10rem",
        padding: "1rem 0"
      },
  },
});

const Hero = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="h1" className={classes.title}>
          More than just shorter links
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Build your brand's recognition and get detailled insights on how your
          links are performing.
        </Typography>
        <CTAButton className={classes.getStartedBtn}>Get Started</CTAButton>
      </div>
      <div className={classes.imageContainer}>
        <img src={HERO} alt="working on computer" className={classes.heroImg} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Hero);
