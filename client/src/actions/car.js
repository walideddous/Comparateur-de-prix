import { ADD_CAR, DELETE_CAR, EDIT_CAR } from "./types";

// ajouter une voiture

export const ajoutVoiture = voiture => dispatch => {
  dispatch({
    type: ADD_CAR,
    payload: voiture
  });
};

// supprimer une voiture

export const suppVoiture = id => dispatch => {
  dispatch({
    type: DELETE_CAR,
    payload: id
  });
};

// editer
export const editerVoiture = voiture => dispatch => {
  dispatch({
    type: EDIT_CAR,
    payload: voiture
  });
};
