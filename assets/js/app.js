const titulo = document.getElementById("titulo");

const texto = titulo.textContent;

titulo.innerHTML = texto
  .split("")
  .map(letra => {
    if (letra === " ") {
      return `<span class="char">&nbsp;</span>`;
    }
    return `<span class="char">${letra}</span>`;
  }).join("");

gsap.from(".char", {
  opacity: 0,
  y: 80,
  duration: 1,
  ease: "power4.out",
  stagger: 0.05,
});

gsap.to(".box", {
  duration: 4,
  ease: "power2.out",
  scale: 1.2,
});

gsap.to(".mountains",{
  y: -100,
  scale: 1.3,
  duration: 4
})

gsap.from(".hero-content h1", {
  y: 100,
  opacity: 0,
  duration: 1.2,
});