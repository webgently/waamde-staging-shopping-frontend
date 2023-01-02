import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

const navItems: any = [
    { label: 'Home', route: '/' },
    { label: 'Categories', route: '/categories' },
    { label: 'Shop', route: '/shop' },
    { label: 'Blog', route: '/blog' },
    { label: 'Faq', route: '/faq' },
    { label: 'About Us', route: '/about' },
    { label: 'Contact Us', route: '/contact' },
    { label: 'Wish', route: '/wish' },
    { label: 'Cart', route: '/cart' },
    { label: 'Sign In', route: '/signIn' },
    { label: 'Sign Up', route: '/signUp' },
]

const Menu = (props: any) => {
    return (
        <>
            {props.open ? (
                <menu>
                    <span onClick={() => props.setOpen(false)}>&times;</span>
                    {navItems.map((item: any, index: number) => {
                        return (
                            <Link
                                key={index}
                                to={item.route}
                                className="navlist"
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </menu>
            ) : (
                <></>
            )}
        </>
    )
}

export default Menu
