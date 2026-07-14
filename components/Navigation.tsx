import type { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  BookOpen,
  Box as BoxIcon,
  FlaskConical,
  Laptop,
  MessageCircle,
  House,
} from "lucide-react";
import { Flex, chakra } from "@chakra-ui/react";

export interface NavPath {
  href: string;
  name: string;
  icon: ReactNode;
}

// For now, keep the static paths but make them easily maintainable
// The dynamic generation will happen at the Next.js level through the dynamic routes
export const paths: NavPath[] = [
  {
    href: "/",
    name: "Home",
    icon: <House />,
  },
  {
    href: "/articles",
    name: "Articles",
    icon: <BookOpen />,
  },
  {
    href: "/projects",
    name: "Projects",
    icon: <BoxIcon />,
  },
  {
    href: "/sketches",
    name: "Sketches",
    icon: <FlaskConical />,
  },
  {
    href: "/career",
    name: "Career",
    icon: <Laptop />,
  },
  {
    href: "/contact",
    name: "Contact",
    icon: <MessageCircle />,
  },
];

const Navigation = () => {
  const router = useRouter();

  return (
    <Flex as="nav" flexDirection="row" flexWrap="wrap" flex="1" gap={4}>
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
            <Flex as="span" display="inline-flex" alignItems="center" gap={1}>
              {path.icon}
              <chakra.span display={["none", "initial"]}>{path.name}</chakra.span>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};

export default Navigation;
