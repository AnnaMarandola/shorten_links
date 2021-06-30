import { Link, withStyles } from "@material-ui/core";
import LOGO from "../assets/logo.svg";
import CTAButton from "./CTAButton";
import MobileMenu from "./MobileMenu";

const styles = (theme) => ({
  root: {
    height: "5rem",
    backgroundColor: "white",
    width: "100%",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      height: "10rem",
    },
  },
  navLinksContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-around",
      marginLeft: "20%",
    },
  },
  navLink: {
    display: "none",
    "&:hover": {
      textDecoration: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginLeft: "5%",
      marginRight: "10%",
      fontWeight: 700,
      fontSize: "1rem",
      color: theme.palette.primary.grey,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.primary.deepBlue,
      },
    },
  },
  logo: {
    height: "30%",
    marginLeft: "2rem",
    [theme.breakpoints.up("md")]: {
      marginRight: "2rem",
      marginLeft: 0,
      height: "20%",
    },
  },
  authButtons: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      marginRight: "15%",
      width: "15%",
    },
  },
  burgerMenu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  
});

function Nav({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.navLinksContainer}>
        <img src={LOGO} alt="logo" className={classes.logo} />
        <Link className={classes.navLink}>Features</Link>
        <Link className={classes.navLink}>Pricing</Link>
        <Link className={classes.navLink}>Ressources</Link>
      </div>
      <div className={classes.authButtons}>
        <Link className={classes.navLink}>Login</Link>
        <CTAButton>Sign Up</CTAButton>
      </div>
      <div className={classes.burgerMenu}>
        <MobileMenu />
      </div>
    </div>
  );
}

export default withStyles(styles)(Nav);
