import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styled from '@emotion/styled'

type PostsPageProps = {}

const Posts = styled.section``
const Container = styled.div`
  height: 100px;
  text-align: center;
  font-size: 24px;
  color: #fc875e;
`

const PostsPage: FunctionComponent<PostsPageProps> = function () {
  return (
    <Layout>
      <Posts>
        <Container>Tech Posts Section</Container>
      </Posts>
    </Layout>
  )
}

export const Head = () => {}

export default PostsPage
