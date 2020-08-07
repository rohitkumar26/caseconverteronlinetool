import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <Header headerText="About gatsby! component" />
            <p>Such wow. Very React.</p>
            <Link to="/">Back to home page</Link>
        </div>
    )
}