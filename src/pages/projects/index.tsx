import { ProjectListItemType } from '../../types/project.types'
import React, { FunctionComponent } from 'react'
import Layout from 'components/common/Layout'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import ProjectList from 'components/project/ProjectList'

type ProjectPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: ProjectListItemType[]
    }
  }
}

const ProjectPage: FunctionComponent<ProjectPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Layout>
      <div className="sub-keyvisual"></div>
      <div className="container">
          <div className="row">
              <div className="col-sm-4 col-md-12 col-lg-12 sub-slogan">현재 진행중인 프로젝트 입니다</div>
              <ProjectList projects={edges} />
          </div>
      </div>
    </Layout>
  )
}

export const Head = () => {}

export default ProjectPage

export const selectProjectList = graphql`
  query selectProjectList {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
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