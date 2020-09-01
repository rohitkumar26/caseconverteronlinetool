import React from 'react'

import "../styles/bulma.scss"

function Layout({ children }) {
    return (
        <div className="container is-fluid">

            {children}
        </div>
    )
}

export default Layout
