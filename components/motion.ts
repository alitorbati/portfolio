import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Chakra v3 dropped its framer-motion dependency and `as={motion.div}` drops
// motion props (chakra-ui#2538). The `chakra()` factory wraps a motion component
// so it accepts both Chakra style props and framer-motion animation props.
export const MotionBox = chakra(motion.div);

// Chakra's own CSS `transition` prop type collides with framer-motion's
// `transition` config on MotionBox, so express stagger timing as a parent
// variant instead of the top-level `transition` prop.
export const staggerContainer: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.1 } },
};
