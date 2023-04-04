import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Header from './header'
import GlobalStyle from './global-style'

type LayoutProps = {
  children: ReactNode
  layoutData: {
    headerData: {
      logoImage: IGatsbyImageData
      iconSearch: IGatsbyImageData
    }
  }
}

const MainWrapper = styled.main``

const Layout: FunctionComponent<LayoutProps> = ({ children, layoutData }) => {
  return (
    <>
      <GlobalStyle />
      <Header headerData={layoutData.headerData} />
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

export default Layout
