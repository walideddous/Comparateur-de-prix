import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import Typography from "../common/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    marginTop: theme.spacing(5)
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: "3rem"
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <EmojiTransportationIcon
                style={{ fontSize: "-webkit-xxx-large" }}
              />
              <Typography variant='h6' className={classes.title}>
                LES MEILLEURS AGENCES DE LOCATION EN TUNISIE
              </Typography>
              <Typography variant='h5'>
                {
                  "Découvrez nos partenaires pour partir en location au meilleur prix"
                }
                {" et bénéficiez de services exclusifs."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <DriveEtaIcon style={{ fontSize: "-webkit-xxx-large" }} />
              <Typography variant='h6' className={classes.title}>
                NOUVELLES EXPÉRIENCES
              </Typography>
              <Typography variant='h5'>
                {`Location de voitures -Recherchez, comparez et faites des
                  economies ! 
                  Karen Wekri.tn vous connecte à toutes les agences de location
                  présente dans la région choisie.`}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src='https://material-ui.com/static/themes/onepirate/productValues3.svg'
                alt='clock'
              />
              <Typography variant='h6' className={classes.title}>
                TARIFS EXCLUSIFS
              </Typography>
              <Typography variant='h5'>
                {
                  "En vous inscrivant, vous aurez accès à des tarifs spécialement négociés "
                }
                {"que vous ne trouverez nulle part ailleurs."}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
