import React from 'react'
import './CartCard.css'
import { UseCart } from '../context/CartContext'
export const CartCard = ({ product }) => {
    const { removeProduct } = UseCart();
    return (
        <div className="cartCard">
            <img src={product.image} alt={product.name} />
            <p className="productName">{product.name}</p>
            <p className="productPrice">${product.price}</p>
            <button onClick={() => removeProduct(product)}>Remove</button>
        </div>
    )
}
