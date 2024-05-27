import { CultureListItemType } from '../../types/culture.type'
import React, { FunctionComponent } from 'react'
import Layout from 'components/common/SubLayout'
import { graphql } from 'gatsby'
import CultureList from 'components/culture/CultureList'

type CulturePageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: CultureListItemType[]
    }
  }
}

const CulturePage: FunctionComponent<CulturePageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Layout> {/* main */}
      <div className="sub-keyvisual"></div>
      <div className="container">
          <div className="row">
              <div className="col-sm-4 col-md-12 col-lg-12 sub-slogan">우리의 행동이<br />문화를 만들어요</div>
              <CultureList cultures={edges} />
          </div>
      </div>
    </Layout>
  )
}

export const Head = () => {}

export default CulturePage

export const selectCultureList = graphql`
  query selectCultureList {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(culture)/" } }
      sort: [
        { frontmatter: { startedDate: DESC } }
        { frontmatter: { title: ASC } }
      ]
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 1560, height: 700)
              }
              publicURL
            }
            startedDate(formatString: "YYYY.MM.DD.")
            endedDate(formatString: "YYYY.MM.DD.")
          }
        }
      }
    }
  }
`
