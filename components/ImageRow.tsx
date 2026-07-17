import { Flex } from "@chakra-ui/react";
import type { ComponentPropsWithoutRef } from "react";

interface ImageRowProps extends ComponentPropsWithoutRef<"div"> {
  matchHeight?: boolean;
}

const ImageRow = ({ matchHeight, ...props }: ImageRowProps) => (
  <Flex
    gap={4}
    justifyContent="center"
    flexWrap="wrap"
    {...props}
    className="image-row"
    data-match={matchHeight ? "height" : "width"}
  />
);

export default ImageRow;
