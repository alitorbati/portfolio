import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../components/Title'
import Url from '../components/Url'
import ActiveImage from '../components/ActiveImage'
import image_KoK1iG7JNnQxyEt92 from '../images/photography/KoK1iG7JNnQxyEt92.jpg'
import image_75QJV36brgWUrzv93 from '../images/photography/75QJV36brgWUrzv93.jpg'
import image_WG5ydYC85BVZUgnz2 from '../images/photography/WG5ydYC85BVZUgnz2.jpg'
import image_5s8krtuAk0sTnTeW2 from '../images/photography/5s8krtuAk0sTnTeW2.jpg'
import image_GstoKugKVzhkMkE02 from '../images/photography/GstoKugKVzhkMkE02.jpg'

const ImageUl = styled.ul`
  margin-top: 40px;
`

class Photography extends Component {
  constructor () {
    super()
    this.state = {
      activeImage: '',
    }
    this.albums = {
      'KoK1iG7JNnQxyEt92': image_KoK1iG7JNnQxyEt92,
      '75QJV36brgWUrzv93': image_75QJV36brgWUrzv93,
      'WG5ydYC85BVZUgnz2': image_WG5ydYC85BVZUgnz2,
      '5s8krtuAk0sTnTeW2': image_5s8krtuAk0sTnTeW2,
      'GstoKugKVzhkMkE02': image_GstoKugKVzhkMkE02,
    }
  }

  render () {

    return (
      <div className='Photography'>
        <Title>Click clack</Title>
        <ImageUl>
          {
            Object.keys(this.albums).map(albumCode => {
              const link = `https://photos.app.goo.gl/${albumCode}`
              return (
                <li key={ albumCode }>
                  <ActiveImage
                    href={ link }
                    image={ this.albums[albumCode] }
                    code={ albumCode }
                  />
                </li>
              )
            })
          }
        </ImageUl>
      </div>
    );
  }
}

export default Photography;
