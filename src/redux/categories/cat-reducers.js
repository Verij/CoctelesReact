import { Categorias } from "../../data/Categorias";
import { CATEGORIA_SELECCIONADA} from "./cat-actions";

const INITIAL_STATE = {
  categories: Categorias,
  categSelected: undefined,
};

const categoriasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIA_SELECCIONADA:
      return{
        ...state,
        categSelected:
        action.payload,
      };


    default:
      return state;
  }
};

export default categoriasReducer;