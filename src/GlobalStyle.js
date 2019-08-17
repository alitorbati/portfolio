import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import css from '@styled-system/css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  @import url('https://rsms.me/inter/inter.css');
  html {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    ${css({
      backgroundColor: 'background',
      color: 'foreground',
    })}
  }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  body {
    outline: 0;
    line-height: 1.5;
    min-height: 100vh;
    ${'' /* cursor: url('${cursorImage}'), auto !important; */}
  }

  a {
    ${css({ color: 'foreground' })}
  }
`

export default GlobalStyle
