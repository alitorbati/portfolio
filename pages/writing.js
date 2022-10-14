import styled from "styled-components";
import css from "@styled-system/css";
import Text from "../components/Text";
import Flexbox from "../components/Flexbox";
import Box from "../components/Box";

const articles = [
  {
    title: "Desire Paths and Design Systems",
    href: "https://building.signalsciences.com/ui-desire-paths/",
    description:
      "Support fewer components, manage a consistent API, and provide designers and engineers the tools they need to explore openly and creatively without hacks and unmaintainable code.",
  },
  {
    title: "Death to Complexity: How we Simplified Advanced Search",
    href: "https://medium.com/@alitorbati/death-to-complexity-how-we-simplified-advanced-search-a9ab2940acf0",
    description:
      "A look at the design process that went into reimagining Spokeo’s Advanced Search tools. This was a weeks-long collaboration between the design and front-end teams, with support from backend for some specific API updates.",
  },
  {
    title: "Reducing Visual Noise for a Better User Experience",
    href: "https://medium.com/@alitorbati/reducing-visual-noise-for-a-better-user-experience-ae3407ff9c99",
    description:
      "A critical analysis of what caused confusion on Spokeo’s Person Profiles, and the changes we made to improve our most data-dense product page.",
  },
];

const Writing = () => {
  return (
    <Flexbox flexDirection="column" gap="4">
      {articles.map((article, index) => {
        return (
          <Flexbox flexDirection="column" gap="0" key={index}>
            <Text>
              <a href={article.href} target="_blank" rel="noreferrer">
                {article.title}
              </a>
            </Text>
            <Box>
              <Text as="p" color="accent">
                {article.description}
              </Text>
            </Box>
          </Flexbox>
        );
      })}
    </Flexbox>
  );
};

export default Writing;
