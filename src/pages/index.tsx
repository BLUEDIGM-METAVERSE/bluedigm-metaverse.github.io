import React, { FunctionComponent } from 'react'

import Layout from 'components/common/Layout'
import KeyVisual from 'components/main/KeyVisual'
import Story from 'components/main/Story'
import Introduction from 'components/main/Introduction'
import Tech from 'components/main/Tech'
import Culture from 'components/main/Culture'
import Bx from 'components/main/Bx'
import Navi from 'components/main/Navi'
import styled from '@emotion/styled'

type IndexPageProps = {}

const Section = styled.section``

const IndexPage: FunctionComponent<IndexPageProps> = function () {
  return (
    <Layout>
      <Section className='main-keyvisual'>
        <KeyVisual />
      </Section>
      <Section className='story-title'>
        <Story />
      </Section>
      <Section className='introduction'>
        <Introduction />
      </Section>
      <Section className='tech-main'>
        <Tech />
      </Section>
      <Section className='culture-main'>
        <Culture />
      </Section>
      <Section className='bx' id='bx'>
        <Bx />
      </Section>
      <Section className='navi'>
        <Navi />
      </Section>
    </Layout>
  )
}

export default IndexPage
