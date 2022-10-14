import Text from "../components/Text";
import Box from "../components/Box";

const Home = () => {
  return (
    <Box>
      <Text>Ali Torbati</Text>
      <Box marginBottom={2} />
      <Text color="accent">
        My professional focus is on UI Engineering. This discipline is
        expressive, nuanced and complex. It requires both deep and broad
        knowledge, which is why I find it so rewarding.
      </Text>
    </Box>
  );
};

export default Home;
