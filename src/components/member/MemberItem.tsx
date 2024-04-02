import { MemberFrontmatterType } from '../../types/member.type'
import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

type MemberItemProps = MemberFrontmatterType & { link: string }

const MemberItem: FunctionComponent<MemberItemProps> = function ({
  name,
  department,
  duty,
  position,
  introduce,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <PostItemWrapper to="#">
      <Thumbnail image={gatsbyImageData} alt={name} />
      <h2>{name} {position}</h2>
      <p>부서 : {department}</p>
      <p>직무 : {duty}</p>
      <p>{introduce}</p>
    </PostItemWrapper>
  )
}

export default MemberItem

/**
 * Styled
 */

const PostItemWrapper = styled(Link)`
  h2 {
    font-family: 'Jalnan';
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.006em;
    color: #000000;
    margin-bottom: 20px;
  }

  p {
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.006em;
    color: #4d4d4d;
  }
`

const Thumbnail = styled(GatsbyImage)`
  height: 700px;
  margin-bottom: 40px;
  object-fit: cover;
`
