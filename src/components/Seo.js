import React from 'react'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from 'gatsby'
function Seo() {
  const data = useStaticQuery(graphql`
query seoquery {
    site{
      siteMetadata{
        title
        description
        siteUrl
        keywords
      }
    }
  }
`)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
        <meta name="keywords" content={data.site.siteMetadata.keywords}></meta>
        <meta name="description" content={data.site.siteMetadata.description}></meta>
      </Helmet>
    </div>
  )
}
export default Seo
