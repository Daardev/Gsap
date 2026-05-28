gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 121;

const currentFrame = (index) => (
  `../assets/frame/frame_${String(index + 1).padStart(4, "0")}.webp`
);

const sequence = {
  frame: 0
};

const images = [...Array(frameCount)].map((_, i) => {
  const img = new Image();
  img.src = currentFrame(i);
  return img;
});

images[0].onload = render;

function render() {
  const img = images[sequence.frame];
  if (!img) return;
  context.clearRect(0, 0, canvas.width, canvas.height);
  const canvasRatio = canvas.width / canvas.height;
  const imageRatio = img.width / img.height;
  let drawWidth;
  let drawHeight;
  let x;
  let y;
  // COVER STYLE (tipo background-size: cover)
  if (imageRatio > canvasRatio) {
    drawHeight = canvas.height;
    drawWidth = img.width * (drawHeight / img.height);
    x = (canvas.width - drawWidth) / 2;
    y = 0;
  } else {
    drawWidth = canvas.width;
    drawHeight = img.height * (drawWidth / img.width);
    x = 0;
    y = (canvas.height - drawHeight) / 2;
  }

  context.drawImage(
    img,
    x,
    y,
    drawWidth,
    drawHeight
  );
}

gsap.to(sequence, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=4000",
    scrub: 1,
    pin: true,
    markers: true
  },
  onUpdate: render
});

gsap.to(".title", {
  opacity: 1,
  y: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "h1",
    start: "top top",
    scrub: 1
  }
});

gsap.from(".description", {
  opacity: 1,
  y: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".h1",
    start: "top top",
    scrub: 1
  }
});