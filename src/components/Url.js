import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Url = (props) => {
  return props.href ? <a { ...props } /> : <Link { ...props } />
}

export default styled(Url)`
  color: black;
  &:hover {
    ${'' /* cursor: url('${handImage}'), auto !important; */}
  }
`
