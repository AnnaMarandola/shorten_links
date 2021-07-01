import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import TWITTER from "../assets/icon-twitter.svg";
import FACEBOOK from "../assets/icon-facebook.svg";
import PINTEREST from "../assets/icon-pinterest.svg";
import INSTAGRAM from "../assets/icon-instagram.svg";
import { Typography } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  footer: {
    paddingTop: "3rem",
    paddingBottom: "4rem",
  },
  logo: {
    color: "white",
    textAlign: "center",
    fontSize: "28px",
  },
  column: {
    textAlign: "center",
  },
  columnTitle: {
    color: "white",
    marginTop: "3rem",
    marginBottom: "1rem",
  },
  columnItem: {
    marginBottom: "0.5rem",
    "&:hover": {
        color: theme.palette.primary.turquoise,
      },

  },
  contactContainer: {
    margin: "2rem",
    width: "100%",
  },
  avatarContainer: {
      "&:hover": {
        color: theme.palette.primary.turquoise,
      },

    },
  contactIcon: {
    margin: "1rem",
  },
});

function Footer({ classes }) {
  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <div className={classes.logoContainer}>
          <Typography variant="h2" className={classes.logo}>
            Shortly
          </Typography>
        </div>
        <div className={classes.column}>
          <Typography variant="body2" className={classes.columnTitle}>
            Features
          </Typography>
          <Typography variant="body1" className={classes.columnItem}>
            Link shortening
          </Typography>
          <Typography variant="body1" className={classes.columnItem}>
            Branded Links
          </Typography>
          <Typography variant="body1" className={classes.columnItem}>
            Analytics
          </Typography>
        </div>
        <div className={classes.column}>
          <Typography variant="body2" className={classes.columnTitle}>
            Ressources
          </Typography>
          <Typography variant="body1" className={classes.columnItem}>
            Blog
          </Typography>
          <Typography variant="body1" className={classes.columnItem}>
            Developers
          </Typography>
          <Typography variant="body1" className={classes.columnItem}>
            Support
          </Typography>
        </div>
        <div className={classes.column}>
          <Typography variant="body2" className={classes.columnTitle}>
            Company
          </Typography>
          <Typography variant="body1" className={classes.columnItem}>
            About
          </Typography>
          <Typography variant="body1" className={classes.columnItem}>
            Our team
          </Typography>
          <Typography variant="body1" className={classes.columnItem}>
            Careers
          </Typography>
          <Typography variant="body1" className={classes.columnItem}>
            Contact
          </Typography>
        </div>
        <div className={classes.contactContainer}>
          <img src={FACEBOOK} className={classes.contactIcon} alt="facebook" />
          <img src={TWITTER} className={classes.contactIcon} alt="twitter" />
          <img
            src={PINTEREST}
            className={classes.contactIcon}
            alt="pinterest"
          />
          <img
            src={INSTAGRAM}
            className={classes.contactIcon}
            alt="instagram"
          />
        
        </div>
      </footer>
    </div>
  );
}

export default withStyles(styles)(Footer);
