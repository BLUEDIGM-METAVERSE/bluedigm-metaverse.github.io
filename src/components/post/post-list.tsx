import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import PostItem from 'components/post/post-item'
import { PostListItemType } from 'types/post.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/use-infinite-scroll'

type PostListProps = {
  selectedTag: string
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px 24px;
  margin: 0 auto;
  padding: 50px 181px 100px;
`

const PostList: FunctionComponent<PostListProps> = function ({
  selectedTag,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedTag,
    posts,
  )

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList
