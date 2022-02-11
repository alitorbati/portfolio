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
        const jobs = res.data.feed.entry.map(e => (
          {
            company: e.gsx$company.$t,
            position: e.gsx$position.$t,
            href: e.gsx$href.$t,
            startdate: e.gsx$startdate.$t,
            enddate: e.gsx$enddate.$t,
            location: e.gsx$location.$t,
            description: e.gsx$description.$t,
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
          this.state.jobs.map((e, i) => {
            const id = `${e.company.toLowerCase().replace(' ', '-')}`
            return (
              <Box
                key={ i }
                id={ id }
                marginBottom={ 3 }
              >
                <Text
                  as={ Link }
                  to={ e.href }
                  target='_blank'
                  fontSize={ 2 }
                  fontWeight={ 700 }
                  // this isn't working for now
                  // css={`
                  //   position: sticky;
                  //   top: 0;
                  // `}
                >
                  { e.company }
                </Text>
                <Box marginBottom={ 1 }>
                  <Text fontWeight={ 700 }>
                    <Text marginRight={ 3 }>{ e.position }</Text>
                    <Text>{ e.startdate }</Text>
                    <Datedivider />
                    <Text>{ e.enddate }</Text>
                  </Text>
                </Box>
                <Text as='p'>
                  { e.description }
                </Text>
              </Box>
            )
          })
        }
      </div>
    );
  }
}

export default Jobs;
