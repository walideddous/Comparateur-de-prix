import withRoot from "./withRoot";
import React from "react";
import RegionPresent from "./RegionPresent";
import QuestionFrequentes from "./QuestionFrequentes";
import AppFooter from "./AppFooter";
import ProductHero from "./ProductHero";
import ProductValues from "./ProductValues";
import ProductCTA from "./ProductCTA";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}));

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <ProductHero />
      <ProductValues />
      <RegionPresent />
      <ProductCTA />
      <QuestionFrequentes />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);
