import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import StickySection from '../components/StickySection';
import Title from '../components/Title'
import Contribution from '../components/Contribution';
import Url from '../components/Url';

const Meta = styled.div`
  float: left;
  width: 30%;
`;

const Desc = styled.div`
  float: right;
  width: 70%;
  padding-left: 10px;
`

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    const url = 'https://spreadsheets.google.com/feeds/list/12sERGaYvU1ZUsEOnG11LgR8ZQVtLW3zn2Kv8yOOBPyg/od6/public/values?alt=json'
    axios
      .get(url)
      .then(res => {
        const projects = res.data.feed.entry.map(p => (
          {
            title: p.gsx$title.$t,
            href: p.gsx$href.$t,
            position: p.gsx$position.$t,
            duration: p.gsx$duration.$t,
            description: p.gsx$description.$t,
          }
        ));
        this.setState({ projects });
      });
  }

  render() {
    return (
      <div className='Projects'>
        {
          this.state.projects.map((p, i) => (
            <StickySection key={ i }>
              <Meta>
                <Title>{ p.title }</Title>
              </Meta>
              <Desc>
                <div>
                  { p.description }
                  <Url href={ p.href } target='_blank'>{ p.href }</Url>
                </div>
                <Contribution alt={ true }>{ p.position }</Contribution>
                <div>{ p.duration }</div>
              </Desc>
            </StickySection>
          ))
        }
      </div>
    );
  }
}

export default Projects;
