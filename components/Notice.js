import Box from "../components/Box";

const Notice = (props) => {
  return (
    <Box
      paddingX={5}
      paddingY={2}
      marginX={[0, 0, 0, -6]}
      marginY={5}
      backgroundColor="backgroundLight"
      borderRadius={1}
    >
      {props.children}
    </Box>
  );
};

export default Notice;
