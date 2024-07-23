import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import TechItem from 'components/tech/TechItem'
import { TechListItemType } from '../../types/tech.types'
import useInfiniteScroll, {
  useInfiniteScrollType
} from 'hooks/useInfiniteScroll'

type TechListProps = {
  selectedTag: string
  tech: TechListItemType[]
}

const TechList: FunctionComponent<TechListProps> = function ({
  selectedTag,
  tech,
}) {
  const { containerRef, techList }: useInfiniteScrollType = useInfiniteScroll(
    selectedTag,
    tech
  )

  return (
    <ul ref={containerRef} className="row tech-list-wrap" >
      {techList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
            excerpt
          },
        }: TechListItemType) => (
          <TechItem {...frontmatter} link={slug} excerpt={excerpt} key={id} />
        ),
      )}
    </ul>
  )
}

export default TechList
