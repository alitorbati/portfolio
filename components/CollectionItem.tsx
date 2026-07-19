import Link from "next/link";
import { Box, Flex, chakra } from "@chakra-ui/react";
import { Smile } from "lucide-react";
import type { Frontmatter } from "../types/content";

// Chakra v3's `as` prop does not broaden props to the target element, so wrap
// next/link and intrinsic media elements with the chakra() factory instead.
const LinkBox = chakra(Link);

interface CollectionItemProps {
  frontmatter: Frontmatter;
  href: string;
  isStacked?: boolean;
}

const CollectionItem = (props: CollectionItemProps) => {
  const { frontmatter, href, isStacked = false } = props;

  // Every variant stacks on the narrowest screens, where a side-by-side thumbnail
  // would be squeezed down to a thumbnail of a thumbnail. `isStacked` therefore
  // only decides what happens from the first breakpoint up.
  const flexDirection = ["column", isStacked ? "column" : "row"];
  const alignItems = ["stretch", isStacked ? "stretch" : "flex-start"];
  // Full-bleed while stacked; a fixed left column once the text sits beside it.
  const mediaWidth = ["100%", isStacked ? "100%" : 8];
  // Taller when stacked so a full-width image isn't a letterbox slit.
  const mediaHeight = [8, 7];

  return (
    <Flex gap={[3, 4]} flexDirection={flexDirection} alignItems={alignItems}>
      <LinkBox
        href={href}
        display="block"
        // The `<a>` is the flex item, so `flexShrink={0}` keeps the left column a
        // straight, fixed line. It has no explicit width — it hugs the media —
        // so the hover padding grows a frame around the media without resizing it.
        flexShrink={0}
        _hover={{
          padding: 1,
          margin: -1,
          borderRadius: 2,
        }}
        _focus={{
          padding: 1,
          margin: -1,
          borderRadius: 2,
        }}
      >
        {frontmatter.videoUrl ? (
          <chakra.video
            width={mediaWidth}
            height={mediaHeight}
            borderRadius={1}
            display="block"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            backgroundColor="backgroundAccent"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={frontmatter.videoUrl} type="video/mp4" />
          </chakra.video>
        ) : frontmatter.imgUrl ? (
          <Box
            width={mediaWidth}
            height={mediaHeight}
            borderRadius={1}
            backgroundColor="backgroundAccent"
            backgroundImage={`url(${frontmatter.imgUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
          />
        ) : (
          <Flex
            width={mediaWidth}
            height={mediaHeight}
            borderRadius={1}
            backgroundColor="backgroundAccent"
            color="text"
            alignItems="center"
            justifyContent="center"
            fontSize="1.8em"
          >
            <Smile />
          </Flex>
        )}
      </LinkBox>
      <Box>
        <Link href={href}>{frontmatter.title}</Link>
        <Box />
        {frontmatter.summary}
      </Box>
    </Flex>
  );
};

export default CollectionItem;
