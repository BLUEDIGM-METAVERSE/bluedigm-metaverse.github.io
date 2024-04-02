import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from '../../components/common/Image';
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

const KeyVisual: React.FC = () => {
    const cultures = useStaticQuery(graphql`
    query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(culture)/" } }
          sort: [
            { frontmatter: { startedDate: DESC } }
            { frontmatter: { title: ASC } }
          ]
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                summary
                tag
                thumbnail {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                startedDate(formatString: "YYYY.MM.DD.")
                endedDate(formatString: "YYYY.MM.DD.")
              }
            }
          }
        }
      }
  `);
  
    return (
        <>
            <h2 className="visually-hidden">팀 문화 소개</h2>
            <div className="container">
                <div className="symbol-txt"><Image path="/images/symbol_txt.svg" alt="" /></div>
                <div className="slogan">
                    <strong>우리팀은</strong>
                    <p>일은 즐겁게~</p>
                    <p>노는건 최선을 다해서~</p>
                </div>
                <div className="row black-box">
                    <dl className="col-sm-4 col-md-12 col-lg-12">
                        <dt>#블랙박스</dt>
                        <dd>
                            우리의 추억을 기록하고 공유해요~
                            <a href="/culture">더 많이 보고 싶어요
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 80" fill="none">
                                        <path d="M10 5H73C74.1046 5 75 5.89543 75 7V70" stroke="currentColor" strokeWidth="10" stroke-linecap="round"/>
                                        <path d="M6 75L55.5726 24.492C56.8271 23.2139 59 24.1021 59 25.893V64" stroke="currentColor" strokeWidth="10" stroke-linecap="round"/>
                                    </svg>
                                </span>
                            </a>
                        </dd>
                    </dl>

                    <ul className="row">
                        {cultures.allMarkdownRemark.edges.map(({ node }) => (
                            <li className="col-sm-4 col-md-4 col-lg-4">
                                <a href="/culture/">
                                    <span>{node.frontmatter.tag}<p>{node.frontmatter.startedDate} ~ {node.frontmatter.endedDate}</p></span>
                                    <strong>{node.frontmatter.title} {node.frontmatter.gatsbyImageData}</strong>
                                    <Thumbnail image={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData} alt={node.title} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="who">
                <strong>우리는 누구일까요?</strong>
                <div className="member">
                    <ul>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                        <li>
                            <Image path="/images/mem-ssong.webp" alt="송호민" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
  }
  
export default KeyVisual

const Thumbnail = styled(GatsbyImage)`
  height: 700px;
  margin-bottom: 40px;
  object-fit: cover;
`