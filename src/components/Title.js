import React, { Component } from 'react';
import styled from 'styled-components';

class Title extends Component {
  render() {
    return (
      <h2 { ...this.props }>
        { this.props.children }
      </h2>
    )
  }
}

export default styled(Title)`
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 4em;
  color: #73ffaa;
  line-height: 1;
  margin-bottom: 5px;
  position: sticky;
  top: 0;
  z-index: -1;
`
