# Fénix Academy — Sitio del equipo

Web estática (HTML + CSS + JS puro, sin frameworks ni build step) para el equipo de Pokémon VGC **Fénix Academy**.

## Estructura

```
fenix-academy/
├── index.html         # Landing
├── roster.html        # Página de roster completo
├── styles.css         # Todos los estilos
├── script.js          # Menú móvil
├── assets/
│   └── logo.png        # Escudo del equipo
└── README.md
```

## Qué falta personalizar

- Nombres, roles, bios y Tera types reales de los 3 jugadores en `index.html` y `roster.html`.
- Links reales de Discord / Twitter / Twitch (buscá el texto `href="#"`).
- Fecha del primer torneo en la sección "Registro de equipo".
- Los links de redes sociales de cada jugador (íconos vacíos por ahora).

## Notas de diseño

- **Paleta**: extraída del escudo — carmesí (`#e8214f`), negro casi puro y crema/dorado (`#f1c77a`) para acentos. Los valores están centralizados en `:root` al inicio de `styles.css`, así que cambiarlos ahí actualiza todo el sitio.
- **Tipografías**: Cinzel (títulos, con espíritu de escudo/academia), Manrope (texto), JetBrains Mono (etiquetas y datos) — cargadas desde Google Fonts.
- El escudo (`assets/logo.png`) tiene fondo transparente y se usa en el header, el hero y el footer de ambas páginas.
- Los colores de los "Tera type chips" en las tarjetas de jugadores son ilustrativos del tipo Pokémon de cada uno (no del branding del equipo) — podés agregar más en `styles.css` bajo `/* type chip colors */`.
