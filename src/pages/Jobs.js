import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import css from '@styled-system/css';
import Text from '../components/Text';
import Box from '../components/Box';

const Datedivider = styled.span`
  display: inline-block;
  width: 100px;
  height: 1px;
  position: relative;
  top: -4px;
  ${
    css({
      backgroundColor: 'accent',
      marginX: 1,
    })
  }
`

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    const url = 'https://spreadsheets.google.com/feeds/list/1VnD8RJtceCIFPvWzrCOcQCY5eUY5_FO1yOwvGIpCXe8/od6/public/values?alt=json'
    axios
      .get(url)
      .then(res => {
        const jobs = res.data.feed.entry.map(x => (
          {
            company: x.gsx$company.$t,
            position: x.gsx$position.$t,
            href: x.gsx$href.$t,
            startdate: x.gsx$startdate.$t,
            enddate: x.gsx$enddate.$t,
            location: x.gsx$location.$t,
            description: x.gsx$description.$t,
            show: x.gsx$show.$t.toLowerCase() !== 'false',
            slug: `${x.gsx$company.$t.toLowerCase().replace(' ', '-')}`
          }
        ));
        this.setState({ jobs });
      });
  }

  // position: sticky;
  // top: 0;

  render() {
    return (
      <div className='Jobs'>
        {
          this.state.jobs
            .filter(x => x.show)
            .map(x => (
              <Box
                key={ x.slug }
                id={ x.slug }
                marginBottom={ 3 }
              >
                <Text
                  as={ Link }
                  to={ x.href }
                  target='_blank'
                  fontSize={ 2 }
                  fontWeight={ 700 }
                  // this isn't working for now
                  // css={`
                  //   position: sticky;
                  //   top: 0;
                  // `}
                >
                  { x.company }
                </Text>
                <Box marginBottom={ 1 }>
                  <Text fontWeight={ 700 }>
                    <Text marginRight={ 3 }>{ x.position }</Text>
                    <Text>{ x.startdate }</Text>
                    <Datedivider />
                    <Text>{ x.enddate }</Text>
                  </Text>
                </Box>
                <Text as='p'>
                  { x.description }
                </Text>
              </Box>
            )
          )
        }
      </div>
    );
  }
}

export default Jobs;
