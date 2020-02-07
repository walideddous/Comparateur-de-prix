import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  column: {
    width: "70%",
    display: "flex",
    justifyContent: "center"
  },
  logo: {
    width: "100px",
    height: "50px",
    marginRight: "30px",
    marginTop: "115px"
  },
  image: {
    margin: "30px"
  },
  content: {
    width: "200px",
    height: "200px",
    margin: "30px"
  },
  buttonStyle: {
    backgroundColor: "#ff3366",
    width: "100px",
    height: "40px"
  }
}));

export default function CardCar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className='country'>
        <div className={classes.contain}>
          {props.carte.map(el => (
            <div className={classes.column}>
              <img className={classes.logo} src={el.agence} alt='...' />
              <img className={classes.image} src={el.image} alt='...' />
              <div className={classes.content}>
                <h3>{el.modele}</h3>
                <h5>Climatiseur:{el.clim}</h5>
                <h5>Carburant:{el.carburant}</h5>
                <h5>Nbr de place:{el.nbrDePlace}</h5>
              </div>
              <div className={classes.image}>
                <p>prix/jr:{el.prixjr}</p>
                <p>Nbr de jours:3</p>
                <p>prix Total:150dt</p>
                <button className={classes.buttonStyle}>Reserver</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
