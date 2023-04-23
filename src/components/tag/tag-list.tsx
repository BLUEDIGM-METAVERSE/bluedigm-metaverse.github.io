import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type TagListProps = {
  selectedTag: string
  tagList: {
    [key: string]: number
  }
}

type TagItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & TagItemProps

const TagListWrapper = styled.div`
  margin: 0 auto;
  padding: 80px 181px 120px;
`

const TagItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<TagItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`

const TagList: FunctionComponent<TagListProps> = function ({
  selectedTag,
  tagList,
}) {
  return (
    <TagListWrapper>
      {Object.entries(tagList).map(([name, count]) => (
        <TagItem to={`?tag=${name}`} active={name === selectedTag} key={name}>
          {name}({count})
        </TagItem>
      ))}
    </TagListWrapper>
  )
}

export default TagList
