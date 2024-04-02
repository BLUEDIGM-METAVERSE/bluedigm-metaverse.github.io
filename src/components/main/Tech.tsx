import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

const Tech: React.FC = () => {
    const data = useStaticQuery(graphql`
    query {
        techs: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(tech)/" } }
          sort: [
            { frontmatter: { date: DESC } }
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
                category
                writer
              }
              excerpt
            }
          }
        }
        members : allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(member)/" } }
          sort: [{ frontmatter: { orderNum: ASC } }, { frontmatter: { name: ASC } }]
        ) {
          edges {
            node {
                id
                fields {
                    slug
                }
                frontmatter {
                    name
                    thumbnail {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    department
                    position
                    duty
                }
            }
          }
        }
      }
  `);
  
    function getUser( writer: string ) {
        const matchedMember = data.members.edges.find(({ node: memberNode }) => memberNode.frontmatter.name === writer);
        return matchedMember? matchedMember.node.frontmatter.department + "의 " + matchedMember.node.frontmatter.duty : ""
    }

    return (
        <>
            <div className="tech-wrap">
                <div className="container">
                    <div className="row info">
                        <dl className="col-sm-4 col-md-6 col-lg-6 slogan">
                            <dt>우리의 기가막힌 노하우를 보여드릴게요</dt>
                            <dd>모두의 가치를 더하기 위해 우리는 매일 소통하고 공유한 하나의 경험을 서로 나누어 더 많은 경험을 얻어가요.</dd>
                            <dd>
                                <a href="./tech.html">더 많이 보고 싶어요
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 80" fill="none">
                                            <path d="M10 5H73C74.1046 5 75 5.89543 75 7V70" stroke="currentColor" strokeWidth="10" stroke-linecap="round"/>
                                            <path d="M6 75L55.5726 24.492C56.8271 23.2139 59 24.1021 59 25.893V64" stroke="currentColor" strokeWidth="10" stroke-linecap="round"/>
                                        </svg>
                                    </span>
                                </a>
                            </dd>
                        </dl>
                        <ul className="col-sm-4 col-md-6 col-lg-6 thum">
                            <li><img src="https://recruit.navercorp.com/share/tmplat/naver/img/slide/people/img_slide2_9.jpg" alt="" /></li>
                            <li><img src="https://recruit.navercorp.com/share/tmplat/naver/img/people/bg_people_07.jpg" alt="" /></li>
                            <li><img src="https://recruit.navercorp.com/share/tmplat/naver/img/culture/img_06_01.jpg" alt="" /></li>
                        </ul>
                    </div>
                </div>
                
                <div className="list">
                    <ul>
                        {data.techs.edges.map(({ node }) => (
                        <li>
                            <a href="./view.html">
                                <div className="card-top">
                                    <div className="tag">
                                        {node.frontmatter.category}
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 80" fill="none">
                                                <path d="M10 5H73C74.1046 5 75 5.89543 75 7V70" stroke="currentColor" strokeWidth="10" stroke-linecap="round"/>
                                                <path d="M6 75L55.5726 24.492C56.8271 23.2139 59 24.1021 59 25.893V64" stroke="currentColor" strokeWidth="10" stroke-linecap="round"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <dl>
                                        <dt>{node.frontmatter.title}</dt>
                                        <dd>{node.excerpt}</dd>
                                    </dl>
                                </div>
                                <div className="card-bot">
                                    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMjlfODEg%2FMDAxNjc0OTk5NzQxODI3.bsY8Pp096lvyHW58LhZN75yFCzKee2-uP0Xgi2vZjX8g.pGWyDF1uYPZltBU6lsY2c5STziIOiH5SDn0lKYvN-LAg.JPEG.gmldud3540%2FIMG_6904.jpg&type=a340" alt="" />
                                    <span>
                                        <p>{node.frontmatter.writer}</p>
                                        <p>{getUser(node.frontmatter.writer)}</p>
                                    </span>
                                </div>
                            </a>
                        </li>
                        )
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
  }
  
  export default Tech