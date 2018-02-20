import React, { Component } from 'react';
import styled from 'styled-components';

class Count extends Component {
  render() {
    return (
      <a { ...this.props }>
        { ("0" + this.props.value).slice(-2) }
      </a>
    )
  }
}

export default styled(Count)`
  font-size: 1.5em;
  border-bottom: 4px solid peachpuff;
  text-decoration: none;
  margin-top: 6px;
  position: absolute;
  margin-left: -60px;
`

// margin coordinated with ContentBlock
