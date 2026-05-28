const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const frameCount = 161;
//Ruta de las imágenes
const currentFrame = (index) => (
  `../assets/frame2/frame_${String(index + 1).padStart(4, "0")}.webp`
);

//Este es el controlador del render y hace que el canvas coincida con la pantalla, el render no se rompa, el frame actúal permanezca visible y el sistema sea responsivo
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();//render vuelve a dibujar en el canvas el frame actual
}
//le indica al navegador cuando haya u cambio de tamaño de pantalla, ejecuta el resizeCanvas, entonces si modificamos el tamaño de la pantalla y actualiamos la página, se ejecuta la función.
window.addEventListener("resize", resizeCanvas);

//creamos una array lleno de imágenes precargadas
const images = Array.from(//Array.from crea un nuevo array con 161 posiciones
  { length: frameCount },//frameCount = a la cantidad de frames total = 161
  
  (_, i) => {

    const img = new Image();//crea un elemento htmlImageElement en memoria no en la página (DOM)

    img.src = currentFrame(i);//generamos una imagen y se la asignamos al src

    return img;//en cada iteración una imagen cargada y terminamos obteniendo un array de imágenes
  }
);

//Creamos una variable que guarda que frame se esta mostrando actualmente
let currentFrameIndex = 0;//esto muestra la primera imagen

resizeCanvas();//Inicializamos el canvas para mostrar el primer frame en pantalla

function render() {

  //Obtenemos el frame actual
  const img = images[currentFrameIndex];//current guarda el indice actual de reproducción ej: 0 = frame_0001.webp, 35 = frame_0035.webp, etc

  //Validación de seguridad
  //si la imagen aun no existe o no termina de cargar, detenemos la ejecución para evitar errores, tambien evita errrores de timming 
  if (!img) return;
  //ClearRect limpia completamente lo dibujado en el canvas
  //Sin esto los frames quedarían dibujados uno arriba del otro
  context.clearRect(
    0,// x = 0
    0, //y = 0
    canvas.width, //ancho total del canvas
    canvas.height //alto total del canvas
  );
  //Calculamos los aspect-ratio
  //Esto nos permite saber si la imagen es mas ancha, si la pantalla es mas alta, como escalar  correctamente
  const canvasRatio =
    canvas.width / canvas.height;
  const imageRatio =
    img.width / img.height;

    //Variables de dibujo
  let drawWidth;//ancho final renderizado
  let drawHeight;//alto final renderizado
  let x;//Posición horizontal
  let y;//Posición vertical

  if (imageRatio > canvasRatio) {
    drawHeight = canvas.height;
    drawWidth =
      img.width * (drawHeight / img.height);
    x = (canvas.width - drawWidth) / 2;
    y = 0;
  } else {
    drawWidth = canvas.width;
    drawHeight =
    img.height * (drawWidth / img.width);
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

const fps = 30;

const frameDuration = 1000 / fps;

let lastTime = 0;

function animate(timestamp) {

  if (timestamp - lastTime >= frameDuration) {

    render();

    const progress =
      currentFrameIndex / (frameCount - 1);

    let opacity = 1;
    // Fade In
    if (progress < 0.50) {
      opacity = progress / 0.15;
    }
    // Fade Out
    else if (progress > 0.90) {
      opacity =
        (1 - progress) / 0.15;
    }

    canvas.style.opacity = opacity;

    currentFrameIndex++;

    if (currentFrameIndex >= frameCount) {
      currentFrameIndex = 0;
    }
    lastTime = timestamp;
  }
  requestAnimationFrame(animate);
}

images[0].onload = () => {
  render();
  requestAnimationFrame(animate);
};

gsap.to(".title", {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 2,
  ease: "power3.out",
});
gsap.to(".description", {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 2,
  ease: "power3.out",
});