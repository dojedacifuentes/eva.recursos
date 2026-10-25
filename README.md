# EVA · Recursos de IA y Derecho

Repositorio abierto que reúne en un solo catálogo los materiales de EVA para docentes y estudiantes de Derecho:
cursos, lecciones, juegos, guías, prompts y paquetes para el aula virtual. Cada recurso tiene una **ficha** con su
público, objetivos, licencia, estado de revisión y dónde usarlo.

No copia los recursos: los describe y enlaza a donde viven (EVA ACADEMY, EVA LAB, EVA × Derecho PUCV, EVA ARCADE…).

## Cómo está hecho

| Pieza | Qué es |
|---|---|
| [Astro](https://astro.build) | Sitio estático; cada ficha es un Markdown en `src/content/recursos/` validado por `src/content.config.ts` |
| [Pagefind](https://pagefind.app) | Búsqueda de texto completo, sin servidor |
| LRMI / schema.org | Cada ficha publica sus metadatos educativos (JSON-LD) para buscadores y otros repositorios |
| Modelo editorial | Propuesta → revisión → publicación, como [The Programming Historian](https://programminghistorian.org/es/) |

## Uso

```bash
npm install
npm run dev      # http://localhost:4321 (la búsqueda solo funciona tras construir)
npm run build    # sitio en dist/ + índice de búsqueda
```

## Agregar un recurso

1. Copia la plantilla de [`docs/PLANTILLA-FICHA.md`](docs/PLANTILLA-FICHA.md) en `src/content/recursos/<nombre>.md`.
2. `npm run build` valida los campos.
3. Abre un pull request; ver [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Documentos

- [`docs/INVENTARIO.md`](docs/INVENTARIO.md): qué se revisó, qué se catalogó, qué espera y qué no se publica.
- [`docs/PLANTILLA-FICHA.md`](docs/PLANTILLA-FICHA.md): campos de la ficha y lista de revisión.
- `scripts/fichas-iniciales.mjs`: generó las 33 fichas iniciales (no volver a correrlo sobre fichas editadas).

## Licencia

El código del sitio queda por licenciar (propuesta: MIT). Cada recurso declara su propia licencia en su ficha;
mientras diga «Por definir», se puede usar en clase pero no redistribuir.
