import React from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';

const CataloguePage = (props) => {
  return (
    <div>
      <ProductsList products={props.products} /> 
    </div>
  )  
}

export default CataloguePage; 