import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Logo from '../assets/logo.svg'
import IconSearch from '../assets/icons/search.svg'

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
          <Link to="/posts">끝 없는 기술 이야기</Link>
          <Link to="/projects">업무의 연속</Link>
        </NavLinks>
        <NavButtonWrapper>
          <IconSearch />
        </NavButtonWrapper>
      </GlobalNavWrapper>
    </HeaderWrapper>
  )
}

export default Header
