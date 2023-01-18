import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>order summery</h4>
            <h1>Total Product: {cart.length}</h1>
        </div>
    );
};

export default Cart;