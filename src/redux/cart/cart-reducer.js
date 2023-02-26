import { TOGGLE_CART, PRODUCTO_AGREGADO, REMOVER_ITEM, RESTAR_CANTIDAD, COMPRAR_CART, ABRIR_CART, CERRAR_CART, LIMPIAR_CART } from "./cart-actions";

const INITIAL_STATE ={
  items: [],
  hidden: true,
  
};


const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };

      //para agregar el producto al cart
    case PRODUCTO_AGREGADO:
      let _item = {
        id: action.payload.id,
        nombre: action.payload.nombre,
        imagen: action.payload.imagen,
        precio: action.payload.precio,
        cantidad: action.payload.cantidad,
      }
      //verificando si existe ya dentro, sumandole la cantidad si de hecho esta, si no existe retorna el producto nuevo y lo renderiza
      const existeEnCart = state.items.some(item => item.id === _item.id);
      if(existeEnCart){
        return {
          ...state,
          items: state.items.map(item => item.id === _item.id ? {
            ...item,
            cantidad: item.cantidad + 1,
          }: item),
        }
      }else{

      return {
      ...state,
      items:[
        ...state.items,
        {
        id: action.payload.id,
        nombre: action.payload.nombre,
        imagen: action.payload.imagen,
        precio: action.payload.precio,
        cantidad: action.payload.cantidad,
        }
      ]
      }
      };
      //para sacar items (no es el clear cart, sino el que saca individualmente cada producto con el boton X)
      case REMOVER_ITEM:

      return{
        items:[
          ...state.items.filter(item => item.id !== action.payload)
        ]
      };
      //para el boton de cantidad menos
        case RESTAR_CANTIDAD:
          if(action.payload.cantidad > 1){
          return {
      ...state,
      items: state.items.map(item => item.id === action.payload.id ? {
        ...item,
        cantidad: item.cantidad - 1,
      } : item),
    }
  };
  //Cuando se compra el cart, me hace un clear al cart
  //Un falls through porque me tiraba un error y buscando soluciones en internet con un comentario de falls through lo solucionaba
  /* falls through */
      case COMPRAR_CART:
        return {
          ...state,
          items: [],
        };
  //un abrir cart para determinados botones como el agregar
        case ABRIR_CART:
          return{
            ...state,
            hidden: false
          };
  //un cerrar cart por si necesito cerrarlo al hacer una accion en otro lado (como por ejemplo abriendo el burguer menu)
        case CERRAR_CART:
          return{
            ...state,
            hidden: true
          };
  //hace lo mismo que el COMPRAR_CART pero para tenerlo distinguido en caso de que en el futuro agregue mas cosas a este case
      case LIMPIAR_CART:
      return {
        ...state,
        items: [],
      };
      default:
      return state;
      
  }

};

export default cartReducer;