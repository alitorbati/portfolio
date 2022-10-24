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
