import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  padding: 40px 0;
  text-align: center;
  font-size: 12px;
  color: #bfbfbf;
`

const Footer: FunctionComponent = function () {
  return <FooterWrapper>© 2023 Metaverse Team</FooterWrapper>
}

export default Footer
