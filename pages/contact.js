import Link from "next/link";
import Box from "../components/foundations/Box";
import Text from "../components/foundations/Text";
import Flexbox from "../components/foundations/Flexbox";

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
    <Flexbox gap={5}>
      <Box>
        <Box
          as="img"
          src="images/avatar.jpg"
          alt="Photo of Ali Torbati"
          maxWidth="140px"
        />
      </Box>
      <Flexbox flexDirection="column" gap={1}>
        {links.map((link) => {
          return (
            <Box key={link.href}>
              <Link href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </Link>
              {link.comment ? <Text> — {link.comment}</Text> : null}
            </Box>
          );
        })}
      </Flexbox>
    </Flexbox>
  );
};

export default Contact;
