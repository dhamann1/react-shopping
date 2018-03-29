import React from 'react';
import {Grid, Table, Button} from 'react-bootstrap';


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
              <td><Button bsStyle="primary" onClick={() => { props.addProduct(product._id, props.order._id) }}>Add Product</Button></td>
              <td><Button bsStyle="danger" onClick={() => { props.removeProduct(product._id, props.order._id) }}>Remove Product</Button></td>
            </tr>)}
        </tbody>
      </Table>
    </Grid>
  )
}

export default ProductsList;



