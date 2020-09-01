import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

function Aboutsite() {
  const data = useStaticQuery(graphql`
    query siteinfo {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "site info"}}}) {
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
            }
          }
        }
      }
      
    
    `)
  return (
    <div className="has-text-centered">
      <hr />
      <h1 className="title is-5 mt-5 is-capitalized">welcome to case converter online tool</h1>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}></div>
    </div>
  )
}

export default Aboutsite
