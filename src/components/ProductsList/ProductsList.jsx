import React from 'react';
import {Grid, Table} from 'react-bootstrap';


const ProductsList = (props) => {
  let updatedProducts = props.products.filter(product => product.name.includes(props.search.toLowerCase()));
  return (
    <Grid fluid > 
      <Table bordered responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>SKU</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {updatedProducts.map(product =>
            <tr>
              <td>{product.name}</td>
              <td>{"$" + product.price.toString()}</td>
              <td>{product.sku}</td>
              <td>{product.description}</td>
              <td><button onClick={() => { props.addProduct(product._id, props.order._id) }}>Add Product</button></td>
              <td><button onClick={() => { props.removeProduct(product._id, props.order._id) }}>Remove Product</button></td>
            </tr>)}
        </tbody>
      </Table>
    </Grid>
  )
}

export default ProductsList;



