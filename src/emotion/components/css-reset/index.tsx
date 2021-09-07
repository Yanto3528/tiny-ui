import { Global, css } from '@emotion/react'

const globalStyles = css`
  *,
  *::before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.4rem;
    font-family: inherit, sans-serif;
  }
`

export const CSSReset = () => {
  return <Global styles={globalStyles} />
}
