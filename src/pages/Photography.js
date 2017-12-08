import React, { Component } from 'react';

import Title from '../components/Title'
import Url from '../components/Url'

class Photography extends Component {
  render() {
    const albumLinks = [
      'https://photos.app.goo.gl/KoK1iG7JNnQxyEt92',
      'https://photos.app.goo.gl/75QJV36brgWUrzv93',
      'https://photos.app.goo.gl/WG5ydYC85BVZUgnz2',
      'https://photos.app.goo.gl/5s8krtuAk0sTnTeW2',
      'https://photos.app.goo.gl/GstoKugKVzhkMkE02',
    ]

    return (
      <div className='Photography'>
        <Title>Click clack</Title>
        <ul>
          {
            albumLinks.map(link => (
              <li key={ link }>
                <Url
                  href={ link }
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

export default Photography;
