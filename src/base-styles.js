import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}

  body {
    font-family: 'Roboto Mono', monospace;
    ${'' /* color: blue; */}
    font-size: 14px;
    outline: 0;
    line-height: 1.5;
  }

  a {
    color: blue;
  }

  a:hover {
    color: palevioletred;
  }
`

export default baseStyles
