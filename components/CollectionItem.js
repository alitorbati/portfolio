import Link from "next/link";
import Box from "./foundations/Box";
import Flexbox from "./foundations/Flexbox";

const CollectionItem = (props) => {
  const {
    frontmatter,
    href,
    flexDirection = "row",
    imgWidth = [7, 8],
    imgHeight = [6, 7],
  } = props;

  return (
    <Flexbox gap={4} flexDirection={flexDirection}>
      <Box
        as={Link}
        href={href}
        display="block"
        _hover={{
          padding: 1,
          margin: -1,
          borderRadius: 8,
        }}
        _focus={{
          padding: 1,
          margin: -1,
          borderRadius: 8,
        }}
      >
        {frontmatter.videoUrl ? (
          <Box
            as={"video"}
            width={imgWidth}
            height={imgHeight}
            borderRadius={1}
            flexShrink={0}
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
          </Box>
        ) : (
          <Box
            width={imgWidth}
            height={imgHeight}
            flexShrink={0}
            borderRadius={1}
            backgroundColor="backgroundAccent"
            backgroundImage={`url(${frontmatter.imgUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
          />
        )}
      </Box>
      <Box>
        <Link href={href}>{frontmatter.title}</Link>
        <Box />
        {frontmatter.summary}
      </Box>
    </Flexbox>
  );
};

export default CollectionItem;
