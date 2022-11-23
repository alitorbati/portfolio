import Link from "next/link";
import Box from "../components/Box";
import Text from "../components/Text";

const links = [
  {
    label: "email",
    href: "mailto:ali.torbati@gmail.com",
    comment: "ali.torbati@gmail.com",
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

const Contact = () => {
  return (
    <Box>
      <Box
        as="img"
        src="images/avatar.jpg"
        alt="Photo of Ali Torbati"
        maxWidth="140px"
      />
      <Box marginBottom={4} />
      <Box as="ul">
        {links.map((link) => {
          return (
            <Box marginBottom={1} as="li" key={link.href}>
              <Link href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </Link>
              {link.comment ? <Text> — {link.comment}</Text> : null}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Contact;
