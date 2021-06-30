import React from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Fade, withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CTAButton from "./CTAButton";

const styles = (theme) => ({
  root: {
    float: "right",
    height: "90%",
    width: "80px",
    [theme.breakpoints.down("xs")]: {
      boxSizing: "none",
    },
  },
  separator: {
    border: "1px solid #4B3F6B",
    margin: "1rem",
  },
  signupButton: {
    width: "90%",
    margin: "1rem 0",
    marginLeft: "5%",
  },
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #4B3F6B",
    borderRadius: "1rem",
    backgroundColor: "#3A3054",
    width: "100vh",
    padding: "1rem 0",
  },
  list: {
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    width: "auto",
    fontSize: "1.2em",
    fontWeight: 700,
    lineHeight: "2em",
    backgroundColor: theme.palette.primary.deepBlue,
    color: theme.palette.secondary.whiteish,
    justifyContent: "center",
  },
}))(MenuItem);

function MobileMenu({ classes }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.root}
      >
        <MenuIcon style={{ color: "#9E9AA8", fontSize: 40 }} />
      </Button>
      <StyledMenu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
        elevation={1}
      >
        <StyledMenuItem className={classes.menuItem}>Features</StyledMenuItem>

        <StyledMenuItem className={classes.menuItem}>Pricing</StyledMenuItem>
        <StyledMenuItem className={classes.menuItem}>Ressources</StyledMenuItem>
        <hr className={classes.separator} />
        <StyledMenuItem className={classes.menuItem}>Login</StyledMenuItem>
        <CTAButton className={classes.signupButton}>Sign Up</CTAButton>
      </StyledMenu>
    </React.Fragment>
  );
}

export default withStyles(styles)(MobileMenu);
