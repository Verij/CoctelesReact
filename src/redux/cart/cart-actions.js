export const TOGGLE_CART = 'TOGGLE_CART';
export const PRODUCTO_AGREGADO = 'PRODUCTO_AGREGADO';
export const REMOVER_ITEM = 'REMOVER_ITEM';
export const RESTAR_CANTIDAD = 'RESTAR_CANTIDAD';
export const COMPRAR_CART = 'COMPRAR_CART';
export const ABRIR_CART = 'ABRIR_CART';
export const CERRAR_CART = 'CERRAR_CART';
export const LIMPIAR_CART = 'LIMPIAR_CART';

//PARA TOGGEAR EL CART

export const toggleCart = () => ({ type: TOGGLE_CART});

//AGREGAR ITEM AL CART
export const agregarProducto = productoACart => ({
  type: PRODUCTO_AGREGADO,
  payload: productoACart,
});

//REMOVER ITEM
export const removerItem = itemId => 
({
  type: REMOVER_ITEM,
  payload: itemId,
  });

//restar cantidad
export const restarCant = cant =>(
  {
    type: RESTAR_CANTIDAD,
    payload: cant
  }
);

export const comprarCart = () =>(
  {
    type: COMPRAR_CART,
  }
);

export const abrirCart = () =>(
  {
    type: ABRIR_CART,
  }
);

export const cerrarCart = () =>(
  {
    type: CERRAR_CART,
  }
);

export const limpiarCart = () => ({ type: LIMPIAR_CART });