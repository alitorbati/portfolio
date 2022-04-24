import * as React from "react";
import styled from "styled-components";
import Text from "../components/Text";
import Box from "../components/Box";
import headshot from "../images/avatar.jpg";

const links = [
  {
    label: "email",
    href: "mailto:ali.torbati@gmail.com",
  },
  {
    label: "github",
    href: "http://github.com/alitorbati",
  },
  {
    label: "linkedin",
    href: "http://linkedin.com/in/alitorbati",
  },
  {
    label: "twitter",
    href: "http://twitter.com/alitorbati",
  },
  {
    label: "instagram",
    href: "http://instagram.com/alitorbati",
  },
  {
    label: "behance",
    href: "http://behance.net/alitorbati",
  },
];

const Headshot = styled("img")({
  borderRadius: "4px",
  maxWidth: "140px",
});

const Contact = (props) => {
  return (
    <Box>
      <Headshot src={headshot} alt="Photo of yours truly" />
      <Box marginBottom="3" />
      <Box as="ul">
        {links.map((link) => (
          <li key={link.href}>
            <Text as={"a"} href={link.href} target="_blank" fontSize={1}>
              {link.label}
            </Text>
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
