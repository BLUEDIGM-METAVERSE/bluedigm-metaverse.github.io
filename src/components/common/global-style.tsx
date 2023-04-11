import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: 'Spoqa Han Sans Neo';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol,
  li {
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
  }

  button,
  input,
  textarea {
    font-size: 14px;
  }

  button:focus,
  button:active,
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    outline: none;
    box-shadow: none;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
