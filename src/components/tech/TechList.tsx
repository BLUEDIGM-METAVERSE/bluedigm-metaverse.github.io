import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import TechItem from 'components/tech/TechItem'
import { TechListItemType } from '../../types/tech.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
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
    tech,
  )

  return (
    <TechListWrapper ref={containerRef}>
      {techList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: TechListItemType) => (
          <TechItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </TechListWrapper>
  )
}

export default TechList

/**
 * Styled
 */
const TechListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px 16px;
`
