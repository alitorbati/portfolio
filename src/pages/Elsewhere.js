import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Title from '../components/Title'
import Url from '../components/Url'

class Elsewhere extends Component {
  render() {
    const socialLinks = [
      'mailto:ali.torbati@gmail.com',
      'http://github.com/alitorbati',
      'http://behance.net/alitorbati',
      'http://twitter.com/alitorbati',
      'http://instagram.com/alitorbati',
      'http://linkedin.com/in/alitorbati',
    ]

    return (
      <div className='Elsewhere'>
        <Title>Cash me ousside</Title>
        <ul>
          {
            socialLinks.map(link => (
              <li>
                <Url
                  href={ link }
                  key={ link }
                  target='_blank'
                >
                  { link }
                </Url>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Elsewhere;