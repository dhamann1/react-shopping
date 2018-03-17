import React from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import SearchForm from '../../components/SearchForm/SearchForm';

const CataloguePage = (props) => {
  return (
    <div>
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