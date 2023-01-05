import Link from "next/link";
import Box from "../components/foundations/Box";
import Text from "../components/foundations/Text";
import Flexbox from "../components/foundations/Flexbox";

const email = [
  {
    label: "email",
    href: "mailto:ali.torbati@gmail.com",
    comment: "ali.torbati@gmail.com",
  },
];

const work = [
  {
    label: "linkedin",
    href: "https://linkedin.com/in/alitorbati",
  },
  {
    label: "github",
    href: "https://github.com/alitorbati",
  },
];

const social = [
  {
    label: "twitter",
    href: "https://twitter.com/alitorbati",
  },
  {
    label: "spotify",
    href: "https://open.spotify.com/user/9fptjtu65hi3cxtee3b43x6br?si=3a63d19ac8dc4ba6",
  },
  {
    label: "instagram",
    href: "https://instagram.com/alitorbati",
  },
];

const groups = [email, work, social];

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
        {groups.map((group, index) => {
          return (
            <Box key={index}>
              {group.map((link) => {
                return (
                  <Box key={link.href}>
                    <Link href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </Link>
                    {link.comment ? <Text> — {link.comment}</Text> : null}
                  </Box>
                );
              })}
              {index < groups.length - 1 ? <hr /> : null}
            </Box>
          );
        })}
      </Flexbox>
    </Flexbox>
  );
};

export default Contact;
