import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div style={{ color: 'red' }}>
    <Header headerText="this is header" />
    <p>welcome to gatsby rohit</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" /> <br />
    <Link to="/about">about</Link>
  </div>
}
