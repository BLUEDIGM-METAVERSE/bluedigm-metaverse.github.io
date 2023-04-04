import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Layout from '../components/layout'

type NotFoundPageProps = {
  data: {
    logoImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    iconSearch: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const NotFoundPage: FunctionComponent<NotFoundPageProps> = function ({ data }) {
  const layoutData = {
    headerData: {
      logoImage: data.logoImage.childImageSharp.gatsbyImageData,
      iconSearch: data.iconSearch.childImageSharp.gatsbyImageData,
    },
  }

  return (
    <Layout layoutData={layoutData}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const Head = () => {}

export default NotFoundPage

export const query = graphql`
  {
    logoImage: file(name: { eq: "logo" }) {
      childImageSharp {
        gatsbyImageData(width: 194, height: 28)
      }
    }
    iconSearch: file(name: { eq: "icon-search" }) {
      childImageSharp {
        gatsbyImageData(width: 20, height: 20)
      }
    }
  }
`
