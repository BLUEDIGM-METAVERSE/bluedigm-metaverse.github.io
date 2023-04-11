import React, { FunctionComponent } from 'react'

import Layout from 'components/common/layout'
import styled from '@emotion/styled'

type ProjectsPageProps = {}

const Projects = styled.section``
const Container = styled.div`
  text-align: center;
  font-size: 24px;
  color: #4006e5;
`

const ProjectsPage: FunctionComponent<ProjectsPageProps> = function () {
  return (
    <Layout>
      <Projects>
        <Container>Projects Section</Container>
      </Projects>
    </Layout>
  )
}

export const Head = () => {}

export default ProjectsPage
