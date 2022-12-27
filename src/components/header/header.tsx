import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import './header.scss'

const navItems: any = [
    { label: 'HOME', route: '/' },
    { label: 'PRODUCTS', route: '/products' },
    { label: 'CATEGORY', route: '/category' },
    { label: 'SHOP', route: '/shop' },
    { label: 'BLOG', route: '/blog' },
    { label: 'FAQ', route: '/faq' },
    { label: 'ABOUT', route: '/about' },
    { label: 'CONTACT', route: '/contact' },
]

const Header = () => {
    return (
        <header className="flex justify-center">
            <div className="flex justify-end">
                <div>Sell on waamde</div>
                <div>Language</div>
            </div>

            <div className="flex justify-center items-center">
                <img src={Logo} alt="log" />
            </div>
            <div className="flex justify-center items-center">
                {navItems.map((item: any, index: number) => {
                    return (
                        <Link
                            key={index}
                            to={item.route}
                            className="px-2 text-[14px]"
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </div>
            <div>
                <input type="search" />
                <i className="fa fa-search" />
            </div>
        </header>
    )
}

export default Header
