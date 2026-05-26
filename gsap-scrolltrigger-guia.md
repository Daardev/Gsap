# GSAP ScrollTrigger — Guía de Propiedades

```js
/*
|--------------------------------------------------------------------------
| SCROLLTRIGGER - PROPIEDADES MÁS UTILIZADAS
|--------------------------------------------------------------------------
|
| trigger:
| Elemento que activa el ScrollTrigger.
|
| Ejemplo:
| trigger: ".section"
|
|--------------------------------------------------------------------------
|
| start:
| Define cuándo inicia la animación.
|
| Sintaxis:
| "posiciónTrigger posiciónViewport"
|
| Ejemplos:
| start: "top top"
| start: "top center"
| start: "center bottom"
|
|--------------------------------------------------------------------------
|
| end:
| Define cuándo termina la animación.
|
| Ejemplos:
| end: "bottom bottom"
| end: "+=3000"
|
| "+=3000" significa:
| agregar 3000px adicionales de scroll.
|
|--------------------------------------------------------------------------
|
| scrub:
| Sincroniza la animación con el scroll.
|
| Valores:
| scrub: true    -> sincronización inmediata
| scrub: 1       -> suaviza 1 segundo
| scrub: 2       -> más suavizado
|
| Muy útil para:
| - videos
| - parallax
| - efectos cinematic
|
|--------------------------------------------------------------------------
|
| pin:
| Fija el elemento mientras ocurre la animación.
|
| Valores:
| pin: true
| pin: ".container"
|
| Muy usado en:
| - secciones tipo Apple
| - storytelling
| - videos fullscreen
|
|--------------------------------------------------------------------------
|
| markers:
| Muestra guías visuales de debugging.
|
| Ejemplo:
| markers: true
|
| Muestra:
| - start
| - end
| - trigger
|
|--------------------------------------------------------------------------
|
| toggleActions:
| Controla qué ocurre al entrar/salir del trigger.
|
| Sintaxis:
| "onEnter onLeave onEnterBack onLeaveBack"
|
| Ejemplo:
| toggleActions: "play reverse play reverse"
|
| Acciones posibles:
| - play
| - pause
| - resume
| - reverse
| - restart
| - reset
| - complete
| - none
|
|--------------------------------------------------------------------------
|
| pinSpacing:
| Controla si GSAP agrega espacio después del pin.
|
| Ejemplo:
| pinSpacing: false
|
| Útil para:
| - layouts personalizados
| - overlays
|
|--------------------------------------------------------------------------
|
| anticipatePin:
| Reduce saltos visuales al iniciar pin.
|
| Ejemplo:
| anticipatePin: 1
|
|--------------------------------------------------------------------------
|
| fastScrollEnd:
| Fuerza terminar animaciones si el usuario
| hace scroll muy rápido.
|
| Ejemplo:
| fastScrollEnd: true
|
|--------------------------------------------------------------------------
|
| invalidateOnRefresh:
| Recalcula valores al hacer resize.
|
| Muy importante para:
| - responsive
| - layouts dinámicos
|
| Ejemplo:
| invalidateOnRefresh: true
|
|--------------------------------------------------------------------------
|
| once:
| Ejecuta la animación solo una vez.
|
| Ejemplo:
| once: true
|
|--------------------------------------------------------------------------
|
| onEnter:
| Callback cuando entra al trigger.
|
| Ejemplo:
| onEnter: () => {
|   console.log("Entró");
| }
|
|--------------------------------------------------------------------------
|
| onLeave:
| Callback cuando sale del trigger.
|
|--------------------------------------------------------------------------
|
| onEnterBack:
| Callback al volver hacia arriba.
|
|--------------------------------------------------------------------------
|
| onLeaveBack:
| Callback al salir hacia arriba.
|
|--------------------------------------------------------------------------
|
| onUpdate:
| Se ejecuta constantemente durante el scroll.
|
| Muy útil para:
| - controlar videos
| - actualizar progreso
| - canvas animations
|
|--------------------------------------------------------------------------
|
| self.progress
| Valor entre 0 y 1 del progreso del trigger.
|
| Ejemplo:
| onUpdate: (self) => {
|   console.log(self.progress);
| }
|
|--------------------------------------------------------------------------
|
| self.direction
| Dirección del scroll.
|
| 1  -> bajando
| -1 -> subiendo
|
|--------------------------------------------------------------------------
|
| self.velocity
| Velocidad del scroll.
|
|--------------------------------------------------------------------------
|
| horizontal:
| Activa scroll horizontal.
|
| Ejemplo:
| horizontal: true
|
|--------------------------------------------------------------------------
|
| snap:
| Hace snap automático entre secciones.
|
| Ejemplo:
| snap: 1 / 4
|
| Muy usado en:
| - sliders
| - storytelling
| - fullscreen sections
|
|--------------------------------------------------------------------------
|
| preventOverlaps:
| Evita conflictos entre múltiples triggers.
|
|--------------------------------------------------------------------------
|
| id:
| Asigna un identificador al trigger.
|
| Ejemplo:
| id: "hero-video"
|
|--------------------------------------------------------------------------
|
| refreshPriority:
| Prioridad de cálculo al refrescar.
|
|--------------------------------------------------------------------------
|
| normalizeScroll:
| Normaliza comportamientos entre navegadores.
|
|--------------------------------------------------------------------------
|
| animation:
| Permite controlar un timeline/tween existente.
|
|--------------------------------------------------------------------------
|
| containerAnimation:
| Permite usar animaciones horizontales como scroll.
|
|--------------------------------------------------------------------------
|
| EJEMPLO COMPLETO
|--------------------------------------------------------------------------
*/

gsap.to("#video", {
  currentTime: 4,

  ease: "none",

  scrollTrigger: {
    trigger: ".video-section",

    start: "top top",
    end: "+=3000",

    scrub: 1,
    pin: true,

    markers: true,

    anticipatePin: 1,

    fastScrollEnd: true,

    invalidateOnRefresh: true,

    onUpdate: (self) => {
      console.log(self.progress);
    }
  }
});
```
