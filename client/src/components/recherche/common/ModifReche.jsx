import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import RecherchePage2 from "./RecherchePage2";
import ProductHeroLayout from "../../layout/home/ProductHeroLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

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
