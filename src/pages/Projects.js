import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Text from "../components/Text";
import Box from "../components/Box";
import CleanSheetData from "../components/CleanSheetData";
// import kineticType from '../images/kinetic-type.gif'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    const url =
      "https://spreadsheets.google.com/feeds/list/12sERGaYvU1ZUsEOnG11LgR8ZQVtLW3zn2Kv8yOOBPyg/od6/public/values?alt=json";
    axios.get(url).then((res) => {
      this.setState({ data: res.data.feed.entry });
    });
  }

  render() {
    if (!this.state.data) return null;

    return (
      <CleanSheetData data={this.state.data}>
        {({ data }) =>
          data
            .filter((x) => x.show.toLowerCase() === "true")
            .map((x, i) => (
              <Box key={i} marginBottom={3}>
                <Text
                  as={Link}
                  to={x.href}
                  target="_blank"
                  fontSize={[1, 2]}
                  fontWeight={700}
                  style={{ position: "sticky", top: 0 }}
                >
                  {x.title}
                </Text>
                {/*
                  <Box>
                    <img src={ kineticType }/>
                  </Box>
                  */}
                <Box marginBottom={1}>
                  <Text fontWeight={700}>{x.position}</Text>
                </Box>
                <Text as="p" marginBottom={1}>
                  {x.description}
                </Text>
              </Box>
            ))
        }
      </CleanSheetData>
    );
  }
}

export default Projects;
