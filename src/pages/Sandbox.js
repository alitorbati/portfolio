import React, { Component } from 'react';
import styled from 'styled-components';
import Url from '../components/Url'

const Sandbox = (props) => {
  const boxes = [
    'variable-font',
  ]
  return (
    <div className='Projects'>
      {
        props.location.hash
          ? <Url to={ `${props.match.url}`}>see all</Url>
          : (
            <div>
              {
                boxes.map(box => (
                  <Url to={ `${props.match.url}#variable-font`}>{ box }</Url>
                ))
              }
            </div>
          )
      }
    </div>
  )
}

export default Sandbox;
