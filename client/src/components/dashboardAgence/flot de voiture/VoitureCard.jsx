import React, { Fragment } from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ModalEditVoiture from "./ModalEditVoiture";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//Image
import img from "../../../img/c63.png";

const useStyles = makeStyles({
  card: {
    maxWidth: 320,
    margin: 25
  }
});

export default function VoitureCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={img}
          title='Voiture'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Marque:Mercedes Benz <br />
            Model:C63 S AMG
          </Typography>
          <Fragment>
            <Typography variant='body2' color='textSecondary' component='p'>
              Année : 2018
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Climatisé: oui
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Boite : Automatique
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Prix/Jour : 100 DT
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Voiture disponible non louer : 5
            </Typography>
          </Fragment>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          <ModalEditVoiture />
        </Button>
        <Button size='small' color='primary'>
          Supprimer
        </Button>
      </CardActions>
    </Card>
  );
}
