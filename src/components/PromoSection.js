import { withStyles, Typography, Card } from "@material-ui/core";
import BRAND from "../assets/icon-brand-recognition.svg";
import RECORDS from "../assets/icon-detailed-records.svg";
import CUSTOM from "../assets/icon-fully-customizable.svg";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.whiteish,
  },
  title: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  subtitle: {
    textAlign: "center",
    width: "80%",
    marginLeft: "10%",
    marginBottom: "8rem",
  },
  card: {
    width: "90%",
    marginLeft: "5%",
    marginBottom: "5rem",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  circle: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.deepBlue,
    overflow: "visible",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "-3rem",
    marginBottom: "3rem"
  },
  icon: {
      width: "50%",
      height: "50%"

  },
  cardContent: {
    textAlign: "center",
    padding: "1.5rem"
  },
});

const cards = [
  {
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    icon: BRAND,
  },
  {
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: RECORDS,
  },
  {
    title: "Fully Customizable",
    text: "Improve brand awereness and content discoverability through customizable links, supercherging audience engagement.",
    icon: CUSTOM,
  },
];

const PromoSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Advanced Statistics
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Typography>
      <div className={classes.cardsContainer}>
      {cards.map((card, id) => (
        <div key={id} >
          <div className={classes.card}>
          <div className={classes.circle}>
            <img src={card.icon} alt={card.title} className={classes.icon} />
          </div>
            <Typography variant="h3" className={classes.cardTitle}>
              {card.title}
            </Typography>
            <Typography variant="body1" className={classes.cardContent}>
              {card.text}
            </Typography>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(PromoSection);
