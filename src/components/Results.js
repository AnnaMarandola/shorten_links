import { useState } from "react";
import { withStyles, Button, Typography } from "@material-ui/core";

const styles = (theme) => ({
  resultsContainer: {
    width: "80%",
    marginLeft: "10%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "5rem",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginLeft: "15%",
      marginTop: "-2.5rem",
    },
  },
  result: {
    backgroundColor: "white",
    marginBottom: "1rem",
    display: "flex",
    borderRadius: "5px",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      flexDirection: "row",
      padding: "1rem",
    },
  },
  longLink: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      marginLeft: "1rem",
      padding: 0,
      marginTop: "0.5rem",
    },
  },
  separator: {
    color: theme.palette.primary.turquoise,
    height: "2px",
    width: "100%",
    marginTop: "-0.5rem",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  shortLinkContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0rem 1rem",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  shortLink: {
    color: theme.palette.primary.turquoise,
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      marginRight: "2rem",
      marginTop: "0.5rem",
    },
  },
  copyButton: {
    backgroundColor: theme.palette.primary.turquoise,
    color: "white",
    textTransform: "initial",
    fontWeight: 700,
    padding: "0.5em 2.5em",
    margin: "1rem 0rem",
    height: "3rem",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.clearBlue,
      color: theme.palette.primary.yellow,
    },
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
  },
  copiedButton: {
    backgroundColor: theme.palette.primary.deepBlue,
    color: "white",
    textTransform: "initial",
    fontWeight: 700,
    padding: "0.5em 1.8em",
    margin: "1rem 0rem",
    height: "3rem",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
  },
});

const Results = ({ classes, longUrls, shortenUrls, loading }) => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
  };

  return (
      <div className={classes.resultsContainer}>

      {loading && <div>Loading ...</div>}

      { longUrls && longUrls.map((url, id) => (
      <div className={classes.result} key={id}>
        <Typography variant="h6" className={classes.longLink}>
          {url}
        </Typography>
        <hr className={classes.separator} />

        <div className={classes.shortLinkContainer}>
          <Typography variant="h6" className={classes.shortLink}>
            {shortenUrls[id]}
          </Typography>

          {isCopied ? (
            <Button className={classes.copiedButton} onClick={handleCopy}>
              Copied!
            </Button>
          ) : (
            <Button className={classes.copyButton} onClick={handleCopy}>
              Copy
            </Button>
          )}
        </div>
      </div>
      ))}



    </div>
  );
};

export default withStyles(styles)(Results);
