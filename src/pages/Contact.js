import * as React from "react";
import Text from "../components/Text";
import Box from "../components/Box";

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

const Contact = (props) => {
  return (
    <Box as="ul">
      {links.map((link) => (
        <li key={link.href}>
          <Text as={"a"} href={link.href} target="_blank" fontSize={1}>
            {link.label}
          </Text>
        </li>
      ))}
    </Box>
  );
};

export default Contact;
