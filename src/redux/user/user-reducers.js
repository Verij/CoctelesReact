import { LOGOUT_USER, SET_CURRENT_USER } from "./user-actions";


const INITIAL_STATE = {
  currentUser: null,
};




const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    //me actualiza el initial state al usuario logeado
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    //simplemente me lo devuelve al null sacando al usuario del initial state
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
      }

    default:
      return state;
  }
};

export default userReducer;