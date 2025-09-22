import { useRouter } from "next/router";
import Link from "next/link";
import css from "@styled-system/css";
import {
  PageFlip,
  BoxIso,
  Flask,
  Computer,
  ChatLines,
  HomeSimple,
} from "iconoir-react";
import Text from "../components/foundations/Text";
import Flexbox from "../components/foundations/Flexbox";

// For now, keep the static paths but make them easily maintainable
// The dynamic generation will happen at the Next.js level through the dynamic routes
export const paths = [
  {
    href: "/",
    name: "Home",
    icon: <HomeSimple />,
  },
  {
    href: "/articles",
    name: "Articles",
    icon: <PageFlip />,
  },
  {
    href: "/projects",
    name: "Projects",
    icon: <BoxIso />,
  },
  {
    href: "/sketches",
    name: "Sketches",
    icon: <Flask />,
  },
  {
    href: "/career",
    name: "Career",
    icon: <Computer />,
  },
  {
    href: "/contact",
    name: "Contact",
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
          <Link
            href={path.href}
            key={path.href}
            data-active={isCurrent.toString()}
          >
            <Text>
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
