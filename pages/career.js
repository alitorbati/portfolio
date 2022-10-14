import styled from "styled-components";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";
import Text from "../components/Text";

const jobs = [
  {
    company: "ArtCenter",
    href: "https://www.artcenter.edu/",
    positions: ["Assistant Professor"],
    start: "2022/09/01",
    end: "TBD",
    location: "Pasadena, CA",
    description:
      "Teaching generative design and transmedia at one of the world's most prestigious design schools",
    isVisible: false,
  },
  {
    company: "Fastly",
    href: "http://fastly.com",
    positions: ["Senior Software Engineer", "Staff Software Engineer"],
    start: "2020/10/01",
    end: "TBD",
    location: "Remote",
    description:
      "Joined via acquisition of Signal Sciences. Promoted to Staff Software Engineer in recognition of continued effectiveness across several teams and features.",
    isVisible: true,
  },
  {
    company: "Signal Sciences",
    href: "http://signalsciences.com",
    positions: ["Software Engineer"],
    start: "2017/01/16",
    end: "2020/10/01",
    location: "Culver City, CA",
    description:
      "Built Cosmo, a robust React component library. Collaborated closely with designers. Provided technical mentorship and leadership to junior engineers.",
    isVisible: true,
  },
  {
    company: "Spokeo",
    href: "http://spokeo.com/styleguide",
    positions: ["UI Developer", "Senior UI Developer"],
    start: "2013/12/09",
    end: "2017/12/28",
    location: "Pasadena, CA",
    description:
      "Created and maintained consistent, scalable, UI components. Provided technical consultation to design and product teams.",
    isVisible: true,
  },
  {
    company: "Rosetta",
    href: "http://rosetta.com",
    positions: ["Intern", "UI Developer"],
    start: "2013/04/20",
    end: "2013/11/15",
    location: "San Luis Obispo, CA",
    description:
      "Created and distributed branded assets online. Survived the deep, dark ocean of buzz words and marketing lingo.",
    isVisible: true,
  },
  {
    company: "DeviantART",
    href: "http://deviantart.com",
    positions: ["Intern"],
    start: "2011/07/01",
    end: "2011/09/15",
    location: "Hollywood, CA",
    description:
      "Grew the world's largest online art community by researching and presenting strengths/weaknesses of several new products under consideration by an advisory committee.",
    isVisible: true,
  },
  {
    company: "University Graphic Systems",
    href: "http://ugs.calpoly.edu",
    positions: ["Knowledge Manager"],
    start: "2012/06/01",
    end: "2013/06/20",
    location: "San Luis Obispo, CA",
    description:
      "Documented and organized our student-run commercial print company's collective knowledge, including: procedures, billing history, customer information, historical pricing trends, etc.",
    isVisible: false,
  },
  {
    company: "Mustang Daily",
    href: "http://mustangdaily.net",
    positions: ["Advertising Designer"],
    start: "2011/08/20",
    end: "2012/10/02",
    location: "San Luis Obispo, CA",
    description:
      "Designed ads that met clients' specification docs. Adhered to strict deadlines and client expectations.",
    isVisible: false,
  },
];

const Career = (props) => {
  return (
    <Flexbox flexDirection="column" gap="4">
      {jobs.map((job, index) => {
        if (!job.isVisible) return null;
        const startYear = job.start.split("/")[0];
        const endYear = job.end.split("/")[0];
        const duration =
          startYear === endYear ? startYear : `${startYear} — ${endYear}`;

        return (
          <Flexbox flexDirection="column" gap="0" key={index}>
            <Text>
              <a href={job.href} target="_blank" rel="noreferrer">
                {job.company}
              </a>
              <Text color="accent">{` ${duration}`}</Text>
            </Text>
            <Box>
              {/* <Text color="">{"• "}</Text>
              {job.positions.map((position, index) => {
                const isFinal = index === job.positions.length - 1;
                return (
                  <Text color="accent" key={index}>
                    {position}
                    {isFinal ? null : " → "}
                  </Text>
                );
              })} */}
              <Text as="p" color="accent">
                {job.description}
              </Text>
            </Box>
          </Flexbox>
        );
      })}
    </Flexbox>
  );
};

export default Career;
