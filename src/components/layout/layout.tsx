import React from 'react'
import Header from '../header/header'

const Layout = (props: any) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
        </>
    )
}

export default Layout
