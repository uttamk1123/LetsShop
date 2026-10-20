import React from 'react'
import { CartCard } from '../components/CartCard'
import { EmptyCart } from '../components/EmptyCart'
import { UseCart } from '../context/CartContext'
export const Cart = () => {

    const { total, cartList, removeProduct } = UseCart()
    return (
        <main className="pt-20">
            <h1 className="mb-6 text-2xl font-bold text-gray-900">Cart Items: {cartList.length} /
                Price : <svg className="inline-block h-5 w-5 align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><text x="12" y="18" textAnchor="middle" fontSize="28" fontWeight="700" fill="currentColor">₹</text></svg>{total}</h1>
            <section className="cart">
                {cartList.length > 0 ? (
                    cartList.map((product) => (
                        <CartCard key={product.id} product={product} removeProduct={removeProduct} />
                    ))
                ) : (
                    <EmptyCart />
                )}
            </section>
        </main>
    )
}
