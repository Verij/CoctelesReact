import { coctelesArray, } from '../../data/Products';
import { CATEGORIA_PRODUCTOS} from "./products-actions";


const INITIAL_STATE = {
  productsAll: coctelesArray,
  categoriaProductos: [],
};





const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIA_PRODUCTOS:
    return{
      ...state,
      categoriaProductos: action.payload,
      
    };

    default:
      return state;
  }
};

export default productsReducer;
