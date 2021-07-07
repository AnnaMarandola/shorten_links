import { useState } from "react";
import axios from "axios";
import { withStyles, Button } from "@material-ui/core";
import BGDESKTOP from "../assets/bg-shorten-desktop.svg";
import BGMOBILE from "../assets/bg-shorten-mobile.svg";
import Results from "./Results";

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
      padding: "4rem",
      textAlign: "center",
      flexDirection: "column",
      width: "70%",
      marginLeft: "15%",
      backgroundImage: `url(${BGDESKTOP})`,
      backgroundPosition: "center 30% ",
      position: "relative",
      top: "-100px",
    },
  },
  input: {
    backgroundColor: "white",
    borderRadius: "10px",
    marginBottom: "1rem",
    width: "100%",
    height: "3.5rem",
    paddingLeft: "1rem",
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      height: "4rem",
      width: "80%",
      marginBottom: 0,
      marginRight: "1rem",
      margin: "0.5rem",
    },
  },
  shortenBtn: {
    padding: "1.2em 2em",
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
  const [urlToConvert, setUrlToConvert] = useState("");
  const [shortenUrls, setShortenUrls] = useState([]);
  const [longUrls, setLongUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);

  console.log("urlToConvert", urlToConvert);
  console.log("shortenUrls", shortenUrls);
  console.log("longUrls", longUrls);
  console.log("loading", loading);
  console.log("valid", valid);

  const handleChange = (e) => {
    setUrlToConvert(e.target.value);
  };

  const getShortenUrl = () => {
    axios
      .get(
        `https://api.shrtco.de/v2/shorten?url=${urlToConvert}/very/long/link.html`,
        {
          responseType: "json",
        }
      )
      .then((res) => {
        setLongUrls([...longUrls, res.data.result.original_link]);
        setShortenUrls([...shortenUrls, res.data.result.full_short_link]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!urlToConvert) {
      setValid(false);
      return null;
    }
    getShortenUrl();
    setUrlToConvert("");
    setLoading(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <input
            id="url"
            placeholder="Shorten a link here..."
            className={classes.input}
            type="url"
            value={urlToConvert}
            onChange={handleChange}
          />
          <Button type="submit" className={classes.shortenBtn}>
            Shorten it!
          </Button>
        </form>
      </div>
      <Results shortenUrls={shortenUrls} longUrls={longUrls} loading={loading}/>
    </div>
  );
};

export default withStyles(styles)(SearchBar);
