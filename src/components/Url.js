import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Url = (props) => (
  <span>
    <span
      role='img'
      aria-label='point right'
    >
      👉
    </span>&nbsp;{
      props.href
        ? <a { ...props }>{ props.href }</a>
        : <Link { ...props }>{ props.to }</Link>
    }
  </span>
);

export default styled(Url)``
