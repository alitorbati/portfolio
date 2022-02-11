import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                <Link to={ link } target='_blank'>{ link }</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Contact;
