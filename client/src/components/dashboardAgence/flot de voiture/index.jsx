import React, { Fragment, useEffect } from "react";
import VoitureCard from "./VoitureCard";
import Recherche from "./Search";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//Redux
import { connect } from "react-redux";
import { avoirVoiture } from "../../../actions/car";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  typoStyle: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

const FlotVoiture = ({ voitures, avoirVoiture }) => {
  const classes = useStyles();

  useEffect(() => {
    avoirVoiture();
  }, [avoirVoiture]);

  return (
    <Fragment>
      <div className={classes.toolbar} />
      <Recherche />
      <Typography className={classes.typoStyle}>
        {voitures.map(voiture => (
          <VoitureCard voiture={voiture} />
        ))}
      </Typography>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  voitures: state.car.voitures
});

export default connect(mapStateToProps, { avoirVoiture })(FlotVoiture);
