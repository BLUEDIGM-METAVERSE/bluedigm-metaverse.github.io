import React, { FunctionComponent } from 'react'

import Layout from 'components/common/layout'
import styled from '@emotion/styled'

type IndexPageProps = {}

const KeyVisual = styled.section`
  background-color: #333333;
  color: white;
`
const Story = styled.section`
  background-color: #4d4d4d;
  color: white;
`
const Posts = styled.section`
  background-color: #737373;
  color: white;
`
const Team = styled.section`
  background-color: #999999;
  color: white;
`
const Culture = styled.section`
  background-color: #bfbfbf;
  color: white;
`
const Container = styled.div`
  text-align: center;
  font-size: 24px;
`

const IndexPage: FunctionComponent<IndexPageProps> = function () {
  return (
    <Layout>
      <KeyVisual>
        <Container>Key Visual Section</Container>
      </KeyVisual>
      <Story>
        <Container>Story Section</Container>
      </Story>
      <Posts>
        <Container>Posts Section</Container>
      </Posts>
      <Team>
        <Container>Team Section</Container>
      </Team>
      <Culture>
        <Container>Culture Section</Container>
      </Culture>
    </Layout>
  )
}

export const Head = () => {}

export default IndexPage
