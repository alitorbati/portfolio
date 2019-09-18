import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import css from '@styled-system/css';
import Text from '../components/Text';
import Box from '../components/Box';
import CleanSheetData from '../components/CleanSheetData'

const Datedivider = styled.span`
  display: inline-block;
  width: 100px;
  height: 1px;
  position: relative;
  top: -4px;
  ${
    css({
      backgroundColor: 'foreground',
      marginX: 1,
    })
  }
`

class Jobs extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    const url = 'https://spreadsheets.google.com/feeds/list/1VnD8RJtceCIFPvWzrCOcQCY5eUY5_FO1yOwvGIpCXe8/od6/public/values?alt=json'
    axios
      .get(url)
      .then(res => {
        this.setState({ data: res.data.feed.entry })
      });
  }

  render() {
    if (!this.state.data) return null

    return (
      <CleanSheetData data={ this.state.data }>
        {
          ({ data }) => (
            data
              .filter(x => x.show.toLowerCase() === 'true')
              .map((x, i) => (
                <Box key={ i } marginBottom={ 3 }>
                  <Text
                    as={ Link }
                    to={ x.href }
                    target='_blank'
                    fontSize={ [ 1, 2 ] }
                    fontWeight={ 700 }
                    style={{ position: 'sticky', top: 0 }}
                  >
                    { x.company }
                  </Text>
                  <Box marginBottom={ 1 }>
                    <Text fontWeight={ 700 } marginRight={ 3 }>{ x.position }</Text>
                    <Box>
                      <Text>{ x.startdate }</Text>
                      <Datedivider />
                      <Text>{ x.enddate }</Text>
                    </Box>
                  </Box>
                  <Text as='p'>
                    { x.description }
                  </Text>
                </Box>
              ))
          )
        }
      </CleanSheetData>
    )
  }
}

export default Jobs
