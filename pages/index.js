import Link from "next/link";
import { PageFlip, BoxIso, Flask, Emoji } from "iconoir-react";
import Box from "../components/foundations/Box";
import Flexbox from "../components/foundations/Flexbox";
import Text from "../components/foundations/Text";

// TODO: fetch values from source
const features = [
  {
    icon: <PageFlip />,
    category: "Article",
    slug: "/articles/desire-paths",
    title: "Desire Paths and Design Systems",
    summary:
      "Reducing choice and increasing options in a UI component library.",
  },
  {
    icon: <BoxIso />,
    category: "Project",
    slug: "/projects/nevada-museum-of-art",
    title: "Nevada Museum of Art",
    summary:
      'Microsite for exhibit and conference "Art + Environment 2021 — Land Art: Past, Present, Futures.',
  },
  {
    icon: <Flask />,
    category: "Sketch",
    slug: "/sketches/depth-in-two-dimensions",
    title: "Depth in two dimensions",
    summary:
      "Using a 2D canvas to explore how one might communicate space in a physically flat environment.",
  },
];

const Index = () => {
  return (
    <Box>
      <Text fontSize={1} fontWeight={600} color="foreground">
        Ali Torbati
      </Text>
      <Box marginBottom={0} />
      <Text color="foreground">
        Software engineer, designer and creative technologist.
      </Text>
      <Box marginBottom={5} />
      <Box>
        Sometimes I share long-form writing as{" "}
        <Link href="/articles">articles</Link>. Undertakings that required a
        team or several distinct technologies are documented as{" "}
        <Link href="/projects">projects</Link>. Smaller{" "}
        <Link href="/sketches">sketches</Link> are code experiments to learn a
        new skill or convey an idea. I get paid to build web stuff, as noted in
        my <Link href="/career">career</Link> highlights. If any of this
        resonates with you, you&apos;re welcome to{" "}
        <Link href="/contact">contact</Link> me <Emoji />
      </Box>
      <Box marginBottom={6} />
      <Text fontWeight={600} color="foreground">
        Featured posts
      </Text>
      <Box marginBottom={3} />
      <Flexbox gap={3} flexDirection={["column", "row"]}>
        {features.map((feature, index) => {
          return (
            <Box
              key={index}
              borderRadius={1}
              border={1}
              padding={3}
              style={{ flex: "1" }}
            >
              {feature.icon} {feature.category}
              <Box marginBottom={5} />
              <Link href={feature.slug}>{feature.title}</Link>
              <Box marginBottom={3} />
              <Box />
              {feature.summary}
            </Box>
          );
        })}
      </Flexbox>
    </Box>
  );
};

export default Index;
