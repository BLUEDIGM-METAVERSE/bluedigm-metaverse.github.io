import { CultureFrontmatterType } from '../../types/culture.type'
import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

type CultureItemProps = CultureFrontmatterType & { link: string }

const CultureItem: FunctionComponent<CultureItemProps> = function ({
  title,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <Thumbnail image={gatsbyImageData} alt="Culture Thumbnail" />
      <h2>{title}</h2>
      <p>우당탕탕 DigitalPlatform 본부 워크샵이야기 (Hard Coding)</p>
    </PostItemWrapper>
  )
}

export default CultureItem

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
