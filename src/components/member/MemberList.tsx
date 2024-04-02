import { MemberListItemType } from '../../types/member.type'
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import MemberItem from 'components/member/MemberItem'

type MemberListProps = {
  members: MemberListItemType[]
}

const MemberList: FunctionComponent<MemberListProps> = function ({
  members,
}) {
  return (
    <MemberListWrapper>
      {members.map(({ node: { id, frontmatter } }: MemberListItemType) => (
        <MemberItem {...frontmatter} link={'/member'} key={id} />
      ))}
    </MemberListWrapper>
  )
}

export default MemberList

/**
 * Styled
 */

const MemberListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 120px;
`
