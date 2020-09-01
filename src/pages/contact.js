import React from 'react'
import { graphql, Link } from 'gatsby'

export const query = graphql`
query contact {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "contact us"}}}) {
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

function contact({ data }) {
  return (
    <div className="columns is-centered has-text-centered">


      <div className="column is-two-fifths">
        <div className="has-text-centered ">

          <h1 className="title is-3 mt-5 is-capitalized">contact us</h1>
          <p>you can give any suggestions to improve this tool. feel free to contact us</p>
          <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}></div>
          <Link to="/" className="button" >Back to home page</Link>
        </div>
      </div>
    </div >
  )
}


export default contact
