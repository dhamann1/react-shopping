import React from 'react';
import {Grid, Table} from 'react-bootstrap';

const CartPage = (props) => {
  return (
    <Grid fluid >
 
      <Table bordered responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.order.products.map(product =>
            <tr>
              <td>{product._id}</td>
              <td>{product.quantity}</td>
            </tr>)}
        </tbody>
      </Table>
    </Grid>
  )
}

export default CartPage; 