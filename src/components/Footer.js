import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-sm md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-gray-700 dark:text-gray-300 sm:text-center">© 2026 <Link to="#" className="hover:underline">CineVerse</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 dark:text-gray-300 sm:mt-0">
                <li>
                    <NavLink to="#" className="hover:underline me-4 md:me-6">About</NavLink>
                </li>
                <li>
                    <NavLink to="#" className="hover:underline me-4 md:me-6">Privacy Policy</NavLink>
                </li>
                <li>
                    <NavLink to="#" className="hover:underline me-4 md:me-6">Licensing</NavLink>
                </li>
                <li>
                    <NavLink to="#" className="hover:underline">Contact</NavLink>
                </li>
            </ul>
        </footer>
    )
}
