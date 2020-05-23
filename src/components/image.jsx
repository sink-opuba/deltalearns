import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// A reusable image component
const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  // look for image that match the filename and return it
  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(props.filename)
  })
  if (!image) {
    return null
  }
  return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
}

export default Image

Image.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
