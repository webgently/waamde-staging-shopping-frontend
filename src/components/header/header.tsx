import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import Cart from '../../assets/images/icons/cart.svg'
import Wish from '../../assets/images/icons/wish.svg'
import Hamburger from '../../assets/images/icons/hamburger.svg'
import './header.scss'

const navItems: any = [
    { label: 'Home', route: '/' },
    { label: 'Categories', route: '/categories' },
    { label: 'Shop', route: '/shop' },
    { label: 'Blog', route: '/blog' },
    { label: 'Faq', route: '/faq' },
    { label: 'About Us', route: '/about' },
    { label: 'Contact Us', route: '/contact' },
    { label: 'Wish', route: '/' },
    { label: 'Cart', route: '/' },
]

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={Logo} alt="logo" className="min-w-[120px]" />
            </div>
            <div className="action-container">
                <div className="action-top">
                    <div className="flex items-center space-x-[10px]">
                        <div className="flex xl:hidden">
                            <img src={Logo} alt="logo" className="w-[80px]" />
                        </div>
                        <button className="hidden sm:flex">
                            Sell on waamde
                        </button>
                    </div>
                    <div className="flex justify-between items-center space-x-[1.2vw] relative">
                        <div className="hidden sm:flex space-x-[1vw]">
                            <button>Login</button>
                            <button>Register</button>
                        </div>
                        <div className="language-select">
                            <label>Language:</label>
                            <select>
                                <option>English</option>
                                <option>France</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="action-line"></div>
                <div className="action-bottom">
                    <div className="search-box">
                        <div className="w-full">
                            <input type="text" placeholder="Search Here...." />
                        </div>
                        <div className="flex justify-center items-center">
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="nav-group">
                        {navItems.map((item: any, ind: number) => {
                            return (
                                <div key={ind}>
                                    {item.label === 'Wish' ? (
                                        <Link to="/">
                                            <img src={Wish} alt="wish" />
                                        </Link>
                                    ) : item.label === 'Cart' ? (
                                        <Link to="/">
                                            <img src={Cart} alt="cart" />
                                        </Link>
                                    ) : (
                                        <Link to={item.route}>
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex sm:hidden justify-center items-center">
                        <button>
                            <img
                                src={Hamburger}
                                alt="hamburger"
                                className="min-w-[30px]"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
