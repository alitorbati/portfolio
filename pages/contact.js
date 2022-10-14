import styled from "styled-components";
import css from "@styled-system/css";
import Link from "next/Link";
import Text from "../components/Text";
import Box from "../components/Box";

const links = [
  {
    label: "email",
    href: "mailto:ali.torbati@gmail.com",
  },
  {
    label: "github",
    href: "https://github.com/alitorbati",
  },
  {
    label: "twitter",
    href: "https://twitter.com/alitorbati",
  },
  {
    label: "instagram",
    href: "https://instagram.com/alitorbati",
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/alitorbati",
  },
];

const Headshot = styled("img")((props) => ({
  borderRadius: props.theme.space[1],
  maxWidth: `${props.theme.space[4] * 2}px`,
}));

const Contact = (props) => {
  return (
    <Box>
      <Headshot src="images/avatar.jpg" alt="Photo of Ali Torbati" />
      <Box marginBottom="3" />
      <Box as="ul">
        {links.map((link) => {
          return (
            <Box marginBottom="1" as="li" key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Contact;
