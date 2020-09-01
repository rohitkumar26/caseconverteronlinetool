import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"


export const query = graphql`
query about {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "about"}}}) {
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


function about({ data }) {
  return (
    <Layout>
      <div className="columns is-centered has-text-centered">
        <div className="column is-three-quarters">
          <div className="has-text-left">

            <hr />
            <h1 className="title is-2 mt-5 is-capitalized">About</h1>
            <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}></div>
            <Link to="/" className="button is-primary mt-2" >Back to home page</Link>

          </div>

        </div>
      </div>
    </Layout>
  )
}

export default about
