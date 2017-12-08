import React from 'react';
import styled from 'styled-components';

const Home = (props) => (
  <div { ...props }>
    <span
      role='img'
      aria-label='point up'
    >
      ☝️
    </span>
  </div>
);

export default styled(Home)`
  font-size: 3em;
`;
