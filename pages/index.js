import Link from "next/link";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";
import { paths } from "../components/Navigation";

const Index = () => {
  // return Projects(props);
  return (
    <Flexbox flexDirection="column" gap={5}>
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
