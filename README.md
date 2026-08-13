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
