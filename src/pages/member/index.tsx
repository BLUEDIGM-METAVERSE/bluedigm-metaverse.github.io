import { MemberListItemType } from '../../types/member.type'
import { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from 'components/common/Layout'
import MemberList from 'components/member/MemberList'

type MemberPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: MemberListItemType[]
    }
  }
}

const MemberPage: FunctionComponent<MemberPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Layout>
      <div className="sub-keyvisual"></div>
      <div className="container">
          <div className="row">
              <div className="col-sm-4 col-md-12 col-lg-12 sub-slogan">메타버스팀 팀원을 소개합니다</div>
              <MemberList members={edges} />
          </div>
      </div>
    </Layout>
  )
}

export const Head = () => {}

export default MemberPage

export const selectMemberList = graphql`
  query selectMemberList {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(member)/" } }
      sort: [{ frontmatter: { orderNum: ASC } }, { frontmatter: { name: ASC } }]
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            name
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 500, height: 750)
              }
            }
            department
            position
            duty
          }
        }
      }
    }
  }
`