export const CATEGORIA_PRODUCTOS = 'CATEGORIA_PRODUCTOS';

export const productoDeCategoria = categoriaProductos => ({
  type: CATEGORIA_PRODUCTOS,
  payload: categoriaProductos,
});