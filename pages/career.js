import styled from "styled-components";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";
import Text from "../components/Text";

const jobs = [
  {
    company: "ArtCenter",
    href: "https://www.artcenter.edu/",
    position: "Assistant Professor",
    startdate: "2022/09/01",
    enddate: "tbd",
    location: "Pasadena, CA",
    description:
      "Teaching generative design and transmedia at one of the world's most prestigious design schools",
    isShown: false,
  },
  {
    company: "Fastly",
    href: "http://fastly.com",
    position: "Senior Software Engineer → Staff Software Engineer",
    startdate: "2020/10/01",
    enddate: "tbd",
    location: "Remote",
    description:
      "Joined via acquisition of Signal Sciences. Promoted to Staff Software Engineer in recognition of continued effectiveness across several teams and features.",
    isShown: true,
  },
  {
    company: "Signal Sciences",
    href: "http://signalsciences.com",
    position: "Software Engineer",
    startdate: "2017/01/16",
    enddate: "2020/10/01",
    location: "Culver City, CA",
    description:
      "Built Cosmo, a robust React component library. Collaborated closely with designers and implemented production-ready interfaces. Provided technical leadership to junior engineers in the form of mentorship, code reviews, etc.",
    isShown: true,
  },
  {
    company: "Spokeo",
    href: "http://spokeo.com/styleguide",
    position: "UI Developer → Senior UI Developer",
    startdate: "2013/12/09",
    enddate: "2017/12/28",
    location: "Pasadena, CA",
    description:
      "Created and maintained consistent, scalable, UI components for our applications. Provided the Design and Product teams with technical consultation.",
    isShown: true,
  },
  {
    company: "Rosetta",
    href: "http://rosetta.com",
    position: "Intern → UI Developer",
    startdate: "2013/04/20",
    enddate: "2013/11/15",
    location: "San Luis Obispo, CA",
    description:
      "Created and distributed branded assets for our online initiatives, while staying afloat in the deep, dark ocean of buzz words and marketing lingo.",
    isShown: true,
  },
  {
    company: "DeviantART",
    href: "http://deviantart.com",
    position: "Intern",
    startdate: "2011/07/01",
    enddate: "2011/09/15",
    location: "Hollywood, CA",
    description:
      "Grew the world's largest online art community by researching and presenting strengths/weaknesses of several new products under consideration by an advisory committee.",
    isShown: true,
  },
  {
    company: "University Graphic Systems",
    href: "http://ugs.calpoly.edu",
    position: "Knowledge Manager",
    startdate: "2012/06/01",
    enddate: "2013/06/20",
    location: "San Luis Obispo, CA",
    description:
      "Documented and organized our student-run commercial print company's collective knowledge, including: procedures, billing history, customer information, historical pricing trends, etc.",
    isShown: false,
  },
  {
    company: "Mustang Daily",
    href: "http://mustangdaily.net",
    position: "Advertising Designer",
    startdate: "2011/08/20",
    enddate: "2012/10/02",
    location: "San Luis Obispo, CA",
    description:
      "Designed ads that met clients' specification docs. Adhered to strict deadlines and client expectations.",
    isShown: false,
  },
];

const Career = (props) => {
  return (
    <Flexbox flexDirection="column" gap="4">
      {jobs.map((job, index) => {
        if (!job.isShown) return null;
        const startDate = job.startdate.split("/")[0];
        const endDate = job.enddate.split("/")[0];
        const duration =
          startDate === endDate ? startDate : `${startDate} — ${endDate}`;

        return (
          <Flexbox flexDirection="column" gap="0" key={index}>
            <Text>
              <a href={job.href} target="_blank" rel="noreferrer">
                {job.company}
              </a>
              <Text color="accent">{` ${duration}`}</Text>
            </Text>
            <Box>
              <Text color="accent">{"• "}</Text>
              {job.position}
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
