import React from "react";
import Box from "../components/Box";
import { Link } from "react-router-dom";

const Contact = (props) => {
  const primarySocialLinks = [
    "http://twitter.com/alitorbati",
    "http://github.com/alitorbati",
  ];
  const secondarySocialLinks = [
    "mailto:ali.torbati@gmail.com",
    "http://instagram.com/alitorbati",
    "http://linkedin.com/in/alitorbati",
    "http://behance.net/alitorbati",
  ];

  return (
    <Box>
      <Box as="ul" marginBottom={2}>
        {primarySocialLinks.map((link) => (
          <li key={link}>
            <Link to={link} target="_blank">
              {link}
            </Link>
          </li>
        ))}
      </Box>
      <Box as="ul">
        {secondarySocialLinks.map((link) => (
          <li key={link}>
            <Link to={link} target="_blank">
              {link}
            </Link>
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
