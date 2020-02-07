import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 510,
    minHeight: 300
  },
  carte: {
    Width: 510,
    height: 250
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.carte}>
        <CardContent>
          <Typography style={{ margin: 10, fontSize: 24 }}>
            Recherchons ensemble le bon deal...
          </Typography>
          <input
            style={{ margin: 10, height: 50, width: 420 }}
            placeholder='Lieu de prise en charge '
          ></input>{" "}
          <br />
          <input
            style={{ margin: 10, height: 50, width: 200 }}
            type='date'
            placeholder='date de prise en charge'
          ></input>
          <input
            style={{ margin: 10, height: 50, width: 200 }}
            type='date'
            placeholder='Date de restitution'
          ></input>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color='secondary' variant='contained' size='large'>
          <Link to='/recherche'> Recherchez</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
