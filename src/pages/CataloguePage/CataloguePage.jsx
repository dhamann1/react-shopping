import React from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';

const CataloguePage = (props) => {
  return (
    <div>
      <ProductsList 
      products={props.products}
      order={props.order}
      /> 
    </div>
  )  
}

export default CataloguePage; 