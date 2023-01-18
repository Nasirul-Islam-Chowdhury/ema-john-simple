import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price, ratings, seller } = props.product
    return (
        <div className='product'>
            <img src={img} alt="shoes" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button className='cart-btn'>
                <p className='btn-text' onClick={() => props.handleAddtoCart(props.product)}> Add To Cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;