import React from 'react'
import './CartCard.css'
import { UseCart } from '../context/CartContext'
export const CartCard = ({ product }) => {
    const { removeProduct } = UseCart();
    return (
        <div className="cartCard">
            <img src={product.image} alt={product.name} />
            <p className="productName">{product.name}</p>
            <p className="productPrice"><svg className="mr-1 inline-block h-4 w-4 align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><text x="12" y="18" textAnchor="middle" fontSize="23" fontWeight="700" fill="currentColor">₹</text></svg>{product.price}</p>
            <button onClick={() => removeProduct(product)}>Remove</button>
        </div>
    )
}
