import Box from "../components/foundations/Box";

const Notice = (props) => {
  return (
    <Box paddingX={5} paddingY={2} marginY={5} border={1} borderRadius={1}>
      {props.children}
    </Box>
  );
};

export default Notice;
