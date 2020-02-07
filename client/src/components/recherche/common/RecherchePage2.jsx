import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 1150,
    minHeight: 100
  },
  carte: {
    Width: 510,
    height: 100
  },
  inputLieu: {
    margin: 10,
    height: 67,
    width: 420,
    fontSize: 24
  },
  calenderStyle: {
    margin: 10,
    height: 70,
    width: 210,
    fontSize: 24
  },
  buttonsStyle: {
    margin: 10,
    borderRadius: "50%",
    height: 73,
    width: 200,
    backgroundColor: "#ff3366"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
      <input
        className={classes.inputLieu}
        placeholder='Lieu de prise en charge '
      ></input>
      <input
        className={classes.calenderStyle}
        type='date'
        placeholder='date de prise en charge'
      ></input>
      <input
        className={classes.calenderStyle}
        type='date'
        placeholder='Date de restitution'
      ></input>
      <button className={classes.buttonsStyle}>Modifier ma recherche</button>
    </div>
  );
}
