import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './reviewOrder.css'

const ReviewOrder = ({product, removeItem}) => {
    const {img, price, quantity, name, shipping, id} = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>shipping Fee: ${shipping}</small></p>
                    <p><small>Quantity ${quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button className='btn-delete'>
                    <FontAwesomeIcon onClick={()=>removeItem(id)} className='delete-icon' icon={faTrashAlt}>Delete</FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;