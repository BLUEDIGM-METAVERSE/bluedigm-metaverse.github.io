import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import styled from '@emotion/styled'

// import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const SubWrapper = styled.main``

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const header = document.querySelector('header');
      if (header) {
        if (scroll > 50) {
          header.style.backdropFilter = 'blur(5px)';
          header.style.height = '60px'
          header.style.backgroundColor = 'rgba(255, 210, 39, 0.5)'
        } else {
          header.style.backdropFilter = 'blur(0px)';
          header.style.height = '80px'
          header.style.backgroundColor = 'rgba(255, 210, 39, 1)'
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
      <SubWrapper>{children}</SubWrapper>
      <Footer />
    </>
  )
}

export default Layout
