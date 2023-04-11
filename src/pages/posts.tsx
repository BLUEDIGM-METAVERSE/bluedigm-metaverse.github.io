import React, { FunctionComponent, useMemo } from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/common/layout'
import styled from '@emotion/styled'
import queryString, { ParsedQuery } from 'query-string'

import PostList from 'components/post/post-list'
import CategoryList, {
  CategoryListProps,
} from 'components/category/category-list'
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
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'ALL'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
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
          <CategoryList
            selectedCategory={selectedCategory}
            categoryList={categoryList}
          />
          <PostList selectedCategory={selectedCategory} posts={edges} />
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
            categories
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            writer
          }
        }
      }
    }
  }
`
