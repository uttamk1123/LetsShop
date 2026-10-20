import letsShop from '../assets/shopping-bag.png'
import { NavLink } from 'react-router-dom'

export const EmptyCart = () => {
    return (
        <div className="mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg text-center shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">No item added in your cart</h5>
            <svg className="mx-auto mb-3 h-12 w-12 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
                <path d="M8 11h7l7 31h29l7-22H19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 49h25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <circle cx="27" cy="54" r="3" stroke="currentColor" strokeWidth="3" />
                <circle cx="46" cy="54" r="3" stroke="currentColor" strokeWidth="3" />
            </svg>
            <NavLink to="/" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                Lets Shop

            </NavLink>
        </div>
    )
}
