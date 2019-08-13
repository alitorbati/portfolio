import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}

  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }


  body {
    font-size: 16px;
    outline: 0;
    line-height: 1.5;
  }

  #body {
    min-height: 100vh;
    ${'' /* cursor: url('${cursorImage}'), auto !important; */}
  }
`

export default baseStyles
