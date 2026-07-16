---
title: "Buttoned Up: Perfecting a Loading State"
date: "2026-07-15"
summary: "Thinking through and implementing the details of a button's loading state."
imgUrl: "/images/articles/buttoned-up/overview.png"
---

<Video source="/images/articles/buttoned-up/final.mp4" />

# Why a generic loading state is insufficient

After implementing a shared refresh button, I noticed that clicking it had a rather undesirable effect - the feedback was immediate, but not satisfactory. The button was using a generic loading state, which was suitable for other cases (saving, fetching more data, etc), but because of this specific button's context and icon, I thought it could be better.

<Video source="/images/articles/buttoned-up/original.mp4" />

# What we can improve

The button displays a refresh icon (circular arrows), which I think should spin when clicked. Since we don't know how long the load will take, we need to make sure the animation is smooth, continuous, and doesn't terminate unexpectedly. We wouldn't want the icon to spin some arbitrary amount, then snap back to its original position. We also want to balance the animation speed with the understanding that a full 360° rotation might take substantially longer than a load cycle, and could feel non-performant. The animation should feel like it's in sync with the load, complete, fast, and smooth.

# How to implement the solution

## Smooth and continuous animation

To make the animation smooth and continuous, we can use a CSS animation that rotates the icon indefinitely. This can be achieved with keyframes that define a specific rotation over a set duration.

## Non-interrupted rotation

We use react state to track whether the button should be spinning. When the button is clicked, loading is set to `true`, which starts the animation. We use `onAnimationStart` to set the `isSpinning` state to `true`, ensuring that the animation continues even if the loading state changes. The `onAnimationIteration` event is used to check if loading has completed, and if so, we set `isSpinning` back to `false`, allowing the animation to complete its current cycle before stopping.

## Performant feel

Since we need to balance a complete animation cycle with the load time, we can set the animation duration to a reasonable value (e.g., 0.3s), but we make the animation only 180° per cycle. This way, the icon will spin quickly enough to feel responsive, but is still able to halt quickly (at most 0.3s after the load completes) without feeling too slow. If the animation was a full 360° rotation, the longest post-load-complete animation would be 0.6s, which would feel sluggish. By limiting the rotation to 180°, we ensure that the animation feels snappy and responsive.

```tsx
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(180deg); }
`;

export function RefreshButton(props: RefreshButtonProps): React.ReactNode {
  const { isLoading, ...rest } = props;
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <IconButton
      icon={
        <Box
          animation={
            isLoading || isSpinning ? `${spin} 0.3s linear infinite` : undefined
          }
          onAnimationStart={() => setIsSpinning(true)}
          onAnimationIteration={() => {
            if (!isLoading) {
              setIsSpinning(false);
            }
          }}
        >
          <RefreshCw />
        </Box>
      }
      {...rest}
    />
  );
}
```
