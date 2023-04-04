import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Layout from '../components/layout'

type IndexPageProps = {
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

const IndexPage: FunctionComponent<IndexPageProps> = function ({ data }) {
  const layoutData = {
    headerData: {
      logoImage: data.logoImage.childImageSharp.gatsbyImageData,
      iconSearch: data.iconSearch.childImageSharp.gatsbyImageData,
    },
  }

  return (
    <Layout layoutData={layoutData}>
      <section>Hello, Metaverse Team!</section>
      <section>Comming soon..!</section>
    </Layout>
  )
}

export const Head = () => {}

export default IndexPage

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
