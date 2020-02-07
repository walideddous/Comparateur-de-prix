import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contain: {
    display: "flex",
    justifyContent: "center"
  },
  buttonStyle: {
    height: "50px",
    width: "100px",
    marginRight: "40px",
    marginTop: "30px"
  }
}));

export default function Categories(props) {
  const classes = useStyles();

  return (
    <div className={classes.contain}>
      {props.categories.map(el => (
        <button className={classes.buttonStyle}>{el.categorie}</button>
      ))}
    </div>
  );
}
