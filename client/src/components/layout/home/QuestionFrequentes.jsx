import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles(theme => ({
  root: {
    margin: "5%"
  },
  heading: {
    fontSize: "17px",
    fontWeight: theme.typography.fontWeightRegular,
    textDecoration: "none"
  }
}));
export default function QuestionFrequente() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>
            Questions fréquentes
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          style={{ display: "flex", flexDirection: "column" }}
        >
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>
                De quoi ai-je besoin pour louer une voiture ?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Pour réserver votre véhicule, vous n'avez besoin que d'une carte
                de crédit ou de débit.
                <br /> Votre bon/evoucher, pour montrer que vous avez déjà réglé
                le véhicule.
                <br /> La carte de crédit/débit du conducteur principal, avec
                suffisamment de fonds disponibles pour permettre de bloquer le
                dépôt de garantie de la voiture.
                <br /> Le permis de conduire valide et complet de chaque
                conducteur, obtenu depuis au moins 12 mois (parfois 24).
                <br /> Votre passeport ou carte d'identité que la société de
                location a besoin de voir.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography className={classes.heading}>
                Quel est l'âge requis pour louer un véhicule ?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Pour la plupart des sociétés de location de voitures, l'âge
                requis est entre 21 et 70 ans. Si vous avez moins de 25 ans ou
                plus de 70, vous pourriez avoir à payer un supplément.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography className={classes.heading}>
                Puis-je réserver une voiture de location pour quelqu'un d'autre
                ?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Oui, du moment que cette personne répond aux exigences du
                contrat de location. Il suffit de nous fournir ses coordonnées
                lors de la réservation.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3a-content'
              id='panel3a-header'
            >
              <Typography className={classes.heading}>
                Comment puis-je trouver le contrat de location le moins cher ?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nous travaillons avec toutes les grandes enseignes de location
                de voitures internationales (et beaucoup de petites entreprises
                locales) pour vous offrir un grand choix de véhicules au
                meilleur prix. C'est ainsi que nous pouvons vous trouver des
                offres de location de voitures dans plus de 60,000 destinations
                dans le monde. Pour comparer les tarifs et trouver votre
                véhicule idéal à un prix imbattable, il suffit d'utiliser notre
                moteur de recherche.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3a-content'
              id='panel3a-header'
            >
              <Typography className={classes.heading}>
                À quoi dois-je donner la priorité lorsque je choisis une voiture
                ?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Espace : Vous allez apprécier vos vacances bien davantage si
                vous optez pour une voiture avec beaucoup d'espace pour les
                passagers et les bagages.
                <br />
                Politique de carburant : Vous n'avez pas l'intention de beaucoup
                conduire ? Une politique de carburant de plein à plein peut vous
                faire réaliser de vraies économies.
                <br />
                Location : Difficile de faire plus commode qu'une prise en
                charge “sur aéroport” mais une prise en charge “hors aéroport”
                avec un service de navette peut s'avérer bien moins cher.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3a-content'
              id='panel3a-header'
            >
              <Typography className={classes.heading}>
                Tous les frais sont-ils inclus dans le prix de location ?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                La grande majorité de nos locations comprennent la protection en
                cas de vol, la couverture partielle en cas de collision (CDW),
                les taxes locales, les taxes d'aéroport et les taxes routières.
                Vous aurez à payer pour tout service additionnel lors de la
                prise en charge de votre voiture, comme par exemple les frais de
                jeune conducteur, de conducteur supplémentaire ou d'abandon -
                mais nous vous préciserons toujours ce qu'il vous en coûtera
                avant de confirmer la réservation de votre véhicule (prendre vos
                propres sièges enfant ou GPS peut vous aider à réduire le coût
                de votre location). Pour plus de détails sur ce qui est inclus,
                il suffit de vérifier les conditions de vente de la voiture qui
                vous intéresse.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
