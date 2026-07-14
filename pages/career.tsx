import React from "react";
import Link from "next/link";
import css from "@styled-system/css";
import { motion } from "framer-motion";
import Box from "../components/foundations/Box";
import Text from "../components/foundations/Text";
import Grid from "../components/foundations/Grid";

const item = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};

interface Job {
  company: string;
  href: string;
  positions: string[];
  start: string;
  end: string;
  description: string;
}

const jobs: Job[] = [
  {
    company: "Impart Security",
    href: "https://www.impart.ai/",
    positions: ["Senior Software Engineer"],
    start: "2023-04-18",
    end: "Present",
    description: "",
  },
  {
    company: "ArtCenter",
    href: "https://www.artcenter.edu/",
    positions: ["Adjunct Professor"],
    start: "2022-09-01",
    end: "Present",
    description:
      "Teaching generative design and transmedia at one of the world's most prestigious design schools.",
  },
  {
    company: "Fastly",
    href: "https://www.fastly.com/",
    positions: ["Staff Software Engineer"],
    start: "2020-10-01",
    end: "2023-04-14",
    description:
      "Joined via acquisition of Signal Sciences. Promoted to Staff Software Engineer in recognition of continued effectiveness across several teams and features.",
  },
  {
    company: "Signal Sciences",
    href: "https://leadedge.com/portfolio/signal-sciences/",
    positions: ["Software Engineer"],
    start: "2017-01-16",
    end: "2020-10-01",
    description:
      "Built Cosmo, a robust React component library. Collaborated closely with designers. Provided technical mentorship and leadership to junior engineers.",
  },
  {
    company: "Spokeo",
    href: "https://www.spokeo.com/",
    positions: ["Senior UI Developer"],
    start: "2013-12-09",
    end: "2017-12-28",
    description:
      "Created and maintained consistent, scalable, UI components. Provided technical consultation to design and product teams.",
  },
  // {
  //   company: "Rosetta",
  //   href: "http://rosetta.com",
  //   positions: ["Intern", "UI Developer"],
  //   start: "2013-04-20",
  //   end: "2013-11-15",
  //   description:
  //     "Created and distributed branded assets online. Survived the deep, dark ocean of buzz words and marketing lingo.",
  // },
  // {
  //   company: "DeviantART",
  //   href: "http://deviantart.com",
  //   positions: ["Intern"],
  //   start: "2011-07-01",
  //   end: "2011-09-15",
  //   description:
  //     "Grew the world's largest online art community by researching and presenting strengths/weaknesses of several new products under consideration by an advisory committee.",
  // },
  {
    company: "Cal Poly, San Luis Obispo",
    href: "https://www.calpoly.edu/",
    positions: ["Student"],
    start: "2009-09-01",
    end: "2013-09-01",
    description: "B.S. Graphic Communication",
  },
];

const Career = () => {
  return (
    <Box>
      <Grid
        as={motion.div}
        initial="hidden"
        animate="shown"
        transition={{ staggerChildren: 0.1 }}
        gap={5}
        gridTemplateColumns={["auto", "1fr auto"]}
      >
        <Box></Box>
        <Box as={motion.div} variants={item}>
          I am a UX Engineer with over ten years of practical experience
          designing and implementing interfaces. I also teach a university
          course for students interested in experimental and generative design.
          I have a highly developed eye and taste for design and UX.
        </Box>
        {jobs.map((job) => {
          const startYear = job.start.split("-")[0];
          const endYear = job.end.split("-")[0];
          const period =
            startYear === endYear ? startYear : `${startYear}–${endYear}`;

          return (
            <React.Fragment key={job.company}>
              <Text
                as={motion.div}
                variants={item}
                css={css({
                  display: ["none", "initial"],
                  whiteSpace: "nowrap",
                  textAlign: "right",
                })}
                color={endYear === "Present" ? "textAccent" : "text"}
              >
                {period}
              </Text>
              <Box as={motion.div} variants={item}>
                <Link href={job.href} target="_blank" rel="noreferrer">
                  {job.company}
                </Link>
                <Text
                  marginLeft={3}
                  css={css({
                    display: ["initial", "none"],
                  })}
                  color={endYear === "Present" ? "textAccent" : "text"}
                >
                  {period}
                </Text>
                <Box />
                <Text color="textAccent">{job.positions.join(", ")}</Text>
                <Box />
                {job.description}
              </Box>
            </React.Fragment>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Career;
