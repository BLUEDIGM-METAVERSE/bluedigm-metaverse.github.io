import React, { FunctionComponent } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from 'components/common/SubLayout'
import Image from '../../components/common/Image';
import { useMembersQuery } from '../../queries/member.query'
import { usePagingQuery } from '../../queries/paging.query'
import { getUser, getImage } from '../../utils/commonFunctions'

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
                                      <img src={getImage(writer, members)} alt={writer} />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200" fill="none"><path d="M143 189L56.0259 102.026C55.2448 101.245 55.2448 99.9785 56.0259 99.1974L143 12.2233" stroke="currentColor" stroke-width="20" stroke-linecap="round"></path></svg>
                                  </span>
                                  최근
                              </Link>
                              <Link to={listPath}>목록</Link>
                              <Link to={nextSlug} className={nextSlug ? '' : 'disabled'}>
                                  예전
                                  <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200" fill="none"><path d="M143 189L56.0259 102.026C55.2448 101.245 55.2448 99.9785 56.0259 99.1974L143 12.2233" stroke="currentColor" stroke-width="20" stroke-linecap="round"></path></svg>
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
