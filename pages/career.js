import css from "@styled-system/css";
import Link from "next/link";
import { ArrowDownCircled } from "iconoir-react";
import Box from "../components/foundations/Box";
import Text from "../components/foundations/Text";
import Grid from "../components/foundations/Grid";
import Flexbox from "../components/foundations/Flexbox";
import React from "react";

const jobs = [
  {
    company: "Impart Security",
    href: "https://www.impart.security/",
    positions: ["Senior Software Engineer"],
    start: "2023-04-18",
    end: "Present",
    description: "",
  },
  {
    company: "ArtCenter",
    href: "https://www.artcenter.edu/",
    positions: ["Instructor"],
    start: "2022-09-01",
    end: "Present",
    description:
      "Teaching generative design and transmedia at one of the world's most prestigious design schools",
  },
  {
    company: "Fastly",
    href: "http://fastly.com",
    positions: ["Senior Software Engineer", "Staff Software Engineer"],
    start: "2020-10-01",
    end: "2023-04-14",
    description:
      "Joined via acquisition of Signal Sciences. Promoted to Staff Software Engineer in recognition of continued effectiveness across several teams and features.",
  },
  {
    company: "Signal Sciences",
    href: "http://signalsciences.com",
    positions: ["Software Engineer"],
    start: "2017-01-16",
    end: "2020-10-01",
    description:
      "Built Cosmo, a robust React component library. Collaborated closely with designers. Provided technical mentorship and leadership to junior engineers.",
  },
  {
    company: "Spokeo",
    href: "http://spokeo.com/styleguide",
    positions: ["UI Developer", "Senior UI Developer"],
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
    href: "http://calpoly.com",
    positions: ["Student"],
    start: "2009-09-01",
    end: "2013-09-01",
    description: "B.S. Graphic Communication",
  },
];

const printItems = ["Ali Torbati", "ali.torbati@gmail.com", "323-251-1991"];

const Career = () => {
  return (
    <Box>
      <Box
        css={{
          "@media not print": {
            display: "none",
          },
        }}
      >
        <Flexbox justifyContent="space-between" gap={5}>
          {printItems.map((item) => {
            return <Text key={item}>{item}</Text>;
          })}
        </Flexbox>
        <Box marginBottom={6} />
      </Box>
      <Grid gap={5} gridTemplateColumns={["auto", "1fr auto"]}>
        {jobs.map((job, index) => {
          const startYear = job.start.split("-")[0];
          const endYear = job.end.split("-")[0];
          const duration =
            startYear === endYear ? startYear : `${startYear}–${endYear}`;

          return (
            <React.Fragment key={job.company}>
              <Text
                css={css({
                  display: ["none", "initial"],
                  whiteSpace: "nowrap",
                  textAlign: "right",
                })}
              >
                {duration}
              </Text>
              <Box key={index}>
                <Link href={job.href} target="_blank" rel="noreferrer">
                  {job.company}
                </Link>
                <Text
                  css={css({
                    display: ["initial", "none"],
                  })}
                >
                  {` ${duration}`}
                </Text>
                <Box />
                <Text color="foreground">{job.positions.join(", ")}</Text>
                <Box />
                {job.description}
              </Box>
            </React.Fragment>
          );
        })}
      </Grid>
      <Box
        css={{
          "@media print": {
            display: "none",
          },
        }}
      >
        <Box marginBottom={6} />
        <Flexbox justifyContent="space-around">
          <a
            href="#"
            onClick={typeof window !== "undefined" ? window.print : null}
          >
            <ArrowDownCircled /> Download
          </a>
        </Flexbox>
      </Box>
    </Box>
  );
};

export default Career;
