import React, { Component } from 'react';
import styled from 'styled-components';

const Contribution = styled.div`
  padding: 5px 15px;
  background: ${props => props.alt ? '#ffdbfd' : '#e3ffe2'};
  color: ${props => props.alt ? '#ff84fb' : '#6adc65'};
  display: inline-block;
  margin: 5px 0;
`

export default Contribution;
