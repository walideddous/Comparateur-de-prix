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
    height: "80%"
  },
  titleStyle: {
    margin: "10px",
    fontSize: "20px"
  },
  lieuStyle: {
    margin: "10px",
    height: "50px",
    width: "95%"
  },
  depStyle: {
    margin: "10px",
    height: "50px",
    width: "42%"
  },
  arrStyle: {
    margin: "10px",
    height: "50px",
    width: "45%"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.carte}>
        <CardContent>
          <Typography className={classes.titleStyle}>
            Recherchons ensemble le bon deal...
          </Typography>
          <input
            className={classes.lieuStyle}
            placeholder='Lieu de prise en charge '
          />
          <br />
          <input
            className={classes.depStyle}
            type='date'
            placeholder='date de prise en charge'
          />
          <input
            className={classes.arrStyle}
            type='date'
            placeholder='Date de restitution'
          />
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
