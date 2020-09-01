import React from "react"
import Header from "../components/header"
import Strconverter from "../components/strconverter/Convertstr"
import Layout from "../components/layout"
import MysiteInfo from "../components/aboutsite/Aboutsite"
import Footer from "../components/footer"
import PrivacyAboutContactLink from "../components/privacyAboutContactLink"
import Seo from "../components/Seo"



export default function Home() {
  return (
    <Layout >
      <Seo />
      <div className="columns is-centered has-text-centered">
        <div className="column is-three-quarters">

          <Header headerText="Case converter online tool" />
          <Strconverter />
          <MysiteInfo />
          <PrivacyAboutContactLink />
          <Footer />
        </div>
      </div>

    </Layout>)
}

