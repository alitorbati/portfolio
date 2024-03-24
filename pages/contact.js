import Link from "next/link";
import Box from "../components/foundations/Box";
import Text from "../components/foundations/Text";
import Flexbox from "../components/foundations/Flexbox";
import { motion } from "framer-motion";
import { Check, Copy } from "iconoir-react";
import { useState } from "react";

const item = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};

const work = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alitorbati",
  },
  {
    label: "GitHub",
    href: "https://github.com/alitorbati",
  },
];

const social = [
  {
    label: "Twitter",
    href: "https://twitter.com/alitorbati",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/user/9fptjtu65hi3cxtee3b43x6br?si=3a63d19ac8dc4ba6",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/alitorbati",
  },
  {
    label: "Letterboxd",
    href: "https://letterboxd.com/alitorbati",
  },
];

const groups = [work, social];

const Contact = () => {
  const [copying, setCopying] = useState(false);

  return (
    <Flexbox
      as={motion.flex}
      initial="hidden"
      animate="shown"
      transition={{ staggerChildren: 0.1 }}
      gap={5}
    >
      <Box as={motion.div} variants={item}>
        <Box
          as="img"
          src="images/avatar.png"
          alt="Photo of Ali Torbati"
          width="100vw"
          maxWidth="140px"
          css={{
            imageRendering: "pixelated",
          }}
        />
      </Box>
      <Flexbox flexDirection="column" gap={1}>
        <Box>
          <Flexbox
            as={motion.div}
            variants={item}
            gap={1}
            alignItems="baseline"
            width={"100%"}
          >
            <Text>ali.torbati@gmail.com</Text>
            {copying ? (
              <Check />
            ) : (
              <Copy
                cursor={"pointer"}
                onClick={() => {
                  navigator.clipboard.writeText("ali.torbati@gmail.com");
                  setCopying(true);
                  setTimeout(() => setCopying(false), 1000);
                }}
              />
            )}
          </Flexbox>
          <motion.hr variants={item} />
        </Box>
        {groups.map((group, index) => {
          return (
            <Box key={index}>
              {group.map((link) => {
                return (
                  <Box key={index} as={motion.div} variants={item}>
                    {link.href ? (
                      <Link href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </Link>
                    ) : null}
                    {link.comment ? <Text>{link.comment}</Text> : null}
                  </Box>
                );
              })}
              {index < groups.length - 1 ? <motion.hr variants={item} /> : null}
            </Box>
          );
        })}
      </Flexbox>
    </Flexbox>
  );
};

export default Contact;
