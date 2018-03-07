import React from 'react';


const ProductsList = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>SKU</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.products ? props.products.map(product =>
            <tr>
              <td>{product.name}</td>
              <td>{"$" + product.price.toString()}</td>
              <td>{product.sku}</td>
              <td>{product.description}</td>
              <td><button onClick={() => { props.addProduct(product._id, props.order._id) }}>Add Product</button>
              </td>
            </tr>
          )
            :
            <div></div>
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductsList;



