# Fénix Academy — Sitio del equipo

Web estática (HTML + CSS + JS puro, sin frameworks ni build step) para el equipo de Pokémon VGC **Fénix Academy**.

## Estructura

```
fenix-academy/
├── index.html         # Landing
├── roster.html        # Página de roster completo
├── styles.css         # Todos los estilos
├── script.js          # Menú móvil
└── README.md
```

El escudo del equipo se carga directamente desde:
`https://raw.githubusercontent.com/FenixAcademyTeam/Sports/refs/heads/main/logo.png`
(no hace falta tener el archivo localmente, pero si ese repo cambia de nombre o de rama, hay que actualizar la URL en los `<img src="...">` y en el `<link rel="icon">` de ambas páginas).

## Cómo subirlo a GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `fenix-academy`).
2. En tu compu, dentro de esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Sitio inicial de Fénix Academy"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/fenix-academy.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source**, elegí la rama `main` y la carpeta `/ (root)`.
4. En un par de minutos el sitio va a estar en `https://TU-USUARIO.github.io/fenix-academy/`.

## Qué falta personalizar

- Nombres, roles, bios y Pokémon favorito real de los 3 jugadores en `index.html` y `roster.html`.
- Los links de **Pokepaste** de cada jugador — buscá `player-paste` y reemplazá el `href="#"` por la URL real (ej. `https://pokepast.es/xxxxxxxxxxxx`).
- Links reales de Discord / Twitter / Twitch (buscá el texto `href="#"`).
- Fecha del primer torneo en la sección "Registro de equipo".
- Los links de redes sociales de cada jugador (íconos vacíos por ahora).

## Notas de diseño

- **Paleta**: extraída del escudo — carmesí (`#e8214f`), negro casi puro y crema/dorado (`#f1c77a`) para acentos. Los valores están centralizados en `:root` al inicio de `styles.css`, así que cambiarlos ahí actualiza todo el sitio.
- **Tipografías**: Cinzel (títulos, con espíritu de escudo/academia), Manrope (texto), JetBrains Mono (etiquetas y datos) — cargadas desde Google Fonts.
- El escudo se carga desde el enlace de GitHub (ver arriba) y se usa en el header, el hero y el footer de ambas páginas.
- Cada jugador tiene un chip de **"Pokémon favorito"** en vez de Tera type (ahora que VGC se juega en Pokémon Champions). El color del chip sigue tomando el tipo de ese Pokémon como acento visual — podés agregar más colores en `styles.css` bajo `/* type chip colors */`.
- Cada jugador tiene un bloque de **Pokepaste** con un link a su equipo actual.
