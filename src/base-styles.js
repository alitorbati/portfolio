import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

import cursorImage from './images/cursor.png'
import handImage from './images/hand.png'

const baseStyles = () => injectGlobal`
  ${reset}

  body {
    font-family: 'Roboto Mono', monospace;
    ${'' /* color: blue; */}
    font-size: 14px;
    outline: 0;
    line-height: 1.5;
  }

  #body {
    min-height: 100vh;
    cursor: url('${cursorImage}'), auto !important;
  }

  a {
    color: blue;
  }

  a:hover {
    color: palevioletred;
    cursor: url('${handImage}'), auto !important;
  }
`

export default baseStyles
