import { useEffect, useRef, useState } from "react";
import { Box, Spinner, chakra } from "@chakra-ui/react";
import { RefreshCw } from "lucide-react";

// Both cycles turn at the same 600°/s, so the only thing separating them is how
// often the icon passes a resting angle — which is the whole argument.
const FULL_TURN = "spin 0.6s linear infinite";
const HALF_TURN = "spin-half 0.3s linear infinite";

const button = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: "textAccent",
  bg: "background",
  border: "1",
  borderRadius: 1,
  paddingX: "10px",
  paddingY: "6px",
  fontSize: "1",
  cursor: "pointer",
  _hover: { bg: "backgroundAccent" },
} as const;

interface IconProps {
  isLoading: boolean;
}

interface RefreshIconProps {
  animation?: string;
  onAnimationStart?: () => void;
  onAnimationIteration?: () => void;
}

// The animation lives on a wrapper so the transform turns the icon alone, and
// not the button's border and padding with it.
const RefreshIcon = (props: RefreshIconProps) => (
  <chakra.span display="inline-flex" {...props}>
    <RefreshCw />
  </chakra.span>
);

// The state the post starts from: the icon you clicked disappears for the
// duration of the load, replaced by a spinner that could mean anything.
const GenericIcon = ({ isLoading }: IconProps) =>
  isLoading ? <Spinner boxSize="1em" borderWidth="1.5px" /> : <RefreshIcon />;

// Spin for exactly as long as the load runs. The animation is smooth, but it is
// cut off at whatever angle the load happens to end on, and the icon snaps back.
const SnapBackIcon = ({ isLoading }: IconProps) => (
  <RefreshIcon animation={isLoading ? HALF_TURN : undefined} />
);

// The post's approach: `isSpinning` outlives `isLoading`, so a cycle that has
// started always finishes. `onAnimationIteration` is the only moment the icon is
// back at a resting angle, so it's the only moment we're allowed to stop.
const CompleteCycleIcon = ({
  isLoading,
  animation,
}: IconProps & { animation: string }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <RefreshIcon
      animation={isLoading || isSpinning ? animation : undefined}
      onAnimationStart={() => setIsSpinning(true)}
      onAnimationIteration={() => {
        if (!isLoading) setIsSpinning(false);
      }}
    />
  );
};

interface Variant {
  label: string;
  caption: string;
  Icon: (props: IconProps) => React.ReactNode;
}

const variants: Variant[] = [
  {
    label: "Generic",
    caption:
      "The icon is swapped out for a spinner. The feedback is immediate, but the affordance you clicked vanishes for the length of the load.",
    Icon: GenericIcon,
  },
  {
    label: "Snap back",
    caption:
      "The icon spins, but only while loading. It stops at whatever angle the load ended on and snaps back — the giveaway that the animation was never really tied to the work.",
    Icon: SnapBackIcon,
  },
  {
    label: "Full turn",
    caption:
      "Cycles finish before the icon rests, so it never snaps. But a full turn only reaches a resting angle every 0.6s, and the icon keeps going long after the data has landed.",
    Icon: ({ isLoading }) => (
      <CompleteCycleIcon isLoading={isLoading} animation={FULL_TURN} />
    ),
  },
  {
    label: "Buttoned up",
    caption:
      "The same speed over half the cycle. Two circular arrows look identical at 180°, so the icon rests twice as often — never snapping, and never overrunning the load by more than 0.3s.",
    Icon: ({ isLoading }) => (
      <CompleteCycleIcon isLoading={isLoading} animation={HALF_TURN} />
    ),
  },
];

const LoadingStateDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  const load = () => {
    if (isLoading) return;
    setIsLoading(true);
    // The premise of the whole problem: the load takes an amount of time we
    // can't know up front, so the animation can't be timed against it.
    timeout.current = setTimeout(
      () => setIsLoading(false),
      500 + Math.random() * 1000
    );
  };

  return (
    <Box border="1" borderRadius={1} paddingX={4} paddingY={3} marginY={5}>
      <chakra.p marginTop={0} fontSize="0.85em">
        Click any button. They all run the same load of the same unknown length,
        so watch how each one comes to rest.
      </chakra.p>

      <chakra.ul listStyleType="none" margin={0} padding={0}>
        {variants.map(({ label, caption, Icon }) => (
          <chakra.li
            key={label}
            display="flex"
            alignItems="flex-start"
            gap={3}
            paddingY={3}
            borderTop="1"
          >
            <chakra.button
              type="button"
              onClick={load}
              aria-label={`Refresh (${label})`}
              {...button}
            >
              <Icon isLoading={isLoading} />
            </chakra.button>
            <Box>
              <chakra.span
                display="block"
                color="textAccent"
                fontWeight={500}
                lineHeight={1.6}
              >
                {label}
              </chakra.span>
              <chakra.span display="block" fontSize="0.85em">
                {caption}
              </chakra.span>
            </Box>
          </chakra.li>
        ))}
      </chakra.ul>
    </Box>
  );
};

export default LoadingStateDemo;
