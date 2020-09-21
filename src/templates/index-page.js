import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  author,
  quote,
  introduction,
  image,
}) => {
  console.log(image)

  return (
    <div className="container">
      <div className="jumbotron">
        <div>
          <h1 className="main-title">Belinda</h1>
          <h1 className="main-subtitle">Sans Tabous</h1>
          <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} />
          <p>{quote}<span>{author}</span></p>
        </div>
        <div>
          <p>{introduction}</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string,
  quote: PropTypes.string,
  intro: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        introduction={frontmatter.introduction}
        quote={frontmatter.quote}
        author={frontmatter.author}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quote
        author
        introduction
      }
    }
  }
`
