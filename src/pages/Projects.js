import React, { useState, useEffect } from "react";
import Text from "../components/Text";
import Box from "../components/Box";
import CleanSheetData from "../components/CleanSheetData";

const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const url =
    "https://spreadsheets.google.com/feeds/list/12sERGaYvU1ZUsEOnG11LgR8ZQVtLW3zn2Kv8yOOBPyg/od6/public/values?alt=json";

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      const res = await fetch(url, { signal: abortController.signal });
      res.json().then((data) => setProjects(data.feed.entry));
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return (
    <CleanSheetData data={projects}>
      {({ data }) =>
        data
          .filter((x) => x.show.toLowerCase() === "true")
          .map((x, i) => (
            <Box key={i} marginBottom={4}>
              <Text
                as={'a'}
                href={x.href}
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
              <Box marginBottom={2}>
                <Text fontWeight={700}>{x.position}</Text>
              </Box>
              <Text as="p" marginBottom={2}>
                {x.description}
              </Text>
            </Box>
          ))
      }
    </CleanSheetData>
  );
};

export default Projects;
