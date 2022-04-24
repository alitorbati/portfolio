import * as React from "react";
import Text from "../components/Text";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";

const Writing = (props) => {
  const { useState, useEffect } = React;
  const [writing, setWriting] = useState([]);

  useEffect(() => {
    fetch(
      // https://benborgers.com/posts/google-sheets-json
      "https://opensheet.elk.sh/1EXvzAgQBxhzfwzhb8fFyziKJogfys5T7SBCORX-ZpAo/Sheet1"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          const filtered = result.filter((x) => /true/i.test(x.show));
          setWriting(filtered);
        },
        (error) => {
          setWriting([]);
        }
      );
  }, []);

  return (
    <Box>
      <Text fontSize="1" color="accent">
        Thoughts on systems
      </Text>
      <Box marginBottom="3" />
      <Flexbox flexDirection="column" gap="4">
        {writing.map((x, i) => {
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

export default Writing;
