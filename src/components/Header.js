
import letsShop from '../assets/shopping-bag.png'
import { NavLink } from 'react-router-dom'
import { UseCart } from '../context/CartContext'
export const Header = () => {
    const { cartList } = UseCart()

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-default">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={letsShop} className="h-7" alt="Lets Shop Logo" />
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Lets Shop </span>
                </NavLink>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className="inline-flex items-center gap-2 py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">
                                Cart
                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" /><circle cx="9" cy="21" r="1" fill="currentColor" /><circle cx="18" cy="21" r="1" fill="currentColor" /></svg>
                                <span aria-label={`${cartList.length} items`} className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-semibold text-white">
                                    {cartList.length}
                                </span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
