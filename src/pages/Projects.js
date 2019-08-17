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
        const projects = res.data.feed.entry.map(x => (
          {
            title: x.gsx$title.$t,
            href: x.gsx$href.$t,
            position: x.gsx$position.$t,
            // duration: x.gsx$duration.$t,
            description: x.gsx$description.$t,
            show: x.gsx$show.$t.toLowerCase() !== 'false',
            slug: `${x.gsx$title.$t.toLowerCase().replace(' ', '-')}`
          }
        ));
        this.setState({ projects });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.projects
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
                >
                  { x.title }
                </Text>
                <Box marginBottom={ 1 }>
                  <Text fontWeight={ 700 }>{ x.position }</Text>
                </Box>
                <Text
                  as='p'
                  marginBottom={ 1 }
                >
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

export default Projects;
