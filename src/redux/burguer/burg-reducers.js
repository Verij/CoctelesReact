import { TOGGLE_BURGUER, CERRAR_BURGUER } from "./burg-actions";



const INITIAL_STATE ={
  showing: false,
};



const burguerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_BURGUER:
      return{
        ...state,
        showing: !state.showing
      };
     case CERRAR_BURGUER:
         return{
         ...state,
         showing: false
       };

    default:
      return state;
  }
};

export default burguerReducer;