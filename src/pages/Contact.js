import React, { Component } from 'react';

import Title from '../components/Title'
import Url from '../components/Url'

class Contact extends Component {
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
      <div className='Contact'>
        <ul>
          {
            socialLinks.map(link => (
              <li key={ link }>
                <Url
                  href={ link }
                  target='_blank'
                />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Contact;
