import React, { FunctionComponent, useEffect } from 'react'
import Image from '../../components/common/Image'
import { Link } from 'gatsby'

const Header: FunctionComponent = function () {    
    function pathIncludes(word: string) {
      if (typeof window !== 'undefined') {
        return window.location.href.includes(word) ? 'on' : '';
      }
      return '';
    }

    useEffect(() => {
      const handleMenuOpenClick = () => {
        document.querySelector('.menuwrap').classList.add('on');
      };
  
      const handleMenuCloseClick = () => {
        document.querySelector('.menuwrap').classList.remove('on');
      };
  
      document.querySelector(".menu-open").addEventListener("click", handleMenuOpenClick);
      document.querySelector(".menu-close").addEventListener("click", handleMenuCloseClick);
  
      // Clean-up function
      return () => {
        document.querySelector(".menu-open").removeEventListener("click", handleMenuOpenClick);
        document.querySelector(".menu-close").removeEventListener("click", handleMenuCloseClick);
      };
    }, []);

    return (
    <>
      <header>
        <h1>
          <a href="/">
            <Image path="/images/logo.svg" alt="metaverse team" />
          </a>
        </h1>
        <nav>
            <h2 className="visually-hidden">메뉴</h2>
            <ul>
                <li><Link to="/culture" className={pathIncludes('culture')} >문화 이야기</Link></li>
                <li><Link to="/tech" className={pathIncludes('tech')} >기술 이야기</Link></li>
                <li><Link to="/experience" className={pathIncludes('experience')} >경험 저장소</Link></li>
                {/*<li><Link to="/member" className={pathIncludes('member')} >팀원 소개</Link></li>*/}
            </ul>
        </nav>
        <div className="search-open"></div>
          {/*<button className="search-open" type="button" aria-label="검색창 열기 버튼">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_553_21096)">
                  <circle cx="9.6" cy="9.6" r="8.4" stroke="currentColor" strokeWidth="2.4"/>
                  <path d="M17.16 17.16L22.7179 22.7179" stroke="currentColor" strokeWidth="2.4" stroke-linecap="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_553_21096">
                  <rect width="100%" height="100%" fill="none"/>
                  </clipPath>
                  </defs>
              </svg>
            </button>*/}
          <button className="sm-only menu-open" type="button" aria-label="메뉴 열기 버튼">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                  <path d="M1.20001 12.12H22.8" stroke="currentColor" strokeWidth="2.4" stroke-linecap="round"/>
                  <path d="M1.20001 4.43994H22.8" stroke="currentColor" strokeWidth="2.4" stroke-linecap="round"/>
                  <path d="M1.20001 19.8H22.8" stroke="currentColor" strokeWidth="2.4" stroke-linecap="round"/>
              </svg>
          </button>
      </header>
      
      {/*mobile*/}
      <div className="menuwrap">
          <button className="sm-only menu-close" type="button" aria-label="메뉴 닫기 버튼">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200" fill="none">
                  <path d="M22 22L177.563 177.563" stroke="currentColor" strokeWidth="20" stroke-linecap="round"/>
                  <path d="M178 22L22.4365 177.563" stroke="currentColor" strokeWidth="20" stroke-linecap="round"/>
              </svg>
          </button>
          <nav>
              <ul>
                  <li><a href="/culture">문화 이야기</a></li>
                  <li><a href="/tech">기술 이야기</a></li>
                  <li><a href="/experience">경험 저장소</a></li>
                  <li><a href="/member">팀원 소개</a></li>
              </ul>            
          </nav>
      </div>
    </>
  )
}

export default Header
