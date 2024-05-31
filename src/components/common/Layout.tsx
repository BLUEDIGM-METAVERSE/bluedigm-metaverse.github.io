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
        if (scroll > 50) {
          header.style.backdropFilter = 'blur(5px)';
          header.style.height = '60px'
          header.style.backgroundColor = '#ffffff90'
        } else {
          header.style.backdropFilter = 'blur(0px)';
          header.style.height = '100px'
          header.style.backgroundColor = '#ffffff00'
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
