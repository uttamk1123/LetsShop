import { Link } from "react-router-dom"
import { UseCart } from "../context/CartContext"
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
    const [isAdded, setAddedFlag] = useState(false);
    const { addProduct, cartList, removeProduct } = UseCart();
    const handleAdd = () => {
        addProduct(product)
    }

    useEffect(() => {
        const productIsInCart = cartList.find(cartItem => cartItem.id === product.id);

        setAddedFlag(productIsInCart);


    }, [cartList, product.id])

    return (

        <div className="bg-neutral-primary-soft flex h-full max-w-sm flex-col border border-default rounded-base shadow-xs m-2">
            <Link to="#">
                <img className="rounded-t-base" src={product.image} alt={product.name} />
            </Link>
            <div className="flex flex-1 flex-col p-6 text-center">
                <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                    <svg className="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokelinecap="round" stroke-linejoin="round" strokewidth="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z" /></svg>
                    Trending
                </span>
                <Link to="#">
                    <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{product.name}</h5>
                </Link>
                {
                    isAdded ?

                        <button type="button" onClick={() => removeProduct(product)} className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-md bg-red-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Remove
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" /><circle cx="9" cy="21" r="1" fill="currentColor" /><circle cx="18" cy="21" r="1" fill="currentColor" /></svg>
                        </button>
                        :
                        <button type="button" onClick={handleAdd} className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Add to
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" /><circle cx="9" cy="21" r="1" fill="currentColor" /><circle cx="18" cy="21" r="1" fill="currentColor" /></svg>
                        </button>
                }
                <span id={`price-${product.id}`} className="inline-flex items-center self-end bg-brand-softer border border-brand-subtle text-fg-brand-strong text-sm font-bold px-1.5 py-0.5 rounded-sm">
                    <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <text x="12" y="18" textAnchor="middle" fontSize="18" fontWeight="700" fill="currentColor">₹</text>
                    </svg>
                    {product.price}
                </span>
            </div>
        </div>


    )
}
