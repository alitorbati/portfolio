import React, { Component } from 'react';
import styled from 'styled-components';

function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function intToARGB(i){
    return ((i>>24)&0xFF).toString(16) +
           ((i>>16)&0xFF).toString(16) +
           ((i>>8)&0xFF).toString(16)
          //  (i&0xFF).toString(16); // alpha
}

class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2
        { ...this.props }
        // style={{ color: `#${ intToARGB(hashCode(this.props.children)) }`}}
      />
    )
  }
}

export default styled(Title)`
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 4em;
  color: #73ffaa;
  line-height: 1;
  margin-bottom: -15px;
  position: sticky;
  top: 0;
`
