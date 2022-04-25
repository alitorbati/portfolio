import * as React from "react";
import Text from "../components/Text";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";

const Work = (props) => {
  const { useState, useEffect } = React;
  const [work, setWork] = useState([]);

  useEffect(() => {
    fetch(
      // https://benborgers.com/posts/google-sheets-json
      "https://opensheet.elk.sh/1VnD8RJtceCIFPvWzrCOcQCY5eUY5_FO1yOwvGIpCXe8/Sheet1"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          const filtered = result.filter((x) => /true/i.test(x.show));
          setWork(filtered);
        },
        (error) => {
          setWork([]);
        }
      );
  }, []);

  return (
    <Box>
      <Text fontSize="1" color="accent">
        Career progression
      </Text>
      <Box marginBottom="3" />
      <Flexbox flexDirection="column" gap="4">
        {work.map((x, i) => {
          const { href, company, position, startdate, enddate, description } =
            x;
          return (
            <Box key={i}>
              <Text
                as={"a"}
                href={href}
                target="_blank"
                fontSize={[2, 3]}
                fontWeight={600}
                lineHeight="1.1"
                style={{ position: "sticky", top: 0 }}
              >
                {company}
              </Text>
              <Box marginBottom={2} />
              <Text>{position}</Text>
              <Box />
              <Text color="accent">
                {startdate} → {enddate}
              </Text>
              <Box marginBottom="2" />
              <Box>
                <Text as="p" color="accent">
                  {description}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Flexbox>
    </Box>
  );
};

export default Work;
