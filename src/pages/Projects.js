import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Text from '../components/Text'
import Box from '../components/Box'

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
            // duration: p.gsx$duration.$t,
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
              <Box
                key={ i }
                id={ id }
                marginBottom={ 3 }
              >
                <Text
                  as={ Link }
                  to={ p.href }
                  target='_blank'
                  fontSize={ 2 }
                  fontWeight={ 700 }
                >
                  { p.title }
                </Text>
                <Box marginBottom={ 1 }>
                  <Text fontWeight={ 700 }>{ p.position }</Text>
                </Box>
                <Text
                  as='p'
                  marginBottom={ 1 }
                >
                  { p.description }
                </Text>
              </Box>
            )
          })
        }
      </div>
    );
  }
}

export default Projects;
