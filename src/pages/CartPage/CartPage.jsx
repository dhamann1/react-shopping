import React from 'react';
import CartList from '../../components/CartList/CartList'


const CartPage = (props) => {
  return (
    <div> 
      <CartList
        order={props.order} 
      /> 
    </div> 
  )
}

export default CartPage; 