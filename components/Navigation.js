import { useRouter } from "next/router";
import Link from "next/link";
import css from "@styled-system/css";
import {
  PageFlip,
  BoxIso,
  Flask,
  Computer,
  ChatLines,
  HomeSimpleDoor,
} from "iconoir-react";
import Text from "../components/foundations/Text";
import Flexbox from "../components/foundations/Flexbox";

export const paths = [
  {
    href: "/",
    name: "Home",
    description: "Home.",
    icon: <HomeSimpleDoor />,
  },
  {
    href: "/articles",
    name: "Articles",
    description: "Long-form writing to document and share deep learning.",
    icon: <PageFlip />,
  },
  {
    href: "/projects",
    name: "Projects",
    description:
      "Undertakings that required a team or several distinct technologies.",
    icon: <BoxIso />,
  },
  {
    href: "/sketches",
    name: "Sketches",
    description: "Code experiments to learn a new skill or convey an idea.",
    icon: <Flask />,
  },
  {
    href: "/career",
    name: "Career",
    description: "Noteworthy professional milestones.",
    icon: <Computer />,
  },
  {
    href: "/contact",
    name: "Contact",
    description: "Available for hire.",
    icon: <ChatLines />,
  },
];

const Navigation = () => {
  const router = useRouter();

  return (
    <Flexbox
      as="nav"
      flexDirection="row"
      flexWrap="wrap"
      flex="1"
      gap={4}
      css={{
        "@media print": {
          display: "none",
        },
      }}
    >
      {paths.map((path) => {
        const currentPath = router.asPath;
        const currentPathParts = currentPath.split("/");

        const isCurrentPath = currentPath === path.href;
        const isNestedPath = currentPathParts[1] === path.href.replace("/", "");
        const isCurrent = isCurrentPath || isNestedPath;

        return (
          <Link href={path.href} key={path.href}>
            <Text color={isCurrent ? "middle" : null}>
              {path.icon}
              <Text css={css({ display: ["none", "initial"] })}>
                {" "}
                {path.name}
              </Text>
            </Text>
          </Link>
        );
      })}
    </Flexbox>
  );
};

export default Navigation;
