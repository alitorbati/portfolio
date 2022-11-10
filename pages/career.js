import Box from "../components/Box";
import Flexbox from "../components/Flexbox";

const jobs = [
  // {
  //   company: "ArtCenter",
  //   href: "https://www.artcenter.edu/",
  //   positions: ["Assistant Professor"],
  //   start: "2022-09-01",
  //   end: "Present",
  //   description:
  //     "Teaching generative design and transmedia at one of the world's most prestigious design schools",
  // },
  {
    company: "Fastly",
    href: "http://fastly.com",
    positions: ["Senior Software Engineer", "Staff Software Engineer"],
    start: "2020-10-01",
    end: "Present",
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
  {
    company: "Rosetta",
    href: "http://rosetta.com",
    positions: ["Intern", "UI Developer"],
    start: "2013-04-20",
    end: "2013-11-15",
    description:
      "Created and distributed branded assets online. Survived the deep, dark ocean of buzz words and marketing lingo.",
  },
  {
    company: "DeviantART",
    href: "http://deviantart.com",
    positions: ["Intern"],
    start: "2011-07-01",
    end: "2011-09-15",
    description:
      "Grew the world's largest online art community by researching and presenting strengths/weaknesses of several new products under consideration by an advisory committee.",
  },
];

const Career = () => {
  return (
    <Flexbox flexDirection="column" gap={5}>
      {jobs.map((job, index) => {
        const startYear = new Date(job.start).toLocaleDateString("en-us", {
          year: "numeric",
        });

        const endYear = Date.parse(job.end)
          ? new Date(job.end).toLocaleDateString("en-us", {
              year: "numeric",
            })
          : job.end;

        const duration =
          startYear === endYear ? startYear : `${startYear}–${endYear}`;

        return (
          <Box key={index}>
            <a href={job.href} target="_blank" rel="noreferrer">
              {job.company}
            </a>
            {` ${duration}`}
            <Box />
            {job.description}
          </Box>
        );
      })}
    </Flexbox>
  );
};

export default Career;
