import { CultureListItemType } from '../../types/culture.type'
import { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from 'components/common/Layout'
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
    <Layout>
      <Container>
        <CultureSection>
          <SectionHeader>
            <Heading>메타버스팀 문화를 소개합니다</Heading>
          </SectionHeader>
          <CultureList cultures={edges} />
        </CultureSection>
      </Container>
    </Layout>
  )
}

export const Head = () => {}

export default CulturePage

export const selectProjectList = graphql`
  query selectTechList {
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
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 1560, height: 700)
              }
            }
            startedDate(formatString: "YYYY.MM.DD.")
            endedDate(formatString: "YYYY.MM.DD.")
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

const CultureSection = styled.section``

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
