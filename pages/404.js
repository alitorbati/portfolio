import Text from "../components/Text";
import Box from "../components/Box";

const Custom404 = () => {
  return (
    <Box>
      404
      <Box marginBottom={1} />
      <Text fontSize={0} color="accent">
        Page not found
      </Text>
    </Box>
  );
};

export default Custom404;
