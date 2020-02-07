import React, { Fragment } from "react";
import VoitureCard from "./VoitureCard";
import Recherche from "./Search";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  typoStyle: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

const FlotVoiture = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.toolbar} />
      <Recherche />
      <Typography className={classes.typoStyle}>
        <VoitureCard />
        <VoitureCard />
        <VoitureCard />
        <VoitureCard />
        <VoitureCard />
      </Typography>
    </Fragment>
  );
};

export default FlotVoiture;
