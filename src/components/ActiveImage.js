import React, { Component } from 'react';
import styled from 'styled-components';
import Url from '../components/Url'

class ActiveImage extends Component {
  render() {
    return (
      <div { ...this.props }>
        <ActiveImageImg
          src={ this.props.image }
          alt={ this.props.image }
        />
        <ActiveImageText>
          <ActiveImageTitle>
            { this.props.code }
          </ActiveImageTitle>

          <Url
            href={ this.props.href }
            target='_blank'
          />
        </ActiveImageText>
      </div>
    )
  }
}

const ActiveImageImg = styled.img`
  width: 100%;
  margin-bottom: -70px;
`

const ActiveImageText = styled.div`
  position: sticky;
  padding: 10px 25px;
  background-color: #fff;
  display: inline-block;
  bottom: 30px;
  margin-left: 30px;
`

const ActiveImageTitle = styled.div`
  font-size: 3em;
  font-style: italic;
`

export default styled(ActiveImage)`
  position: relative;
  margin-bottom: 30px;
`
