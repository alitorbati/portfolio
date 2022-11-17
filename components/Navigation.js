import { useRouter } from "next/router";
import Link from "next/link";
import Box from "../components/Box";
import Text from "../components/Text";
import Flexbox from "../components/Flexbox";

const paths = ["/projects", "/sketches", "/articles", "/career", "/contact"];

const Navigation = () => {
  const router = useRouter();

  return (
    <Box as="nav" paddingBottom={3}>
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
                <Text color={isCurrent ? "middle" : null}>{title}</Text>
              </Link>
            );
          })}
        </Flexbox>
      </Flexbox>
    </Box>
  );
};

export default Navigation;
