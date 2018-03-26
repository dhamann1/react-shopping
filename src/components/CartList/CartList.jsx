import React from 'react';

const CartPage = (props) => {
  return (
    <div>
         <div>
      <table>
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
      </table>
    </div>
    </div>
  )
}

export default CartPage; 