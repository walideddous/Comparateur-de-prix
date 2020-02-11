import { ADD_CAR, DELETE_CAR, EDIT_CAR } from "../actions/types";

const initialState = {
  voitures: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CAR:
      return {
        ...state,
        loading: false,
        voitures: [...state.voitures, payload]
      };
    case DELETE_CAR:
      return {
        ...state,
        loading: false,
        voitures: state.voitures.filter(voiture => voiture.id !== payload)
      };
    case EDIT_CAR:
      return {
        ...state,
        loading: false,
        voitures: state.voitures.map(voiture =>
          voiture.id === payload.id ? { ...voiture, ...payload } : voiture
        )
      };
    default:
      return state;
  }
}
