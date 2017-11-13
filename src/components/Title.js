import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 2em;
  color: ${props => props.alt ? '#ffe1b1' : '#73ffaa'};
`;

export default Title;
