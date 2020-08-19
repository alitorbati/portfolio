import React, { useState, useEffect } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import Text from "../components/Text";
import Box from "../components/Box";
import CleanSheetData from "../components/CleanSheetData";

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
  const [jobs, setJobs] = useState([]);
  const url =
    "https://spreadsheets.google.com/feeds/list/1VnD8RJtceCIFPvWzrCOcQCY5eUY5_FO1yOwvGIpCXe8/od6/public/values?alt=json";

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      const res = await fetch(url, { signal: abortController.signal });
      res.json().then((data) => setJobs(data.feed.entry));
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return (
    <CleanSheetData data={jobs}>
      {({ data }) =>
        data
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
              <Box marginBottom={3}>
                <Text fontWeight={700}>{x.position}</Text>
                <Box>
                  <Text>{x.startdate}</Text>
                  <Datedivider />
                  <Text>{x.enddate}</Text>
                </Box>
              </Box>
              <Text as="p">{x.description}</Text>
            </Box>
          ))
      }
    </CleanSheetData>
  );
};

export default Jobs;
