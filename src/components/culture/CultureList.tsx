import { CultureListItemType } from '../../types/culture.type'
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { ProjectListItemType } from '../../types/project.types'
import CultureItem from 'components/culture/CultureItem'

type CultureListProps = {
  cultures: CultureListItemType[]
}

const CultureList: FunctionComponent<CultureListProps> = function ({
  cultures,
}) {
  return (
    <CultureListWrapper>
      {cultures.map(({ node: { id, frontmatter } }: ProjectListItemType) => (
        <CultureItem {...frontmatter} link={'/culture'} key={id} />
      ))}
    </CultureListWrapper>
  )
}

export default CultureList

/**
 * Styled
 */

const CultureListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 120px;
`
