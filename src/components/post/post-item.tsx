import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { PostFrontmatterType } from 'types/post.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;
  height: 400px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const PostTop = styled.div`
  padding-bottom: 10px;
`

const PostTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
`

const PostSummary = styled.div`
  padding-bottom: 10px;
`

const PostBottom = styled.div``

const PostItem: FunctionComponent<PostItemProps> = function ({
  category,
  title,
  date,
  writer,
  tags,
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <PostItemContent>
        <PostTop>
          {tags} / {category}
        </PostTop>
        <PostTitle>{title}</PostTitle>
        <PostSummary>Contents를 Summary 변경</PostSummary>
        <PostBottom>
          {writer} ... {date}
        </PostBottom>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
