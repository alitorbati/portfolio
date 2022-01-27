import * as React from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import Text from "../components/Text";
import Box from "../components/Box";

const Datedivider = styled.span`
  display: inline-block;
  width: 100px;
  height: 1px;
  position: relative;
  top: -4px;
  ${css({
    backgroundColor: "foreground",
    marginX: 2,
  })}
`;

const Jobs = (props) => {
  const { useState, useEffect } = React;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      // https://benborgers.com/posts/google-sheets-json
      "https://opensheet.elk.sh/1VnD8RJtceCIFPvWzrCOcQCY5eUY5_FO1yOwvGIpCXe8/Sheet1"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setJobs(result);
        },
        (error) => {
          setJobs([]);
        }
      );
  }, []);

  return (
    <>
      {jobs
        .filter((x) => x.show.toLowerCase() === "true")
        .map((x, i) => (
          <Box key={i} marginBottom={4}>
            <Text
              as={"a"}
              href={x.href}
              target="_blank"
              fontSize={[1, 2]}
              fontWeight={700}
              style={{ position: "sticky", top: 0 }}
            >
              {x.company}
            </Text>
            <Box marginBottom={2} />
            <Text>{x.position}</Text>
            <Box>
              <Text>{x.startdate}</Text>
              <Datedivider />
              <Text>{x.enddate}</Text>
            </Box>
            <Box marginBottom={2} />
            <Text as="p" color="accent">
              {x.description}
            </Text>
          </Box>
        ))}
    </>
  );
};

export default Jobs;
