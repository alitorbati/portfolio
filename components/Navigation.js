import { useRouter } from "next/router";
import Link from "next/link";
import Box from "../components/Box";
import Text from "../components/Text";
import Flexbox from "../components/Flexbox";

const paths = ["/", "/projects", "/writing", "/career", "/contact"];

const Header = () => {
  const router = useRouter();

  return (
    <Box as="nav" paddingBottom={4} borderBottom={0}>
      <Flexbox alignItems="center" gap={4} flexWrap="wrap">
        {paths.map((path) => {
          const currentPath = router.asPath;
          const currentPathParts = currentPath.split("/");
          const pathname = path.replace("/", "");
          const title = path === "/" ? "index" : pathname;

          const isCurrentPath = currentPath === path;
          const isNestedPath = currentPathParts[1] === pathname;
          const isCurrent = isCurrentPath || isNestedPath;

          return (
            <Link href={path} key={path}>
              <a>
                <Text color={isCurrent ? "foreground" : null}>{title}</Text>
              </a>
            </Link>
          );
        })}
      </Flexbox>
    </Box>
  );
};

export default Header;
