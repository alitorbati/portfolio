---
title: "Buttoned Up: Perfecting a Loading State"
date: "2026-07-15"
summary: "Thinking through and implementing the details of a button's loading state."
imgUrl: "overview.png"
---

![Button screenshot](overview.png)

# Why a generic loading state is insufficient

After implementing a shared refresh button, I noticed that clicking it had a rather undesirable effect - the feedback was immediate, but not satisfactory. The button was using a generic loading state, which was suitable for other cases (saving, fetching more data, etc), but because of this specific button's context and icon, I thought it could be better.

<Video source="original.mp4" />

# What can be improved

The button displays a refresh icon (circular arrows), which I think should spin when clicked. Since we don't know how long the load will take, we need to make sure the animation is smooth, continuous, and doesn't terminate unexpectedly. We wouldn't want the icon to spin some arbitrary amount, then snap back to its original position. We also want to balance the animation speed with the understanding that a full 360° rotation might take substantially longer than a load cycle, and could feel non-performant. The animation should feel like it's in sync with the load, complete, fast, and smooth.

# Try it yourself

Here's an interactive example of the principles addressed in this article. Each button below is the refresh button at a different stage of the reasoning, from the generic state I started with to the final one I shipped.

<LoadingStateDemo />

# Implementing a solution

## Smooth and continuous animation

To make the animation smooth and continuous, we can use a CSS animation that rotates the icon indefinitely. This can be achieved with keyframes that define a specific rotation over a set duration.

## Continuous rotation

We use react state to track whether the button should be spinning. When the button is clicked, loading is set to `true`, which starts the animation. We use `onAnimationStart` to set the `isSpinning` state to `true`, ensuring that the animation continues even if the loading state changes. The `onAnimationIteration` event is used to check if loading has completed, and if so, we set `isSpinning` back to `false`, allowing the animation to complete its current cycle before stopping.

## Delightful speed and responsiveness

Since we need to balance a complete animation cycle with the load time, we can set the animation duration to a reasonable value (e.g., 0.3s), but we make the animation only 180° per cycle. This way, the icon will spin quickly enough to feel responsive, but is still able to halt quickly (at most 0.3s after the load completes) without feeling too slow. If the animation was a full 360° rotation, the longest post-load-complete animation would be 0.6s, which would feel sluggish. By limiting the rotation to 180°, we ensure that the animation feels snappy and responsive.

## Why a half rotation is enough

It's worth mentioning that the reason we can halve the rotation is due to the symmetry of the refresh icon. When the animation is removed, the element snaps straight back to `rotate(0deg)`; nothing holds it at the angle at which it stopped. We can get away with the half rotation because the refresh icon is perfectly symmetrical, so after a half rotation, each arrow has landed exactly where the other one started. The end of a cycle is indistinguishable from the beginning, and the reset we're relying on is invisible.

# The end result, in context

The final result is a refresh button that spins smoothly and continuously while loading, and stops spinning quickly after the load completes, providing a more satisfying user experience than the generic loading state. The animation feels responsive and in sync with the load, enhancing the overall interaction.

Other users reported finding themselves clicking the button multiple times just to experience the animation, which is a good sign that the new loading state is more pleasant and engaging than the previous one!

<Video source="final.mp4" />

## Sample code snippet

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
