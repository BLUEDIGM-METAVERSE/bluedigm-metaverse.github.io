import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { TechFrontmatterType } from '../../types/tech.types'
import { useMembersQuery } from '../../queries/member.query'
import { getUser, getImage } from '../../utils/commonFunctions'

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

  const members = useMembersQuery();
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
                    <img src={getImage(writer, members)} alt={writer} />
                    <span>
                        <p>{writer}</p>
                        <p>{getUser(writer, members)}</p>
                    </span>
                </div>
                <span className="data">{date}</span>
            </div>
        </Link>
    </li>
  )
}

export default TechItem
