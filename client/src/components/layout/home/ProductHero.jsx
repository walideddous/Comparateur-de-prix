import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "../common/Typography";
import Recherche from "./Recherche";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
  "https://www.lerepairedesmotards.com/img/voyages/location-auto-guide-pratique-conseils_hd.jpg";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt='increase priority'
      />
      <Typography
        style={{ marginTop: 20, marginBottom: 10 }}
        color='inherit'
        align='center'
        variant='h2'
        marked='center'
      >
        Location de voitures <br /> Recherchez, comparez et faites de vraies
        économies !
      </Typography>
      <div className='rechcarousel'>
        <Recherche />
      </div>
    </ProductHeroLayout>
  );
}
ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
