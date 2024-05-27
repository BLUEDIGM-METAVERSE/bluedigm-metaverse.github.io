import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import styled from '@emotion/styled'

// import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const MainWrapper = styled.article``

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const header = document.querySelector('header');
      if (header) {
        if (scroll > 100) {
          header.style.backgroundColor = '#fff';
        } else {
          header.style.backgroundColor = '#ffffff00';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <GlobalStyle /> */}
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  )
}

export default Layout
