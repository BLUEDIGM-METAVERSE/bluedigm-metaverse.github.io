import { ExperienceListItemType } from '../../types/experience.types'
import React, { FunctionComponent } from 'react'
import Layout from 'components/common/Layout'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import ExperienceList from 'components/experience/ExperienceList'

type ExperiencePageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: ExperienceListItemType[]
    }
  }
}

const ExperiencePage: FunctionComponent<ExperiencePageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Layout>
      <div className="sub-keyvisual"></div>
      <div className="container">
          <div className="row">
              <div className="col-sm-4 col-md-12 col-lg-12 sub-slogan">좋은 경험은<br />나눌수록 커져요</div>
              <ExperienceList experiences={edges} />
          </div>
      </div>
    </Layout>
  )
}

export const Head = () => {}

export default ExperiencePage

export const selectExperienceList = graphql`
  query selectExperienceList {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(experience)/" } }
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
            startedDate(formatString: "YYYY.MM.")
            endedDate(formatString: "YYYY.MM.")
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 600)
              }
            }
          }
        }
      }
    }
  }
`