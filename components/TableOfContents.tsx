import { useState } from "react";
import { chakra } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { ArrowUpToLine, ArrowDownToLine } from "lucide-react";
import { MotionBox } from "./motion";
import type { Heading } from "../types/content";

// Shared look for the three stacked edge buttons. Column `alignItems: stretch`
// makes them share the widest button's width (the outline minimap).
const edgeButton = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "textAccent",
  bg: "background",
  border: "1",
  borderRadius: 1,
  _hover: { bg: "backgroundAccent" },
} as const;

const scrollToY = (top: number) => {
  // No explicit behavior: this inherits the root's CSS `scroll-behavior`, so it
  // stays smooth and still honors prefers-reduced-motion.
  window.scrollTo({ top });
};

interface TocListProps {
  headings: Heading[];
  onNavigate?: () => void;
}

const TocList = ({ headings, onNavigate }: TocListProps) => (
  <chakra.ol listStyleType="none" marginTop={2} marginBottom={0} marginLeft={0}>
    {headings.map((heading) => (
      <chakra.li
        key={heading.slug}
        marginBottom={1}
        marginLeft={heading.level > 1 ? 4 : 0}
      >
        {/* A native anchor, not next/link: a bare hash on next/link triggers a
            client route transition that remounts the page body (reloading the
            YouTube iframes). A plain anchor just scrolls. */}
        <chakra.a href={`#${heading.slug}`} onClick={onNavigate}>
          {heading.text}
        </chakra.a>
      </chakra.li>
    ))}
  </chakra.ol>
);

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [open, setOpen] = useState(false);

  // A one-line contents list adds nothing; only show it when there's real
  // structure to navigate.
  if (headings.length < 2) return null;

  return (
    // Hidden on small screens; a vertically-centered edge button otherwise.
    <chakra.div display={{ base: "none", md: "block" }}>
      <chakra.div
        position="fixed"
        left="0.75rem"
        top="50%"
        transform="translateY(-50%)"
        zIndex={20}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        gap="6px"
      >
        <chakra.button
          type="button"
          onClick={() => scrollToY(0)}
          aria-label="Scroll to top"
          {...edgeButton}
          paddingX="10px"
          paddingY="6px"
          fontSize="1.05em"
        >
          <ArrowUpToLine />
        </chakra.button>

        <chakra.button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Table of contents"
          aria-expanded={open}
          {...edgeButton}
          flexDirection="column"
          alignItems="flex-start"
          gap="4px"
          paddingX="10px"
          paddingY="10px"
        >
          {/* An abstract minimap of the outline: one line per heading, wider for
              sections and shorter/indented for subsections. */}
          {headings.map((heading) => (
            <chakra.span
              key={heading.slug}
              height="2px"
              borderRadius="full"
              bg="currentColor"
              width={heading.level > 1 ? "12px" : "20px"}
              marginLeft={heading.level > 1 ? "8px" : "0"}
            />
          ))}
        </chakra.button>

        <chakra.button
          type="button"
          onClick={() => scrollToY(document.documentElement.scrollHeight)}
          aria-label="Scroll to bottom"
          {...edgeButton}
          paddingX="10px"
          paddingY="6px"
          fontSize="1.05em"
        >
          <ArrowDownToLine />
        </chakra.button>
      </chakra.div>

      {open ? (
        /* Click-away backdrop. */
        <chakra.button
          type="button"
          aria-hidden
          tabIndex={-1}
          onClick={() => setOpen(false)}
          position="fixed"
          inset={0}
          zIndex={19}
          cursor="default"
        />
      ) : null}

      <AnimatePresence>
        {open ? (
          <MotionBox
            key="toc-panel"
            role="navigation"
            aria-label="Table of contents"
            // `y: "-50%"` lives in the motion state (not a CSS transform) so
            // framer keeps the panel vertically centered while animating x.
            // Chakra's CSS `transition` prop type collides with framer's on
            // MotionBox, so the timing lives inside each target instead.
            initial={{ opacity: 0, x: -8, y: "-50%" }}
            animate={{
              opacity: 1,
              x: 0,
              y: "-50%",
              transition: { duration: 0.1, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              x: -8,
              y: "-50%",
              transition: { duration: 0.08, ease: "easeIn" },
            }}
            position="fixed"
            left="3.75rem"
            top="50%"
            width="15rem"
            maxHeight="calc(100vh - 2rem)"
            overflowY="auto"
            bg="background"
            border="1"
            borderRadius={1}
            paddingX={4}
            paddingY={3}
            zIndex={20}
            boxShadow="0 4px 24px rgba(0, 0, 0, 0.25)"
          >
            <chakra.span
              display="block"
              color="text"
              fontSize="0.7em"
              fontWeight={600}
              paddingBottom={2}
              borderBottom="1"
            >
              Contents
            </chakra.span>
            <TocList headings={headings} onNavigate={() => setOpen(false)} />
          </MotionBox>
        ) : null}
      </AnimatePresence>
    </chakra.div>
  );
};

export default TableOfContents;
