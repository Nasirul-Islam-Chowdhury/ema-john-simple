import React, { useState } from 'react';
import {useLoaderData, Link} from 'react-router-dom'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewOrder from '../reviewOrder/ReviewOrder';

const Order = () => {
    const {products, initialCart} = useLoaderData()
    const [cart, setCart] = useState(initialCart);
    const removeItem = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
                <div className='orders-container'>
                    {
                        cart.map(product => <ReviewOrder removeItem={removeItem} product={product} key={product.id}></ReviewOrder>)
                    }
                                    {
                    cart.length === 0 && <h2>No Items For Review Please Shop. Please <Link to={'/'}>Shop More</Link> </h2>
                }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}
                    clearCart={clearCart}>
                        <Link to={'/shipping'}>
                            <button>Procced Shipping</button>
                        </Link>
                        </Cart>   
                </div>
        </div>
    );
};

export default Order;