import { ProjectListItemType } from '../../types/project.types'
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProjectItem from 'components/project/ProjectItem'

type ProjectListProps = {
  projects: ProjectListItemType[]
}

const ProjectList: FunctionComponent<ProjectListProps> = function ({
  projects,
}) {
  return (
    <ProjectListWrapper>
      {projects.map(({ node: { id, frontmatter } }: ProjectListItemType) => (
        <ProjectItem {...frontmatter} link={'/projects'} key={id} />
      ))}
    </ProjectListWrapper>
  )
}

export default ProjectList

/**
 * Styled
 */
const ProjectListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px 16px;
`
