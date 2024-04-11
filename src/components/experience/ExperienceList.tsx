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
    <ul className="row ex-list-wrap">
      {
      experiences.map(
        ({ 
          node: { 
            id, 
            fields: { slug },
            frontmatter
          } 
      }: ExperienceListItemType) => (
        <ExperienceItem {...frontmatter} link={slug} key={id} />
      ))}
    </ul>
  )
}

export default ExperienceList
