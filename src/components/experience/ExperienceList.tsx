import { ExperienceListItemType } from '../../types/experience.types'
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ExperienceItem from 'components/experience/ExperienceItem'

type ExperienceListProps = {
  experiences: ExperienceListItemType[]
}

const ExperienceList: FunctionComponent<ExperienceListProps> = function ({
  experiences,
}) {
  return (
    <ExperienceListWrapper>
      {experiences.map(({ node: { id, frontmatter } }: ExperienceListItemType) => (
        <ExperienceItem {...frontmatter} link={'/experience'} key={id} />
      ))}
    </ExperienceListWrapper>
  )
}

export default ExperienceList

/**
 * Styled
 */
const ExperienceListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px 16px;
`
