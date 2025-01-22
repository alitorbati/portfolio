---
title: "Parallaxify"
date: "2015-09"
url:
  title: "See the code"
  url: "https://github.com/alitorbati/parallaxify"
summary: "A JavaScript module to easily produce a parallax image effect."
imgUrl: "/images/sketches/parallaxify/demo.gif"
---

![Demo](/images/sketches/parallaxify/demo.gif)

While building a microsite for a family member I wanted to include an elegant parallax image effect on scroll. A parallax effect is when an image appears to scroll slightly faster than the rest of the page, producing a subtle shifting/drifting sensation.

Notice in the above gif that the mountains and horses' heads approach the top of the image faster than the image approaches the top of the frame.

I wasn't able to find a simple, reusable solution so I created my own and published it for anyone to use.

This little snippet is super-lightweight and requires zero dependencies. I hadn't touched the code in years, but I revisited it for this writeup and really realized how much I've learned. I was able to reduce the lines of codes by 65% (from 55 to 23 lines). The minified version shrunk 59% (from 932 to 374 Bytes).

A diff of the before/after can be found [on Github](https://github.com/alitorbati/parallaxify/compare/db72ae89af743638e1cc647be7adeecae42bf71a...ef5d8c0db5cdd3af820960c6f3011568988ba45e#diff-23c0029469889253cca40d7b44aa24b027b105d86f3bace22b5f14f71e61e3c1), but I'll share a few key improvements below.

## Pure functions

Instead of defining `percentSeen` inside the `for` loop and referencing an external variable (`element`), define `percentSeen` once and accept an argument (`el`).

### Before

```js
for (let i = 0; i < elements.length; i++) {
 let element = elements[i]
 let elementOffsetTop = element.offsetTop

 function percentSeen () {
   let distance = (winScrollTop + viewportHeight) - elementOffsetTop
   ...
 }
}
```

### After

```js
function getPercentSeen(el) {
 let distance = window.scrollY + window.innerHeight - el.offsetTop
 ...
}

for (let i = 0; i < elements.length; i++) {
   const el = elements[i];
   el.style.backgroundPositionY = `${getPercentSeen(el)}%`;
   ...
}

```

## Improved clamping

Instead of the classic `if (someTrueThing) return true; else return false` pattern, I return a clamped number based directly on the source value.

### Before

```js
if (percentage < 0) return 0;
else if (percentage > 100) return 100;
else return percentage;
```

### After

```js
return Math.min(Math.max(percentage, 0), 100); // clamp between 0 and 100
```

## Reference values directly

Previously, I jumped through hoops to define and maintain the `viewportHeight` variable when the script was initialized or the window was resized. A simpler approach is to just reference the underlying `window.innerHeight` value directly as-needed, and not worry at all about syncing another variable. If the window is resized, the up-to-date value is used.

### Before

```js
let viewportHeight = 0

let updateWindowCalcs = function () {
  viewportHeight = window.innerHeight
}

updateWindowCalcs()

window.addEventListener('resize', function(){
  updateWindowCalcs()
})

function percentSeen () {
  ...
  let distance = (winScrollTop + viewportHeight) - elementOffsetTop
  ...
}
```

### After

```js
function getPercentSeen(el) {
  let distance = window.scrollY + window.innerHeight - el.offsetTop;
  ...
}
```

## Function naming

Use naming conventions to indicate if a function is getting or setting a value.

### Before

```js
function percentSeen () {...}

element.style.backgroundPositionY = percentSeen()+'%'
```

### After

```js
function getPercentSeen(el) {...}

el.style.backgroundPositionY = `${getPercentSeen(el)}%`;
```
