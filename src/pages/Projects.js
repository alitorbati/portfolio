import * as React from "react";
import Text from "../components/Text";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";

const Projects = (props) => {
  const { useState, useEffect } = React;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      // https://benborgers.com/posts/google-sheets-json
      "https://opensheet.elk.sh/12sERGaYvU1ZUsEOnG11LgR8ZQVtLW3zn2Kv8yOOBPyg/Sheet1"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setProjects(result);
        },
        (error) => {
          setProjects([]);
        }
      );
  }, []);

  return (
    <Flexbox flexDirection="column" gap="4">
      {projects
        .filter((x) => x.show.toLowerCase() === "true")
        .map((x, i) => (
          <Box key={i}>
            <Text
              as={"a"}
              href={x.href}
              target="_blank"
              fontSize={[1, 2]}
              fontWeight={700}
              style={{ position: "sticky", top: 0 }}
            >
              {x.title}
            </Text>
            <Box marginBottom={2} />
            <Text>{x.position}</Text>
            <Box marginBottom="2" />
            <Text as="p" color="accent">
              {x.description}
            </Text>
          </Box>
        ))}
    </Flexbox>
  );
};

export default Projects;
