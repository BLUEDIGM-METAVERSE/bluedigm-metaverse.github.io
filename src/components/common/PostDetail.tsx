import React, { FunctionComponent } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from 'components/common/SubLayout'
import Image from '../../components/common/Image';
import { useMembersQuery } from '../../queries/member.query'
import { usePagingQuery } from '../../queries/paging.query'
import { getUser } from '../../utils/commonFunctions'

interface PostDetailProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          html: string
          frontmatter: {
            category: string
            title: string
            date: string
            writer: string
            tags: string[]
          }
        }
      }[]
    },
    pageContext: any
  }
}

const PostDetail: FunctionComponent<PostDetailProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext
}) {
  const {
    node: {
      html,
      frontmatter: { category, title, date, writer, tags },
    },
  } = edges[0]

  const members = useMembersQuery();
  const currentSlug = pageContext.slug;
  
  let listPath = "/";
  let postTitle = '';
  if (typeof window !== 'undefined') {
    if (window.location.pathname.includes("/culture/")) {
      listPath = "/culture/";
      postTitle = '우리의 이야기를<br />문화로 만들어요';
    } else if (window.location.pathname.includes("/tech/")) {
      listPath = "/tech/";
      postTitle = '우리의 기술 경험을 공유해요';
    } else if (window.location.pathname.includes("/experience/")) {
      listPath = "/experience/";
      postTitle = '좋은 경험은<br />나눌수록 커져요';
    }
  }

  const { previousSlug, nextSlug } = usePagingQuery(currentSlug, listPath);

  return (
    <Layout>
      <div className="sub-keyvisual"></div>
          <div className="container">
              <div className="row">
                  <div className="col-sm-4 col-md-12 col-lg-12 sub-slogan" dangerouslySetInnerHTML={{ __html: postTitle }}>
                  </div>
                  {/* 경험 리스트 */}
                  <div className="row">
                      <dl className="col-sm-4 col-md-12 col-lg-12 view-wrap">
                          <dt>{title}</dt>
                          {/* tech 상세에서만 사용 */}
                          <dd>
                              <div className="view-info">
                                  <div className="profile">
                                      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMjlfODEg%2FMDAxNjc0OTk5NzQxODI3.bsY8Pp096lvyHW58LhZN75yFCzKee2-uP0Xgi2vZjX8g.pGWyDF1uYPZltBU6lsY2c5STziIOiH5SDn0lKYvN-LAg.JPEG.gmldud3540%2FIMG_6904.jpg&type=a340" alt="" />
                                      <span>
                                          <p>{writer}</p>
                                          <p>{getUser(writer, members)}</p>
                                      </span>
                                  </div>
                                  <span className="data">{date}</span>
                              </div>
                          </dd>
                          {/* //tech 상세에서만 사용 */}
                          <dd>
                              {/* mark down 영역 */}
                              <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }}></div>
                              {/* //mark down 영역 */}
                          </dd>
                          <dd className="view-btn-wrap">
                              <Link to={previousSlug} className={previousSlug ? '' : 'disabled'}>
                                  <span>
                                      <Image path="/images/pre-arrow.svg" alt="이전" />
                                  </span>
                                  이전
                              </Link>
                              <Link to={listPath}>목록</Link>
                              <Link to={nextSlug} className={nextSlug ? '' : 'disabled'}>
                                  다음
                                  <span>
                                      <Image path="/images/next-arrow.svg" alt="다음" />
                                  </span>
                              </Link>
                          </dd>
                      </dl>
                  </div>
              </div>
          </div>
    </Layout>
  )
}

export default PostDetail

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            category
            title
            date(formatString: "YYYY.MM.DD.")
            writer
            tags
          }
        }
      }
    }
  }
`
