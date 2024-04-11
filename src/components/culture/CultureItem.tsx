import { CultureFrontmatterType } from '../../types/culture.type'
import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

type CultureItemProps = CultureFrontmatterType & { link: string}

const CultureItem: FunctionComponent<CultureItemProps> = function ({
  title,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
    publicURL
  },
  link,
}) {
  return (
    <li className="col-sm-4 col-md-12 col-lg-12">
        <Link to={link}>
            <div className="thum">
              <img src={publicURL} alt={title} />
            </div>
            <dl>
                <dt>{title}</dt>
                <dd>{summary}</dd>
            </dl>
        </Link>
    </li>
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
