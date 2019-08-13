import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Section from '../components/Section';
import Title from '../components/Title'
import Contribution from '../components/Contribution';
import Url from '../components/Url';

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
      <div>
        {
          this.state.projects.map((p, i) => {
            const id = `${p.title.toLowerCase().replace(' ', '-')}`
            return (
              <Section key={ i } id={ id }>
                <Title>
                  <Url to={ p.href } target='_blank'>
                    { p.title }
                  </Url>
                </Title>
                <p>
                  { p.description }
                </p>
                <br />
                <Contribution>{ p.position }</Contribution>
                <div>{ p.duration }</div>
              </Section>
            )
          })
        }
      </div>
    );
  }
}

export default Projects;
