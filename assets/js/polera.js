gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 121;

const currentFrame = (index) => (
  `../assets/frame/frame_${String(index + 1).padStart(4, "0")}.png`
);

const images = [];

const sequence = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {

  const img = new Image();

  img.src = currentFrame(i);

  images.push(img);
}

images[0].onload = render;

function render() {

  context.clearRect(0, 0, canvas.width, canvas.height);

  const img = images[sequence.frame];

  // mantener proporción
  const scale = Math.max(
    canvas.width / img.width,
    canvas.height / img.height
  );

  const x = (canvas.width / 2) - (img.width / 2) * scale;
  const y = (canvas.height / 2) - (img.height / 2) * scale;

  context.drawImage(
    img,
    x,
    y,
    img.width * scale,
    img.height * scale
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