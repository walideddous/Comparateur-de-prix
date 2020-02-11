import React, { Fragment, useEffect } from "react";
import VoitureCard from "./VoitureCard";
import Recherche from "./Search";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//Redux
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  typoStyle: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

const FlotVoiture = ({ voitures }) => {
  const classes = useStyles();
  const [cars, setcars] = React.useState([]);

  useEffect(() => {
    setcars([...voitures]);
  });

  return (
    <Fragment>
      <div className={classes.toolbar} />
      <Recherche
      // AddCar={handleAdd}
      />
      <Typography className={classes.typoStyle}>
        {cars.map(car => (
          <VoitureCard car={car} />
        ))}
      </Typography>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  voitures: state.car.voitures
});

export default connect(mapStateToProps)(FlotVoiture);
