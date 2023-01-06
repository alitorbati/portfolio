import Link from "next/link";
import Box from "../components/foundations/Box";
import Flexbox from "../components/foundations/Flexbox";
import Text from "../components/foundations/Text";
import { paths } from "../components/Navigation";

const Index = () => {
  return (
    <Flexbox flexDirection="column" gap={5}>
      <Text>Creating nice UI with readable code.</Text>
      {paths.map((path) => {
        return (
          <Box key={path.href}>
            <Link href={path.href}>{path.name}</Link>
            <Box display="inline-block" marginRight={3} />
            {path.description}
          </Box>
        );
      })}
    </Flexbox>
  );
};

export default Index;
