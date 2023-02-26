export const CATEGORIA_SELECCIONADA = 'CATEGORIA_SELECCIONADA';
export const CATEGORIA_SELECCIONADA_TODOS = 'CATEGORIA_SELECCIONADA_TODOS';



export const categSelected = category => ({
  type: CATEGORIA_SELECCIONADA,
  payload: category,
});