import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Section from '../components/Section';
import Title from '../components/Title'
import Contribution from '../components/Contribution';
import Url from '../components/Url';

const Datedivider = styled.span`
  display: inline-block;
  width: 100px;
  height: 1px;
  background: #dedede;
  position: relative;
  top: -4px;
  margin-left: 10px;
  margin-right: 10px;
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

  render() {
    return (
      <div className='Jobs'>
        {
          this.state.jobs.map((e, i) => {
            const id = `${e.company.toLowerCase().replace(' ', '-')}`
            return (
              <Section key={ i } id={ id }>
                <Title>
                  <Url to={ e.href } target='_blank'>
                    { e.company }
                  </Url>
                </Title>
                <p>
                  { e.description }
                </p>
                <br />
                <Contribution>{ e.position }</Contribution>
                <div>
                  <span>{ e.startdate }</span>
                  <Datedivider />
                  <span>{ e.enddate }</span>
                </div>
              </Section>
            )
          })
        }
      </div>
    );
  }
}

export default Jobs;
