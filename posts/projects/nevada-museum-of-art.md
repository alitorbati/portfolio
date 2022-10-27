---
title: "Nevada Museum of Art"
date: "2021-04"
url: "https://www.nevadaart.org/conference2021/"
isVisible: true
summary: "Art + Environment 2021 — Land Art: Past, Present, Futures."
---

<Video source="/images/projects/nevada-museum-of-art/overview.mp4" />

In early 2021, I was contacted by frequent collaborator [Zeke Wattles](https://zeke.studio) and [ArtCenter](https://www.artcenter.edu/) professor [Brad Bartlett](http://bradbartlett.com). They invited me to participate in the process of designing and building a microsite for [Nevada Museum of Art's](https://nevadaart.org/) upcoming conference: [Art + Environment]("https://www.nevadaart.org/conference2021/") — Land Art: Past, Present, Futures. I was specifically asked to join because of my experience building interactive, generative digital and physical experiences.

# Process

Over several weeks the group met over Zoom to discuss desired outcomes. Since the theme of the exhibit was land art, we wanted to make the user experience reflective of that - to bring site visitors into the land space, instead of leaving them statically in-place behind a screen.

To make the site more expressive and interactive than a traditional website, we employed generative design philosophies - connecting unexpected pairings of inputs and outputs to produce a site unlike any other. Some key details are as follows:

## Windspeed flag

<Video source="/images/projects/nevada-museum-of-art/windspeed.mp4" />

We access a realtime weather API to determine the current windspeed in Reno, NV (where Nevada Museum of Art is located), and use that value to dynamically move a digital flag on the user's screen. The API is polled once per second, so windspeed adjusts dynamically even if the user is on the page for a while.

Since processing the flag's movement is computationally expensive, we pause all calculations and rendering when the flag is off-screen.

## Perspective text

<Video source="/images/projects/nevada-museum-of-art/text.mp4" />

To further bring users into the experience, we use their current pointer position to adjust the perspective of header elements. Like real people using their environments, direct actions may have unexpected side-effects. Here, the ubiquitous and necessary act of moving a pointing device around a website has the effect of shifting the digital environment. The aim was to incpororate an unobtrusive detail to remind users that they are indeed an active part of their environment, and that space around them is not static, but in fact dynamic and always susceptible to change.

This is a surprisingly simple effect to achieve. We have two CSS variables defined: `--rotateX` and `--rotateY`. On `mousemove`, those CSS variable values are updated and the corresponding elements' styles are updated on the fly.

## Dynamic accents

<Video source="/images/projects/nevada-museum-of-art/accents.mp4" />

Finally, the website's accent color gradually shifts as the user scrolls the page. The change is subtle to the point of being nearly imperceptible, as is often the case with real physical space.

Again, we used CSS variables to achieve this effect. We calculate the scroll position as a percentage of the total document length, and map that value to a 360° hue scale. As the user scrolls, the current hue value is adjusted and the CSS variable value is updated.

# Recognition

This project was featured in [Communication Arts](https://www.commarts.com/project/34606/art-environment-conference) as a noteworthy Art/Design contribution. The project went on to win an [award](https://www.instagram.com/p/CicqGWlu32R/) from the same publication.

Amy, who wrote the copy for the conference and represented Nevada Museum of Art throughout the process, had kind words to share:

> I just love working with you both. So easy and the work always gets better with each version. Thank you for your patience and attention to detail.
