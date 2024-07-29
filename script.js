function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locoScroll();

document.addEventListener("mousemove", function (dets) {
  gsap.to(".cursor", {
    top: dets.y,
    left: dets.x,
    // duration: 0.1,
  });
});

function page1Text() {
  var text = "We are brain.space. The Brain Data Company";

  var splittedText = text.split("");

  var clutter = "";

  splittedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });

  var h1Text = document.querySelector(".homepage h1");
  h1Text.innerHTML = clutter;

  gsap.to(".homepage h1 span", {
    display: "initial",
    stagger: 0.1,
  });
}

page1Text();

function page1Animation() {
  gsap.to(".bgvideo", {
    filter: "blur(15px)",
    transform: "scaleX(0.9)",
    scrollTrigger: {
      trigger: ".homepage",
      scroller: ".main",
      // markers: true,
      start: "top 0",
      end: "top -60%",
      scrub: true,
      delay: 1,
    },
  });

  gsap.to(".hometext", {
    filter: "blur(15px)",
    transform: "scaleX(0.9)",
    scrollTrigger: {
      trigger: ".homepage",
      scroller: ".main",
      // markers: true,
      start: "top 0",
      end: "top -60%",
      scrub: true,
      delay: 1,
    },
  });
}

page1Animation();

function navAnimation() {
  gsap.to(".right", {
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".navbar",
      scroller: ".main",
      start: "top 0",
      end: "top -10%",
      scrub: true,
    },
  });

  gsap.to(".navbar i", {
    display: "block",
    scrollTrigger: {
      trigger: ".navbar",
      scroller: ".main",
      start: "top -20%",
      end: "top -20%",
      scrub: true,
    },
  });
}

navAnimation();

function page2Animation() {
  gsap.to(".page2 img", {
    transform: "translateY(-50%) translateX(69%)",
    duration: 10,
    repeat: -1,
    ease: "none",
  });
}

page2Animation();

var page4Timel = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4-content-1 h1",
    scroller: ".main",
    start: "top 80%",
    end: "top -10%",
    scrub: 2,
  },
});

page4Timel.from(".page4-content-1 h1", {
  y: 50,
  scale: 1.15,
  opacity: 0,
  duration: 0.8,
});

page4Timel.from(".page4-content-1 p", {
  y: 50,
  scale: 1.15,
  opacity: 0,
  duration: 0.8,
});

page4Timel.from(".page4-content-1 button", {
  y: 50,
  scale: 1.15,
  opacity: 0,
  duration: 0.8,
});

page4Timel.from(
  ".content-2-left h5",
  {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.8,
  },
  "same"
);

page4Timel.from(
  ".content-2-right",
  {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.8,
  },
  "same"
);

var page4Timel2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4-content-3",
    scroller: ".main",
    start: "top 90%",
    end: "top -10%",
    scrub: 2,
  },
});

page4Timel2.from(
  ".content-3-left",
  {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.8,
  },
  "sam"
);

page4Timel2.from(
  ".content-3-right",
  {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.8,
  },
  "sam"
);

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page5",
    scroller: ".main",
    start: "top 0",
    end: "top -100%",
    scrub: 3,
    pin: true,
  },
});

tl5.to(
  ".page5-content",
  {
    transform: "translateX(-90%)",
  },
  "page5"
);
tl5.to(
  ".page5 .slider-in",
  {
    x: 650,
  },
  "page5"
);

document.querySelector(".page8").addEventListener("mousemove", function (dets) {
  document.querySelector(
    ".page8"
  ).style.background = `conic-gradient(at ${dets.x}px ${dets.y}px,rgb(255, 228, 233),aliceblue,rgb(205, 243, 255),rgb(195, 255, 195),lightyellow,rgb(251, 226, 230))`;
});
