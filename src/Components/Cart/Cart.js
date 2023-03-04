import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({cart,children}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping ;
    }
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tax; 
    return (
        <div className='cart'>
            <h2>Order summery</h2>
            <h2>Selected Items: {quantity}</h2>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
          {children}
        </div>
    );
};

export default Cart;