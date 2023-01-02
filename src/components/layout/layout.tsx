import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

const Layout = (props: any) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout
