import React from 'react';
import { CardProduct } from './CardProduct';
import { CardsProductosContenedor } from './CardProductosStyles';
import { Categorias } from '../../data/Categorias';
import { ContenedorCategorias, DescripcionContenedor, SelectCoctel, SelectTitulo, SubContenedorSelect } from './CategoriasStyles';
import { useDispatch, useSelector } from 'react-redux';


//importar actions

import * as categoriasActions  from '../../redux/categories/cat-actions';
import * as productsActions  from '../../redux/products/products-actions';
import { SectionProdCat } from './ProductsSectionStyles';
import { CategoriasDesc } from './CategoriasDesc';

//decidi poner tanto la seccion de productos como la de categorias en una misma carpeta, nose si sera mejor tenerlas por separado o no pero como una con otra seccion estan muy relacionadas entre si decidi ponerlas juntas

export const ProductsSection = () => {


  let coctelesArray = useSelector(state => state.products.productsAll);

  //me traigo la categoria seleccionada del initial state y el array categorias
  const categSelected = useSelector(
  state => state.categories.categSelected);
  const categoriasIT = useSelector(
    state => state.categories.categories
  );

  //me traigo los productos del initial state
  const categoriaProductos = useSelector(state => state.products.categoriaProductos);


const dispatch = useDispatch();

   const handleCategory = e =>{
   
       const buttonCategory = e.target.value
    dispatch(categoriasActions.categSelected(buttonCategory))
       
    // creo un array para luego poder mandarlo como payload al products reducer
    let categoriaArray=[];

    coctelesArray.forEach(coctel =>{
    
       //verifica el payload de la categoria de los botones/selector con la categoria de los productos, cada vez que se cumpla los manda al categoriaArray para sea despachado
      if(coctel.category === buttonCategory){
      categoriaArray.push(coctel)
    }}
    )
      dispatch(productsActions.productoDeCategoria(categoriaArray)) 
  }


  return (
    <>
    
    {/*parte categorias */}
    <ContenedorCategorias>
      <DescripcionContenedor>
      {/* Cada vez que coincida la categoria actualmente seleccionada (se ve con el estado del categSelected), me devuelve ese objeto de la categoria (me interesa solo la descripcion del objeto) */}
      
      {categoriasIT.map(categ => {if(categSelected === categ.category){
        return <CategoriasDesc key={categ.id} {...categ}/>;
        } return null;
      })}
      
      </DescripcionContenedor>

      <SubContenedorSelect>
        <SelectTitulo>Seleccione tipo de coctel</SelectTitulo>

        {/* mapeo las categorias dentro del select */}
        <SelectCoctel      
        value={categSelected}
        onChange={handleCategory}>
          {Categorias.map((option,i)=> {
          return (
            <option value={option.category} key={i}>{option.category}</option>
          )
        })}
        </SelectCoctel>
      </SubContenedorSelect>
    </ContenedorCategorias>

    {/*parte productos */}
<SectionProdCat>
      <CardsProductosContenedor>
    {/* Verifico si el array esta vacio o no */}
  {categoriaProductos.length ?
  (categoriaProductos.map(coctel => {
        return <CardProduct key={coctel.id} {...coctel} />;
        }))
        :
        (coctelesArray?.map(coctel => {
        return <CardProduct key={coctel.id} {...coctel} />;
        }))}
      </CardsProductosContenedor>
      </SectionProdCat>
    </>
  )
}
