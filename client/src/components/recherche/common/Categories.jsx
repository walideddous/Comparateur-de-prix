import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  contain: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "20px"
  },
  buttonStyle: {
    height: "50px",
    width: "100px",
    marginTop: "4px"
  }
}));

export default function Categories(props) {
  const classes = useStyles();

  return (
    <div className={classes.contain}>
      {props.categories.map(el => (
        <Button className={classes.buttonStyle} variant='contained'>
          {el.categorie}
        </Button>
      ))}
    </div>
  );
}
