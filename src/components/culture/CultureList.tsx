import { CultureListItemType } from '../../types/culture.type'
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import CultureItem from 'components/culture/CultureItem'
import { getAllSlugs } from '../../utils/commonFunctions'

type CultureListProps = {
  cultures: CultureListItemType[]
}

const CultureList: FunctionComponent<CultureListProps> = function ({
  cultures,
}) {
  return (
    <ul className="row culture-list-wrap">
      {cultures.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter 
          } 
        }: CultureListItemType) => (
          <CultureItem {...frontmatter} link={slug}  key={id} />
        )
      )}
    </ul>
  )
}

export default CultureList
