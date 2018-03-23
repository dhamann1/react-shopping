import React from 'react';
import {Link} from 'react-router-dom';
import ProductsList from '../../components/ProductsList/ProductsList';
import SearchForm from '../../components/SearchForm/SearchForm';

const CataloguePage = (props) => {
  return (
    <div>
      <Link to="/cart">Your Cart</Link> 
      <SearchForm
        search={props.search}
        updateSearch={props.updateSearch}
      />
      <ProductsList
        search={props.search}
        products={props.products}
        order={props.order}
        addProduct={props.addProduct}
        removeProduct={props.removeProduct}
      />
    </div>
  )
}

export default CataloguePage; 