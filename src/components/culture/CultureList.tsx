import { CultureListItemType } from '../../types/culture.type'
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import CultureItem from 'components/culture/CultureItem'

type CultureListProps = {
  cultures: CultureListItemType[]
}

const CultureList: FunctionComponent<CultureListProps> = function ({
  cultures,
}) {
  return (
    <ul className="row culture-list-wrap">
      {cultures.map(({ node: { id, frontmatter } }: CultureListItemType) => (
        <CultureItem {...frontmatter} link={'/cultures'} key={id} />
      ))}
    </ul>
  )
}

export default CultureList
