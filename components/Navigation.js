import { useRouter } from "next/router";
import Link from "next/link";
import Box from "../components/foundations/Box";
import Text from "../components/foundations/Text";
import Flexbox from "../components/foundations/Flexbox";

export const paths = [
  {
    href: "/",
    name: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    description:
      "My professional focus is on UI Engineering. This discipline is expressive, nuanced and complex. It requires both deep and broad knowledge, which is why I find it so rewarding.",
  },
  {
    href: "/articles",
    name: "Articles",
    description: "Long-form writing to document and share deep learning.",
  },
  {
    href: "/projects",
    name: "Projects",
    description:
      "Undertakings that required a team or several distinct technologies.",
  },
  {
    href: "/sketches",
    name: "Sketches",
    description: "Code experiments to learn a new skill or convey an idea.",
  },
  {
    href: "/career",
    name: "Career",
    description: "Noteworthy professional milestones.",
  },
  { href: "/contact", name: "Contact", description: "Available for hire." },
];

const Navigation = () => {
  const router = useRouter();

  return (
    <Box
      as="nav"
      paddingBottom={3}
      css={{
        "@media print": {
          display: "none",
        },
      }}
    >
      <Flexbox
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        flexWrap="wrap"
      >
        <Link href="/">
          <Text>Ali Torbati</Text>
        </Link>
        <Flexbox alignItems="center" gap={4} flexWrap="wrap">
          {paths
            .filter((path) => path.href !== "/")
            .map((path) => {
              const currentPath = router.asPath;
              const currentPathParts = currentPath.split("/");

              const isCurrentPath = currentPath === path.href;
              const isNestedPath =
                currentPathParts[1] === path.href.replace("/", "");
              const isCurrent = isCurrentPath || isNestedPath;

              return (
                <Link href={path.href} key={path.href}>
                  <Text color={isCurrent ? "middle" : null}>{path.name}</Text>
                </Link>
              );
            })}
        </Flexbox>
      </Flexbox>
    </Box>
  );
};

export default Navigation;
