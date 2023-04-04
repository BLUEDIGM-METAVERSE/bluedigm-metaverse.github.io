import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type HeaderProps = {
  headerData: {
    logoImage: IGatsbyImageData
    iconSearch: IGatsbyImageData
  }
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 24px;
  background-color: #ead8ff;
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 32px;
    font-weight: 700;
    color: #4d4d4d;
    text-decoration: none;
  }
`

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`

const Header: FunctionComponent<HeaderProps> = function ({ headerData }) {
  return (
    <HeaderWrapper>
      <h1>
        <Link to="/">
          <GatsbyImage image={headerData.logoImage} alt="Logo" />
        </Link>
      </h1>
      <NavLinks>
        <Link to="/">끝 없는 기술 이야기</Link>
        <Link to="/">업무의 연속</Link>
        <SearchButton>
          <GatsbyImage image={headerData.iconSearch} alt="Search icon" />
        </SearchButton>
      </NavLinks>
    </HeaderWrapper>
  )
}

export default Header
