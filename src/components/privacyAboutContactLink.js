import React from 'react'
import { Link } from 'gatsby'

function privacyAboutContactLink() {
    return (
        <div>
            <Link to="/about" className="mx-1">About</Link>|
            <Link to="/privacy" className="mx-1">Privacy Policy</Link>|
            <Link to="/contact" className="mx-1">Contact Us</Link>|
        </div>
    )
}

export default privacyAboutContactLink
