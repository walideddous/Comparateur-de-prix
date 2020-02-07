import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import withRoot from "./common/withRoot";
import AppFooter from "../layout/home/AppFooter";
import ModifReche from "./common/ModifReche";
import CardCar from "./common/CardCar";
import Categories from "./common/Categories";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}));

function Index() {
  const categ = [
    { categorie: "TOUT" },
    { categorie: "CITADINE" },
    { categorie: "COMPACTE" },
    { categorie: "BERLINE" },
    { categorie: "MONOSPACE" },
    { categorie: "LUXE" },
    { categorie: "PICKUP" }
  ];
  const cars = [
    {
      id: 1,
      agence: "https://www.location-voiture-tunisie.net/images/logo.png",
      image: "https://1084218332.rsc.cdn77.org/photos/car/214/Nissanmicra.jpg",
      modele: "NISSAN-MICRA",
      clim: "non",
      carburant: "ESSENCE",
      nbrDePlace: "4",
      prixjr: 50
    },
    {
      id: 2,
      agence:
        "https://cdn2.rcstatic.com/images/supplier_logos/hertz_logo_lrg.gif",
      image: "https://1084218332.rsc.cdn77.org/photos/car/217/FiatPuntoPop.jpg",
      modele: "FIAT-PUNTO",
      clim: "oui",
      carburant: "ESSENCE",
      nbrDePlace: "4",
      prixjr: 55
    },
    {
      id: 3,
      agence:
        "https://www.tunisia-rentcar.com/assets/images/logo-trust-car.png",
      image: "https://1084218332.rsc.cdn77.org/photos/car/499/HyundaiGi10.jpg",
      modele: "HYUNDAI-i10",
      clim: "non",
      carburant: "ESSENCE",
      nbrDePlace: "4",
      prixjr: 70
    },
    {
      id: 4,
      agence:
        "https://cdn2.rcstatic.com/images/supplier_logos/hertz_logo_lrg.gif",
      image: "https://1084218332.rsc.cdn77.org/photos/car/212/Peugeot301.jpg",
      modele: "PEUGEOT-301",
      clim: "non",
      carburant: "ESSENCE",
      nbrDePlace: "5",
      prixjr: 90
    },
    {
      id: 5,
      agence: "https://www.location-voiture-tunisie.net/images/logo.png",
      image:
        "https://1084218332.rsc.cdn77.org/photos/car/221/citroen-c-elysee.jpg",
      modele: "CITROEN C-elysee",
      clim: "oui",
      carburant: "ESSENCE",
      nbrDePlace: "5",
      prixjr: 100
    },
    {
      id: 6,
      agence: "http://www.energy-rentacar.com/public/images/logo_header.png",
      image: "https://1084218332.rsc.cdn77.org/photos/car/493/VW-Polo.jpg",
      modele: "VW POLO 8",
      clim: "oui",
      carburant: "ESSENCE",
      nbrDePlace: "5",
      prixjr: 110
    },
    {
      id: 7,
      agence:
        "https://cdn2.rcstatic.com/images/supplier_logos/firefly_logo_lrg.gif",
      image: "https://1084218332.rsc.cdn77.org/photos/car/225/VWGolf7.jpg",
      modele: "VW GOLF 7",
      clim: "oui",
      carburant: "GASOIL",
      nbrDePlace: "5",
      prixjr: 150
    },
    {
      id: 8,
      agence: "http://www.energy-rentacar.com/public/images/logo_header.png",
      image: "https://1084218332.rsc.cdn77.org/photos/car/242/AudiA4.jpg",
      modele: "AUDI-A4",
      clim: "oui",
      carburant: "GASOIL",
      nbrDePlace: "5",
      prixjr: 250
    },
    {
      id: 9,
      agence:
        "https://cdn2.rcstatic.com/images/supplier_logos/firefly_logo_lrg.gif",
      image:
        "https://1084218332.rsc.cdn77.org/photos/car/243/vw-transporter.jpg",
      modele: "VW-TRANSPORTER",
      clim: "oui",
      carburant: "GASOIL",
      nbrDePlace: "9",
      prixjr: 150
    },
    {
      id: 10,
      agence: "https://www.location-voiture-tunisie.net/images/logo.png",
      image:
        "https://1084218332.rsc.cdn77.org/photos/car/250/Mercedes%20E-Class.jpg",
      modele: "MERCEDES-CLASSE-E",
      clim: "oui",
      carburant: "GASOIL",
      nbrDePlace: "5",
      prixjr: 450
    }
  ];
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <ModifReche />
      <Categories categories={categ} />
      <CardCar carte={cars} />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
