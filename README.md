# 31IV — Sitio del equipo

Web estática (HTML + CSS + JS puro, sin frameworks ni build step) para el equipo de Pokémon VGC **31IV**.

## Estructura

```
31iv-esports/
├── index.html      # Landing
├── roster.html      # Página de roster completo
├── styles.css        # Todos los estilos
├── script.js         # Menú móvil
└── README.md
```

## Cómo subirlo a GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `31iv-esports`).
2. En tu compu, dentro de esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Sitio inicial del equipo"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/31iv-esports.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source**, elegí la rama `main` y la carpeta `/ (root)`.
4. En un par de minutos el sitio va a estar en `https://TU-USUARIO.github.io/31iv-esports/`.

## Qué falta personalizar

- Nombres, roles, bios y Tera types reales de cada jugador en `index.html` y `roster.html`.
- Links reales de Discord / Twitter / Twitch (buscá el texto `href="#"`).
- Fecha del primer torneo en la sección "Registro de equipo".
- El nombre del equipo (`31IV`) y el tagline, si querés cambiarlos — están en el `<title>`, en `.brand` de ambas páginas, y en el `<h1>` del hero.

## Notas de diseño

- Tipografías: Rajdhani (títulos), Manrope (texto), JetBrains Mono (etiquetas/datos) — cargadas desde Google Fonts.
- El ícono en forma de cristal ("shard") representa la mecánica de Terastalización y es el elemento de firma visual del sitio.
- Los colores de los "Tera type chips" en el roster son ilustrativos — podés agregar más en `styles.css` bajo `/* type chip colors */`.
- No se usa ningún sprite, logo ni nombre oficial de Pokémon/Nintendo — todo el contenido visual es original, para evitar problemas de derechos de autor si publicás el sitio.
