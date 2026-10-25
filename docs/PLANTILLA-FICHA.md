# Plantilla de ficha

Copia este bloque en `src/content/recursos/<nombre-corto>.md` (minúsculas y guiones; ese nombre será la dirección
`/recursos/<nombre-corto>/`). Si un campo no aplica, bórralo. `npm run build` avisa si falta algo o si un valor no es válido.

```markdown
---
titulo: "Nombre del recurso"
resumen: "Una o dos frases (máx. 220 caracteres): qué es y para qué sirve."
tipo: "curso"            # curso, leccion, juego, actividad, guia, herramienta, prompts, video, paquete-lms, taller, lectura
publico: ["estudiantes", "docentes"]
ejes: ["verificar"]      # comprender, verificar, etica, practica, construir, ensenar
nivel: "inicial"         # inicial, intermedio, avanzado
duracion: "45 min"
formato: ["web", "PDF"]
proyecto: "EVA ACADEMY"
enlace: "https://…"      # dónde se usa; omitir si no está publicado
fuente: "github.com/… · ruta/al/original"
licencia: "CC BY 4.0"
autoria: ["Nombre Apellido"]
estado: "borrador"       # borrador, revision, publicado
actualizado: "2026-10-25"
objetivos: ["Verbo + lo que se logra", "…"]
etiquetas: ["citas", "jurisprudencia"]
avisos: ["Permisos pendientes, marcas de terceros, medios generados con IA…"]
destacado: false
---

## Qué trae

Contenido, unidades o partes.

## Cómo usarlo en clase

Una propuesta concreta: cuándo, cuánto tiempo y qué hacen los estudiantes.
```

## Antes de pasar a «publicado»

- [ ] Las normas, fallos y citas existen y dicen lo que el recurso afirma, con su fuente.
- [ ] El recurso enseña a verificar lo que produce la IA, no solo a usarla.
- [ ] Tiene licencia declarada y créditos de los medios de terceros.
- [ ] No tiene datos personales, de clientes ni material confidencial.
- [ ] Si usa voz o imagen de EVA, está anotado en `eva.proyecto01/docs/ASSET_LICENSES.md`.
