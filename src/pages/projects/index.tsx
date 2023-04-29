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
      <Container>
        <ProjectSection>
          <SectionHeader>
            <Heading>
              {`현재 진행중인
                프로젝트 입니다`}
            </Heading>
          </SectionHeader>
          <ProjectList projects={edges} />
        </ProjectSection>
      </Container>
    </Layout>
  )
}

export const Head = () => {}

export default ProjectPage

export const selectProjectList = graphql`
  query selectTechList {
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

/**
 * Styled
 */
const Container = styled.div`
  max-width: 1558px;
  margin: 0 auto;
  padding-bottom: 127px;
`

const ProjectSection = styled.section``

const SectionHeader = styled.header`
  max-width: 941px;
  padding: 76px 0;
  margin-bottom: 120px;
`

const Heading = styled.h1`
  font-family: 'Jalnan';
  font-weight: 700;
  font-size: 130px;
  line-height: 140px;
  letter-spacing: -0.006em;
  color: #000000;
  white-space: pre-line;
`
