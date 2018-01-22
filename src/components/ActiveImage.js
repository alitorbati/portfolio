import React, { Component } from 'react';
import styled from 'styled-components';

class ActiveImage extends Component {
  render() {
    return (
      <img
        { ...this.props }
        src={ this.props.image }
        alt={ this.props.image }
      />
    )
  }
}

export default styled(ActiveImage)`
  display: ${ props => props.image === '' ? 'none' : 'block' };
  position: absolute;
  left: ${ props => props.x + 'px' };
  top: ${ props => props.y + 'px' };
  pointer-events: none;
  border: 10px solid #73ffaa;
  width: 70vw;
  max-width: 900px;
  z-index: -1;
  transition: all 0.3s;
`
