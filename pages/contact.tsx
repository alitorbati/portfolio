import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Box, Flex, chakra } from "@chakra-ui/react";
import { Check, Copy } from "lucide-react";
import { MotionBox, staggerContainer } from "../components/motion";

const item = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};

interface ContactLink {
  label: string;
  href?: string;
  comment?: string;
}

const work: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alitorbati",
  },
  {
    label: "GitHub",
    href: "https://github.com/alitorbati",
  },
];

const social: ContactLink[] = [
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

const groups: ContactLink[][] = [work, social];

const Contact = () => {
  const [copying, setCopying] = useState(false);

  return (
    <MotionBox
      display="flex"
      initial="hidden"
      animate="shown"
      variants={staggerContainer}
      gap={5}
    >
      <MotionBox variants={item}>
        <chakra.img
          src="images/avatar.png"
          alt="Photo of Ali Torbati"
          width="100vw"
          maxWidth={[7, 8]}
          css={{
            imageRendering: "pixelated",
          }}
        />
      </MotionBox>
      <Flex flexDirection="column" gap={1}>
        <Box>
          <MotionBox
            display="flex"
            variants={item}
            gap={1}
            alignItems="baseline"
            width={"100%"}
          >
            <chakra.span>ali.torbati@gmail.com</chakra.span>
            {copying ? (
              <Check />
            ) : (
              <Copy
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText("ali.torbati@gmail.com");
                  setCopying(true);
                  setTimeout(() => setCopying(false), 1000);
                }}
              />
            )}
          </MotionBox>
          <motion.hr variants={item} />
        </Box>
        {groups.map((group, index) => {
          return (
            <Box key={index}>
              {group.map((link) => {
                return (
                  <MotionBox key={link.label} variants={item}>
                    {link.href ? (
                      <Link href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </Link>
                    ) : null}
                    {link.comment ? <chakra.span>{link.comment}</chakra.span> : null}
                  </MotionBox>
                );
              })}
              {index < groups.length - 1 ? <motion.hr variants={item} /> : null}
            </Box>
          );
        })}
      </Flex>
    </MotionBox>
  );
};

export default Contact;
