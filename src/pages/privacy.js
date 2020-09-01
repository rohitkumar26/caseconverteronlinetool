import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"


export const query = graphql`
query privacy {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "privacy"}}}) {
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
  

`

function privacy({ data }) {
  return (
    <Layout>
      <div className="columns is-centered has-text-centered">
        <div className="column is-three-quarters">
          <div className="has-text-left">
            <hr />
            <h1 className="title is-3 mt-5 is-capitalized">Privacy policy</h1>
            <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}></div>
            <Link to="/" className="button is-primary" >Back to home page</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default privacy
