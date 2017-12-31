import React, { Component } from 'react';

import Title from '../components/Title'
import Url from '../components/Url'
import ActiveImage from '../components/ActiveImage'

import image_KoK1iG7JNnQxyEt92 from '../images/photography/KoK1iG7JNnQxyEt92.jpg'
import image_75QJV36brgWUrzv93 from '../images/photography/75QJV36brgWUrzv93.jpg'
import image_WG5ydYC85BVZUgnz2 from '../images/photography/WG5ydYC85BVZUgnz2.jpg'
import image_5s8krtuAk0sTnTeW2 from '../images/photography/5s8krtuAk0sTnTeW2.jpg'
import image_GstoKugKVzhkMkE02 from '../images/photography/GstoKugKVzhkMkE02.jpg'

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

  setActiveImage (code, event) {
    const newState = {
      ...this.props.state,
      activeImage: code,
      x: event.clientX,
      y: event.clientY,
    }
    this.setState(newState)
  }

  render () {

    return (
      <div className='Photography'>
        <Title>Click clack</Title>
        <ul>
          {
            Object.keys(this.albums).map(albumCode => {
              const link = `https://photos.app.goo.gl/${albumCode}`
              return (
                <li key={ albumCode }>
                  <Url
                    href={ link }
                    target='_blank'
                    onMouseOver={ (event) => this.setActiveImage(this.albums[albumCode], event) }
                  >
                    { link }
                  </Url>
                </li>
              )
            })
          }
        </ul>
        <ActiveImage
          image={ this.state.activeImage }
          x={ this.state.x }
          y={ this.state.y }
        />
      </div>
    );
  }
}

export default Photography;
