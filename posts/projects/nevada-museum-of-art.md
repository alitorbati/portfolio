---
title: "Nevada Museum of Art"
date: "2021-04"
url: "https://www.nevadaart.org/conference2021/"
summary: "Art + Environment 2021 — Land Art: Past, Present, Futures."
---

<Video source="/images/projects/nevada-museum-of-art/overview.mp4" />

In early 2021, I was contacted by frequent collaborator [Zeke Wattles](https://zeke.studio) and [ArtCenter](https://www.artcenter.edu/) director [Brad Bartlett](http://bradbartlett.com). They invited me to participate in the process of designing and building a microsite for [Nevada Museum of Art's](https://nevadaart.org/) upcoming [conference]("https://www.nevadaart.org/conference2021/"), Art + Environment — Land Art: Past, Present, Futures. We would be working with [Amy Oppio](https://www.linkedin.com/in/amy-oppio-15a27932/), COO and Deputy Director of the museum.

I was specifically asked to join because of my past work building interactive, generative experiences for digital and physical environments. This project was a great opportunity to bridge the often-exclusive domains of physical land art and digital interactivity.

# Design concepts

Over several weeks the group met to discuss technical requirements (conference speakers, times, etc) and broader themes (land as art, shifting environments, etc). Since the theme of the exhibit was land art, we wanted to make the user experience reflective of that - to bring site visitors into the land space, instead of leaving them statically in-place behind a screen.

To make the site more expressive and interactive than a traditional website, we employed generative design philosophies - connecting unexpected pairings of inputs and outputs - to produce a site unlike any other. Through much experimentation and discussion we landed on several key details that brought the site to life:

## Windspeed flag

<Video source="/images/projects/nevada-museum-of-art/windspeed.mp4" />

We access a realtime weather API to determine the current windspeed in Reno, NV (where Nevada Museum of Art is located), and use that value to dynamically move a digital flag on the user's screen. The flag is unique for each visitor, and for each visit. Viewing the site at 9am would likely be very different from visiting at 9pm; during a rainstorm would be different from during a sunny day.

The digital flag responds dynamically to the real world and brings that connection to visitors, no matter where they are physically located. In the same way that a physical flag would reflect its environmental conditions and visually convey that information to a nearby viewer, our digital flag conveys information to site visitors, allowing them to step into a world they otherwise wouldn't be able to access without a plane ticket.

## Perspective text

<Video source="/images/projects/nevada-museum-of-art/text.mp4" />

To further bring users into the space, we use their current pointer position to adjust the perspective of header elements. Like people engaging with their environment, direct actions inevitably have side-effects and real impact on space.

Here, the ubiquitous and necessary act of moving a pointing device around a website has the effect of shifting the digital environment. The aim was to incorporate an unobtrusive detail to remind users that they are indeed an active part of their environment, and that space around them is not static, but in fact dynamic and always susceptible to change.

## Dynamic colors

<Video source="/images/projects/nevada-museum-of-art/accents.mp4" />

Finally, the website's accent color gradually shifts as the user scrolls the page. The change is subtle to the point of being nearly imperceptible, as is often the case with changes in physical space. By the time the user reaches the bottom of the page, the primary and secondary accent colors have reached completely different values from where they started.

# Technical details

## Polling for data

In order for windspeed to adjust dynamically even if the user is on the page for a while, an API is polled once per second. The realtime windspeed value is parsed and used to update the flag's current speed.

## Off-canvas animation

Since processing the flag's movement is computationally expensive, we pause all API calls, value calculations, and rendering when the flag is off-screen. This allows us to allocate resources to the flag when it is the prominent design element, then save computational cycles when the user is no longer interacting with the flag. If the flag is scrolled back into view, all behaviors resume as before.

## Using CSS variables

The perspective text and dynamic accent color effects are surprisingly simple to achieve.

For perspective, we have two CSS variables defined: `--rotateX` and `--rotateY`. On `mousemove`, those CSS variable values are updated and the corresponding elements' styles are updated on the fly.

For accent colors, we calculate the scroll position as a percentage of the total document length, and map that value to a 360° hue scale. As the user scrolls, the current hue value is adjusted and the CSS variable value is updated.

# Recognition

## Awards

This project was featured in [Communication Arts](https://www.commarts.com/project/34606/art-environment-conference) as a noteworthy Art/Design contribution. The project went on to win an [award](https://www.instagram.com/p/CicqGWlu32R/) from the same publication.

## Work quality

Amy, who wrote the copy for the conference and represented Nevada Museum of Art throughout the process, had these kind words to share:

> I just love working with you both. So easy and the work always gets better with each version. Thank you for your patience and attention to detail.
>
> — Amy Oppio
