import React from 'react'
import { CartCard } from '../components/CartCard'
import { EmptyCart } from '../components/EmptyCart'
import { UseCart } from '../context/CartContext'
export const Cart = () => {

    const { total, cartList, removeProduct } = UseCart()
    return (
        <main className="pt-20">
            <h1 className="mb-6 text-2xl font-bold text-gray-900">Cart Items: {cartList.length} / Price :{total} </h1>
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
