---
title: "HEIRS Entertainment"
date: "2020-08"
url: "https://heirs.us"
summary: '"Black-owned mixed media vernacular of choice for pain and struggle."'
---

<Video source="/images/projects/heirs-entertainment/overview.mp4" />

# Intro

The incredibly talented team at [HEIRS Entertainment](https://heirs.us/) got in touch about designing and building a site that did their work justice. They have produced music and videos for Mez, J. Cole, Isaiah Rashad, SiR, and more, as well as high profile projects for Netflix, Nike, and Puma.

They needed something built from scratch, quickly, and without compromising on their signature style. We were tasked with bringing their work online in a way that's true to the HEIRS philosophy. Our team (myself, [Zeke Wattles](https://zeke.studio), and [Alicia Rangel](https://www.linkedin.com/in/rangel-alicia/)) got to work.

# Challenges

Throughout the project we encountered several constructive challenges. The creative input from the HEIRS team pushed us to think creatively about how to solve uncommon problems. As a result, we produced some unique interactions and strong identifying characteristics for the site.

## Boomerang previews

<Video source="/images/projects/heirs-entertainment/boomerang.mp4" />

The first big challenge was the boomerang-style videos. The clients were insistent that when hovered, the video previews should a) play sound, and b) boomerang. This posed an immediate issue - playing audio forwards and backwards would sound awful. If we were to hover the video and play a few seconds forward then a few seconds backward as the client wanted, we were sure the result would be unsatisfactory and not up to either party's standards.

After giving it some thought, we had a breakthrough: By decoupling the video and audio, we could play the video forwards and backwards while letting the audio track play straight through. Another benefit of this approach was that it allowed us to arbitrarily pick the best independent audio and video snippets for the preview, even if they didn't happen to coincide in the actual published work.

As is often the case, our breakthrough seems obvious in hindsight. But at the time it was well-received as a clever solution to the problem, and it holds up.

## Polygon mask

![J. Cole in "a m a r i"](/images/projects/heirs-entertainment/shape.png)

The second major challenge was more technical than conceptual. The clients wanted a branded shape to frame each video preview, but the "grain of the web" doesn't easily allow for non-rectangular shapes to mask videos. Of course we could have edited the video previews to include the shapes, but that would have made future updates more cumbersome and possibly inconsistent. Also, if the masked shape was included in the video source instead of the code, we would be super tied-in to this design direction in the future.

Our solution was to use the CSS property `clip-path` to reference an SVG embedded in the webpage. The SVG included the desired shape, and we use that shape to mask videos. In the future if we want to change that shape or remove it entirely, we will be able to do so with minimal code changes and no further video editing.

# Outro

The HEIRS site is an open conversation and ongoing effort. Check in for updates :)
