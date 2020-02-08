import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import RecherchePage2 from "./RecherchePage2";
import ProductHeroLayout from "../../layout/home/ProductHeroLayout";

const backgroundImage =
  "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/s-class/saloon-w222/explore/design-teaser/_jcr_content/par/teaserbox/teaserelement2/teaserelement/image.MQ6.6.20190725152929.jpeg";
const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  imgStyle: {
    display: "none"
  }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        className={classes.imgStyle}
        src={backgroundImage}
        alt='increase priority'
      />
      <RecherchePage2 />
    </ProductHeroLayout>
  );
}
ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
