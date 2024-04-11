import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { TechFrontmatterType } from '../../types/tech.types'
import GoIcon from '../../assets/icons/go.svg'
import Icon from '../../components/common/Icon'

type TechItemProps = TechFrontmatterType & { link: string, excerpt: string }

const TechItem: FunctionComponent<TechItemProps> = function ({
  category,
  title,
  date,
  writer,
  tags,
  link,
  excerpt,
}) {
  return (
    <li className="col-sm-4 col-md-6 col-lg-6">
        <Link to={link}>
            <div className="tag">
                {category} / {tags}
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 80" fill="none">
                        <path d="M10 5H73C74.1046 5 75 5.89543 75 7V70" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
                        <path d="M6 75L55.5726 24.492C56.8271 23.2139 59 24.1021 59 25.893V64" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            <dl>
                <dt>{title}</dt>
                <dd>{excerpt}</dd>
            </dl>
            <div className="card-bot">
                <div className="profile">
                    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMjlfODEg%2FMDAxNjc0OTk5NzQxODI3.bsY8Pp096lvyHW58LhZN75yFCzKee2-uP0Xgi2vZjX8g.pGWyDF1uYPZltBU6lsY2c5STziIOiH5SDn0lKYvN-LAg.JPEG.gmldud3540%2FIMG_6904.jpg&type=a340" alt="" />
                    <span>
                        <p>{writer}</p>
                        <p>개발 파트의 디렉터</p>
                    </span>
                </div>
                <span className="data">{date}</span>
            </div>
        </Link>
    </li>
  )
}

export default TechItem
