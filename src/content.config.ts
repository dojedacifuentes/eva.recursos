// Una ficha por recurso: src/content/recursos/<slug>.md (plantilla en docs/PLANTILLA-FICHA.md).
// Los campos siguen LRMI / schema.org (LearningResource) para que buscadores y otros repositorios los lean.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const TIPOS = {
  curso: 'Curso',
  leccion: 'Lección',
  juego: 'Juego',
  actividad: 'Actividad interactiva',
  guia: 'Guía',
  herramienta: 'Herramienta',
  prompts: 'Prompts',
  video: 'Video',
  'paquete-lms': 'Paquete para aula virtual',
  taller: 'Taller',
  lectura: 'Lectura',
} as const;

export const EJES = {
  comprender: 'Comprender la IA',
  verificar: 'Usar y verificar',
  etica: 'Ética, datos y regulación',
  practica: 'Práctica profesional',
  construir: 'Construir con IA',
  ensenar: 'Enseñar con IA',
} as const;

export const ESTADOS = {
  publicado: 'Publicado',
  revision: 'En revisión',
  borrador: 'Borrador',
} as const;

const recursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recursos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string().max(220),
    tipo: z.enum(Object.keys(TIPOS) as [keyof typeof TIPOS]),
    publico: z.array(z.enum(['estudiantes', 'docentes'])).min(1),
    ejes: z.array(z.enum(Object.keys(EJES) as [keyof typeof EJES])).min(1),
    nivel: z.enum(['inicial', 'intermedio', 'avanzado']).default('inicial'),
    duracion: z.string().optional(), // texto libre: «20 min», «4 unidades»
    formato: z.array(z.string()).default([]), // web, PDF, SCORM, MP4…
    proyecto: z.string(), // de dónde viene: eva.derecho, eva.academy…
    enlace: z.url().optional(), // dónde se usa (si está publicado)
    fuente: z.string().optional(), // dónde está el original (repo y ruta)
    licencia: z.string().default('CC BY 4.0'),
    autoria: z.array(z.string()).default(['Equipo EVA']),
    estado: z.enum(Object.keys(ESTADOS) as [keyof typeof ESTADOS]).default('borrador'),
    actualizado: z.coerce.date(),
    objetivos: z.array(z.string()).default([]),
    etiquetas: z.array(z.string()).default([]),
    avisos: z.array(z.string()).default([]), // permisos pendientes, marca de terceros, etc.
    destacado: z.boolean().default(false),
  }),
});

export const collections = { recursos };
