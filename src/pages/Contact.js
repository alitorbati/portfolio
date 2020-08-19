import React from "react";
import Text from "../components/Text";
import Box from "../components/Box";

const Contact = (props) => {
  const primarySocialLinks = [
    {
      label: 'twitter',
      href: "http://twitter.com/alitorbati",
    },
    {
      label: 'github',
      href: "http://github.com/alitorbati",
    },
  ];
  const secondarySocialLinks = [
    {
      label: 'email',
      href: "mailto:ali.torbati@gmail.com",
    },
    {
      label: 'instagram',
      href: "http://instagram.com/alitorbati",
    },
    {
      label: 'linkedin',
      href: "http://linkedin.com/in/alitorbati",
    },
    {
      label: 'behance',
      href: "http://behance.net/alitorbati",
    },
  ];

  const LocalLink = (props) => {
    return (
      <Text
        as={'a'}
        href={props.link.href}
        target="_blank"
        fontSize={[1, 2]}
        fontWeight={700}
        style={{ position: "sticky", top: 0 }}
      >
        {props.link.label}
      </Text>
    )
  }

  return (
    <Box>
      <Box as="ul" marginBottom={3}>
        {primarySocialLinks.map((link) => (
          <li key={link.href}>
            <LocalLink link={link} />
          </li>
        ))}
      </Box>
      <Box as="ul">
        {secondarySocialLinks.map((link) => (
          <li key={link.href}>
            <LocalLink link={link} />
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
