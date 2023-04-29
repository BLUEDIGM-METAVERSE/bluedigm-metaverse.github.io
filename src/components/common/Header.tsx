import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Logo from '../../assets/logo.svg'
import SearchIcon from '../../assets/icons/search.svg'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 24px;
`

const LogoWrapper = styled.h1`
  a {
    display: block;
    width: 194px;
    height: 28px;
  }
`

const GlobalNavWrapper = styled.div`
  display: flex;
  align-items: center;
`

const NavLinks = styled.nav`
  a {
    margin-right: 32px;
    font-color: #4d4d4d;
    font-size: 14px;
    font-weight: 700;
  }
`

const NavButtonWrapper = styled.div`
  width: 24px;
  height: 24px;

  svg {
    width: 24px;
    height: 24px;
  }
`

const Header: FunctionComponent = function () {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to="/">
          <Logo />
        </Link>
      </LogoWrapper>
      <GlobalNavWrapper>
        <NavLinks>
          <Link to="/projects">프로젝트</Link>
          <Link to="/culture">문화</Link>
          <Link to="/tech">기술</Link>
        </NavLinks>
        <NavButtonWrapper>
          <SearchIcon />
        </NavButtonWrapper>
      </GlobalNavWrapper>
    </HeaderWrapper>
  )
}

export default Header
