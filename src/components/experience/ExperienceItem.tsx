import { Link } from 'gatsby'
import { ExperienceFrontmatterType } from '../../types/experience.types'
import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

type ExperienceItemProps = ExperienceFrontmatterType & { link: string }

const ExperienceItem: FunctionComponent<ExperienceItemProps> = function ({
  title,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
    publicURL
  },
  link,
}) {
  return (
    <li className="col-sm-4 col-md-6 col-lg-6">
      <Link to={link}>
        <div className="ex-tit">{title}</div>
        <div className="thum"><img src={publicURL} alt={title} /></div>
        <div className="cover-blur"></div>
      </Link>
    </li>
  )
}

export default ExperienceItem

/**
 * Styled
 */

const Thumbnail = styled(GatsbyImage)`
 
`
