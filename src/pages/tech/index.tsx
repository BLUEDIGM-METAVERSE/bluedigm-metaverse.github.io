import React, { FunctionComponent, useMemo } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/common/SubLayout'
import styled from '@emotion/styled'
import queryString, { ParsedQuery } from 'query-string'
import TechList from 'components/tech/TechList'
import { TechListItemType, TechType } from '../../types/tech.types'
import TagList, { TagListProps } from 'components/tag/TagList'

type TechPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: TechListItemType[]
    }
  }
}

const TechPage: FunctionComponent<TechPageProps> = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedTag: string =
    typeof parsed.tag !== 'string' || !parsed.tag ? 'ALL' : parsed.tag

  const tagList = useMemo(
    () =>
      edges.reduce(
        (
          list: TagListProps['tagList'],
          {
            node: {
              frontmatter: { tags },
            },
          }: TechType,
        ) => {
          tags.forEach(tag => {
            if (list[tag] === undefined) list[tag] = 1
            else list[tag]++
          })

          list['ALL']++

          return list
        },
        { ALL: 0 },
      ),
    [],
  )

  return (
    <Layout>
      <div className="sub-keyvisual"></div>
      <div className="container">
          <div className="row">
              <div className="col-sm-4 col-md-12 col-lg-12 sub-slogan">우리의 기술 경험을<br /> 공유해요</div>
              <TagList selectedTag={selectedTag} tagList={tagList} />
              <TechList selectedTag={selectedTag} tech={edges} />
          </div>
      </div>
    </Layout>
  )
}

export const Head = () => {}

export default TechPage

export const selectTechList = graphql`
  query selectTechList {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(tech)/" } }
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            category
            title
            date(formatString: "YYYY.MM.DD.")
            writer
            tags
          }
          excerpt
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

const TechSection = styled.section``

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
`
