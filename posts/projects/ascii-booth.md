---
title: "ASCII Booth"
date: "2019-07"
url: "https://zeke.studio/work/ascii-booth/"
isVisible: true
summary: "A nostalgic piece of old technology — the dot matrix printer — is recontextualized as an instant ASCII art selfie booth."
---

<Notice>

The content of this project was originally posted on Zeke Wattles' portfolio site. It has been pasted here.

</Notice>

# Backstory

After finishing my Dublab concept project, I hit up Mark and Ale and arranged a visit to the Dublab studio to share the work. Unfortunately, they had announced a new brand and website exactly the same time I had finished my project. But they liked the energy, and I was eager to make something real.

Ale loved the dot matrix printer but wasn’t convinced by the poster generator. He asked if we could turn it into a photo booth. I didn’t know how we would, but I said yes.

# Photobooth

## ASCII

The ASCII art is both aesthetic and functional. Dot matrix printers are designed for printing plain text documents. I learned from my previous project that printing anything else was incredibly slow, and forcing people to wait too long for their photo to print wasn’t ideal. I also learned that plain text printing worked only from a Windows machine.

## Interface

The interface shows you what will print. It converts the webcam image to text using JavaScript, and pauses and downloads the current page as a text file when a button is pressed. I styled the page in CSS.

What you don’t see is the footer. Since the whole thing is text, there’s a unique built-in opportunity for messaging: event name, time stamp, sponsors, secret codes, and ASCII logos. The footer can be changed for each event.

## Physical Build

I built the booth out of MDF to fit the dimensions of the printer. A set of caster wheels at the bottom makes it easy to transport. The booth is built like a shelving unit, with flat shelves for the laptop and printer, and a drawer in between to house the button and hide the Arduino and wiring behind it.

# Hello, world

## First Run: Grad Show

The ArtCenter Grad Show is a chance for hardworking students to display the work they feel best represents them, and hopefully will land them a job. I am interested in both graphic design and interaction, and wanted to show something event-specific with a personalized take-away. Who needs another tote bag?

It was the most Instagrammed part of the grad show and there were crowds around for the whole event. For me, seeing the genuine excitement of participants was the best part of the weekend.

## Second Run: Dublab’s 20th Anniversary Weekend

The Grad Show was also the first real user testing for the booth. For the Dublab event, Ali joined me, and here are some of the problems we solved:

- There was a bug with photos double-printing, or not at all. It turned out to be an issue with Chrome in full-screen mode, so we didn’t do that.
- When we prototyped the booth, the “print” button was a UI element on screen accompanied by text instructions. When I added the Arduino button and told people to “press the big button”, half of users were confused as to which button I meant — physical or UI? The solution was to remove the UI button and all text instructions.
- Users always asked “what is this?” and “how does this work?” Initially, we gave a long explanation. After the end of the weekend, our verbal instructions went from 1-2 minutes to 10 seconds.

# The Future

Dublab has expressed interest in doing more events. A permanent home in a public/retail space would be great, too.

With a larger budget, the booth 2.0 would:

- Use a built-in screen connected to a Raspberri Pi instead of a laptop.
- Have a built-in flash or ring light.
- Be self-sufficient. Currently, the dot matrix printer can jam unpredictably and a booth operator needs to be present.
