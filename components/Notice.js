import Box from "../components/foundations/Box";

const Notice = (props) => {
  return (
    <Box paddingX={4} paddingY={0} marginY={5} border={1} borderRadius={1}>
      {props.children}
    </Box>
  );
};

export default Notice;
