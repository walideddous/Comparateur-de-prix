import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../common/Typography";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4)
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap"
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100
    },
    "&:hover": {
      zIndex: 1
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15
    },
    "&:hover $imageMarked": {
      opacity: 0
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor"
    }
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

function RegionPresent(props) {
  const { classes } = props;

  const images = [
    {
      url: "https://www.nachoua.com/Hammamet/hammamet-6-2006.jpg",
      title: "Hammamet",
      width: "40%"
    },
    {
      url:
        "https://www.tunisienumerique.com/wp-content/uploads/2019/11/ariana2.jpg",
      title: "Ariana",
      width: "20%"
    },
    {
      url: "https://ak6.picdn.net/shutterstock/videos/4501046/thumb/5.jpg",
      title: "Tunis",
      width: "40%"
    },
    {
      url:
        "https://ecomnewsmed.com/uploads/Ecomnews%20Med/Tunisie/Villes/xdjerba-.jpg.pagespeed.ic.G96vg7nMBr.jpg",
      title: "Djerba",
      width: "38%"
    },
    {
      url: "https://wino.tn/wp-content/uploads/2015/10/DAR-TOZEUR-WINO-2.png",
      title: "Tozeur",
      width: "38%"
    },
    {
      url:
        "https://www.tunisienumerique.com/wp-content/uploads/2018/11/jun.jpg",
      title: "Kairouan",
      width: "24%"
    },
    {
      url:
        "https://lh5.googleusercontent.com/proxy/nagxXg-l30cyoR186X4V44Mu1o4uTFqRd5Jkelptud71l9qIv8xEmb469ZfIuBGvyBCsEvkHDOVtMB2e",
      title: "AinDrahem",
      width: "40%"
    },
    {
      url:
        "https://www.tunisienumerique.com/wp-content/uploads/2019/09/jumb.jpg",
      title: "Sfax",
      width: "28%"
    },
    {
      url: "https://i.ytimg.com/vi/gOgqaOC7auM/maxresdefault.jpg",
      title: "Sousse",
      width: "32%"
    }
  ];

  return (
    <Container className={classes.root} component='section'>
      <Typography variant='h4' marked='center' align='center' component='h2'>
        NOUS TRAVAILLONS AVEC DES AGENCES DE LOCATIONS PRÉSENTES DANS TOUTE LA
        TUNISIE
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component='h3'
                variant='h6'
                color='inherit'
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

RegionPresent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegionPresent);
