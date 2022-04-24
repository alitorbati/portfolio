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
          const filtered = result.filter((x) => /true/i.test(x.show));
          setProjects(filtered);
        },
        (error) => {
          setProjects([]);
        }
      );
  }, []);

  return (
    <Box>
      <Text fontSize="1" color="accent">
        Experiments and freelance gigs
      </Text>
      <Box marginBottom="3" />
      <Flexbox flexDirection="column" gap="4">
        {projects.map((x, i) => {
          const { href, title, position, description } = x;
          return (
            <Box key={i}>
              <Text
                as={"a"}
                href={href}
                target="_blank"
                fontSize={3}
                fontWeight={600}
                lineHeight="1.1"
                style={{ position: "sticky", top: 0 }}
              >
                {title}
              </Text>
              <Box marginBottom={2} />
              <Text>{position}</Text>
              <Box marginBottom="2" />
              <Text as="p" color="accent">
                {description}
              </Text>
            </Box>
          );
        })}
      </Flexbox>
    </Box>
  );
};

export default Projects;
