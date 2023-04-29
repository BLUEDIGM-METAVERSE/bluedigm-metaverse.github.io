import { Link } from 'gatsby'
import { ProjectFrontmatterType } from '../../types/project.types'
import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

type ProjectItemProps = ProjectFrontmatterType & { link: string }

const ProjectItem: FunctionComponent<ProjectItemProps> = function ({
  title,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <ProjectItemWrapper to={link}>
      <Thumbnail image={gatsbyImageData} alt="Project Thumbnail" />
      <h2>{title}</h2>
    </ProjectItemWrapper>
  )
}

export default ProjectItem

/**
 * Styled
 */
const ProjectItemWrapper = styled(Link)`
  position: relative;
  height: 600px;
  border: 1px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  border-radius: 20px;
  padding: 40px 36px;
  overflow: hidden;

  &:hover {
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(182, 88, 255, 0.8);
      backdrop-filter: blur(10px);
      content: '';
    }

    h2 {
      position: relative;
      font-size: 64px;
      line-height: 72px;
      z-index: 1;
    }
  }

  h2 {
    position: relative;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #ffffff;
  }
`

const Thumbnail = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`
