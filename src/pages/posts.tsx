import React, { FunctionComponent, useMemo } from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/common/layout'
import styled from '@emotion/styled'
import queryString, { ParsedQuery } from 'query-string'

import PostList from 'components/post/post-list'
import TagList, { TagListProps } from 'components/tag/tag-list'
import { PostListItemType, PostType } from 'types/post.types'

type PostsPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const Posts = styled.section``
const Container = styled.div``

const PostsPage: FunctionComponent<PostsPageProps> = function ({
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
          }: PostType,
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
      <Posts>
        <Container>
          <TagList selectedTag={selectedTag} tagList={tagList} />
          <PostList selectedTag={selectedTag} posts={edges} />
        </Container>
      </Posts>
    </Layout>
  )
}

export const Head = () => {}

export default PostsPage

export const selectPostList = graphql`
  query selectPostList {
    allMarkdownRemark(
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
        }
      }
    }
  }
`
