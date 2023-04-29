import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'

import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const MainWrapper = styled.main``

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  )
}

export default Layout
