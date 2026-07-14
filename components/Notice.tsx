import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface NoticeProps {
  children?: ReactNode;
}

const Notice = (props: NoticeProps) => {
  return (
    <Box paddingX={4} paddingY={0} marginY={5} border="1" borderRadius={1}>
      {props.children}
    </Box>
  );
};

export default Notice;
