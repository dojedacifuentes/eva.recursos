// Generó las fichas iniciales a partir del inventario del 25-10-2026 (docs/INVENTARIO.md).
// Desde ahora las fichas se editan a mano en src/content/recursos/; no volver a correrlo sobre fichas ya editadas.
// Uso: node scripts/fichas-iniciales.mjs [--forzar]
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('src/content/recursos');
const forzar = process.argv.includes('--forzar');
fs.mkdirSync(dir, { recursive: true });

const ACAD = 'https://evaacademyia.vercel.app';
const LAB = 'https://evaprompts.vercel.app';
const avisoIA = 'Incluye voz o imagen de EVA generadas con IA (registro en eva.proyecto01/docs/ASSET_LICENSES.md).';
const avisoPUCV = 'Lleva marca PUCV: confirmar la autorización de uso antes de publicarlo fuera del aula.';

const F = [
  // ── EVA ACADEMY ──
  {
    id: 'eva-academy-curso', titulo: 'EVA ACADEMY · IA y Derecho',
    resumen: 'Curso gamificado de 4 módulos y 31 lecciones: cómo funciona la IA, sus riesgos, construir una herramienta jurídica y publicarla.',
    tipo: 'curso', publico: ['estudiantes'], ejes: ['comprender', 'verificar', 'construir'], duracion: '4 módulos · 31 lecciones', formato: ['web'],
    proyecto: 'EVA ACADEMY', enlace: ACAD, fuente: 'github.com/dojedacifuentes/eva.academy.ia · src/content/curso.ts', estado: 'publicado', actualizado: '2026-10-15', destacado: true,
    etiquetas: ['gamificación', 'insignias', 'sin cuenta'],
    objetivos: ['Explicar cómo aprende y responde un modelo de lenguaje', 'Reconocer los riesgos de delegar trabajo jurídico en una IA', 'Construir y publicar una herramienta jurídica sencilla'],
    cuerpo: `## Qué trae

- **Módulo 1 · Dentro de la máquina:** qué es la IA, su historia, cómo aprende, la siguiente palabra, la atención y la escala. Optativas sobre computación cuántica, transhumanismo, dataísmo y neuroderechos.
- **Módulo 2 · La frontera:** mirar dentro del modelo, riesgos y control, Claude, Gemini y ChatGPT por dentro, conectores, y «delegar sin abdicar».
- **Módulo 3 · Construir:** tokens y costos, tu primera herramienta jurídica, probarla y mejorarla, recetas reutilizables.
- **Módulo 4 · Publicar:** repositorios, reglas, trabajar con IA en el repositorio y publicar en Vercel.

Cada lección tiene diapositivas, laboratorios interactivos, insignias, repaso del día y pruebas de entrada y salida. Es gratis y no pide cuenta.

## Cómo usarlo en clase

Asigna una lección como preparación (cada una indica cuántos minutos dura) y usa su guía PDF en la sesión. Las referencias jurídicas las revisa una persona antes de publicarlas.`,
  },
  {
    id: 'eva-academy-guias-pdf', titulo: 'Guías PDF de EVA ACADEMY',
    resumen: 'Una guía por lección (31) y una por módulo (4): lo esencial, un tutorial, un ejercicio, autoevaluación y fuentes.',
    tipo: 'guia', publico: ['estudiantes', 'docentes'], ejes: ['comprender', 'construir'], duracion: '35 guías', formato: ['PDF'],
    proyecto: 'EVA ACADEMY', enlace: ACAD, fuente: 'github.com/dojedacifuentes/eva.academy.ia · public/guias/', estado: 'revision', actualizado: '2026-10-15',
    etiquetas: ['imprimible', 'autoevaluación'],
    avisos: ['Algunos datos de los tutoriales están marcados como «por confirmar» en docs/ESQUEMA.md.'],
    cuerpo: `## Para qué sirve

Es la versión imprimible de cada lección: sirve para trabajar sin conexión, para la clase presencial o como apunte de estudio.

## Cómo usarlo en clase

Entrega la guía antes de la sesión y usa el ejercicio y la autoevaluación como cierre.`,
  },
  {
    id: 'eva-academy-moodle', titulo: 'Paquetes para Moodle de EVA ACADEMY',
    resumen: 'Cada lección empaquetada para el aula virtual: actividades H5P, guía PDF y casos en HTML, con un índice para cargarlos.',
    tipo: 'paquete-lms', publico: ['docentes'], ejes: ['ensenar', 'comprender'], formato: ['H5P', 'PDF', 'HTML'],
    proyecto: 'EVA ACADEMY', fuente: 'github.com/dojedacifuentes/eva.academy.ia · moodle/paquetes/ (índice en indice.csv)', estado: 'revision', actualizado: '2026-10-25', destacado: true,
    etiquetas: ['Moodle', 'H5P', 'aula virtual'],
    avisos: ['Son paquetes H5P, no SCORM: el aula virtual debe tener H5P activado.'],
    cuerpo: `## Qué trae

Por cada lección: sus actividades H5P, la guía PDF y los casos ramificados exportados a HTML. El archivo \`indice.csv\` lista qué va en cada sección del curso, y \`docs/moodle-gnomio.md\` explica cómo cargarlos.

## Cómo usarlo en clase

Crea un curso en tu Moodle, sigue el índice y carga cada paquete en su sección. Puedes usar solo las lecciones que te sirvan.`,
  },
  {
    id: 'eva-academy-h5p', titulo: 'Actividades H5P de EVA ACADEMY',
    resumen: '22 actividades interactivas (quiz, verdadero o falso, completar, tarjetas) como «Mitos y definiciones» o «Cada hito en su año».',
    tipo: 'actividad', publico: ['estudiantes', 'docentes'], ejes: ['comprender'], duracion: '22 actividades', formato: ['H5P'],
    proyecto: 'EVA ACADEMY', enlace: ACAD, fuente: 'github.com/dojedacifuentes/eva.academy.ia · contenido/h5p/', estado: 'publicado', actualizado: '2026-10-15',
    etiquetas: ['H5P', 'repaso'],
    cuerpo: `## Para qué sirve

Para repasar el vocabulario y las ideas centrales, dentro de la lección o cargadas por separado en el aula virtual.

## Cómo usarlo en clase

Úsalas como «ticket de salida» al final de una sesión. Se editan con Lumi o con el editor H5P de Moodle.`,
  },
  {
    id: 'eva-academy-casos-twine', titulo: 'Casos ramificados: decisiones con IA',
    resumen: 'Seis casos en que cada decisión cambia el final: «El escrito de las 23:40», «Lo que se subió por error», «La videollamada del gerente» y otros.',
    tipo: 'juego', publico: ['estudiantes', 'docentes'], ejes: ['etica', 'practica'], duracion: '6 casos', formato: ['HTML'],
    proyecto: 'EVA ACADEMY', enlace: ACAD, fuente: 'github.com/dojedacifuentes/eva.academy.ia · contenido/twine/', estado: 'publicado', actualizado: '2026-10-15', destacado: true,
    etiquetas: ['ética profesional', 'secreto profesional', 'deepfakes', 'Twine'],
    cuerpo: `## Los casos

El comité · El escrito de las 23:40 · El encargo del martes · La puntuación · La videollamada del gerente · Lo que se subió por error.

## Cómo usarlo en clase

Juega un caso en voz alta con el curso y detente en cada decisión para discutirla. Después, que cada grupo juegue otro y explique por qué llegó a su final. Están hechos con Twine (formato SugarCube, licencia BSD-2).`,
  },
  {
    id: 'eva-academy-sala-juegos', titulo: 'Sala de juegos de EVA ACADEMY',
    resumen: 'Diez juegos breves para practicar sin puntaje: ventana de contexto, ¿hecho o alucinación?, caza la inyección, anonimizador y más.',
    tipo: 'juego', publico: ['estudiantes'], ejes: ['verificar', 'comprender'], duracion: '10 juegos', formato: ['web'],
    proyecto: 'EVA ACADEMY', enlace: `${ACAD}/sala`, fuente: 'github.com/dojedacifuentes/eva.academy.ia · src/components/sala/', estado: 'publicado', actualizado: '2026-10-15',
    etiquetas: ['alucinaciones', 'prompt injection', 'anonimización'],
    cuerpo: `## Los juegos

Ventana de contexto · ¿Hecho o alucinación? · Caza la inyección · Memoria · Línea de tiempo · EVADLE · Anonimizador · Snake del encargo · Conecta el flujo · Balanza de datos. Todos usan datos ficticios.

## Cómo usarlo en clase

Como calentamiento de cinco minutos al inicio, o para que quien termina antes practique un concepto.`,
  },
  {
    id: 'eva-academy-animaciones', titulo: 'Animaciones: cómo responde un modelo de lenguaje',
    resumen: 'Animaciones cortas que muestran una neurona, el problema XOR, la atención y cómo un modelo pasa del texto a la respuesta.',
    tipo: 'video', publico: ['estudiantes', 'docentes'], ejes: ['comprender'], formato: ['MP4'],
    proyecto: 'EVA ACADEMY', enlace: ACAD, fuente: 'github.com/dojedacifuentes/eva.academy.ia · manim/escenas/, src/videos/', estado: 'publicado', actualizado: '2026-10-15',
    etiquetas: ['redes neuronales', 'atención', 'Manim'],
    avisos: ['Las animaciones hechas con Remotion tienen una licencia con restricciones para empresas grandes: revisarla antes de reutilizar el código.'],
    cuerpo: `## Para qué sirve

Para explicar en uno o dos minutos ideas que cuestan en la pizarra: qué hace una neurona, por qué hacen falta capas, cómo funciona la atención y cómo se elige la siguiente palabra.

## Cómo usarlo en clase

Proyecta la animación y pide que alguien la explique con sus palabras antes de seguir.`,
  },
  {
    id: 'eva-academy-herramientas-ejemplo', titulo: 'Herramientas jurídicas de ejemplo',
    resumen: 'Dos herramientas terminadas para mostrar lo que se puede construir: un verificador de escritos hechos con IA y un borrador de recurso de protección.',
    tipo: 'herramienta', publico: ['estudiantes', 'docentes'], ejes: ['construir', 'verificar'], formato: ['HTML'],
    proyecto: 'EVA ACADEMY', enlace: ACAD, fuente: 'github.com/dojedacifuentes/eva.academy.ia · public/herramientas/', estado: 'publicado', actualizado: '2026-10-15',
    etiquetas: ['recurso de protección', 'verificación'],
    cuerpo: `## Para qué sirve

Son el punto de llegada del módulo 3: un archivo HTML que funciona en el navegador, sin servidor. Sirven de modelo para el proyecto final.

## Cómo usarlo en clase

Muéstralas al inicio del módulo «Construir» y pide que cada grupo proponga una herramienta parecida para otra tarea jurídica.`,
  },
  {
    id: 'eva-academy-recetas', titulo: 'Recetas reutilizables (skills para Claude)',
    resumen: 'Encargos jurídicos empaquetados como skills, listos para descargar en ZIP y cargar en Claude.',
    tipo: 'prompts', publico: ['estudiantes', 'docentes'], ejes: ['construir', 'practica'], formato: ['ZIP', 'Markdown'],
    proyecto: 'EVA ACADEMY', enlace: ACAD, fuente: 'github.com/dojedacifuentes/eva.academy.ia · src/content/curso.ts (lección 3.5)', estado: 'publicado', actualizado: '2026-10-15',
    etiquetas: ['skills', 'Claude', 'plantillas'],
    cuerpo: `## Para qué sirve

Para no repetir el mismo encargo cada vez: la receta guarda las instrucciones, el formato de salida y las verificaciones. Están en la lección 3.5.

## Cómo usarlo en clase

Pide que cada estudiante adapte una receta a un encargo propio y la pruebe con un caso ficticio.`,
  },
  {
    id: 'eva-academy-videocapsulas', titulo: 'Videocápsulas «Úsala ya»',
    resumen: 'Guiones de videos de 3 minutos con un error escondido: que la IA te tome el examen, resumir un fallo, jurisprudencia real y que te corrija sin escribir por ti.',
    tipo: 'video', publico: ['estudiantes', 'docentes'], ejes: ['verificar', 'practica'], duracion: '4 cápsulas y 4 versiones cortas', formato: ['guion'],
    proyecto: 'EVA ACADEMY', fuente: 'github.com/dojedacifuentes/eva.academy.ia · videocapsulas/curso-1/', estado: 'borrador', actualizado: '2026-10-25',
    etiquetas: ['error escondido', 'jurisprudencia'],
    avisos: ['Guiones pendientes de revisión jurídica; todavía no hay videos grabados.', avisoIA],
    cuerpo: `## Las cápsulas

1.1 Haz que la IA te tome el examen · 1.2 Un fallo de 35 páginas en 2 minutos · 1.3 Jurisprudencia real, no inventada · 1.4 Que te corrija, no que escriba por ti. Cada una trae guion, material y fuentes.`,
  },

  // ── EVA × DERECHO PUCV ──
  {
    id: 'derecho-curso-0-que-es-la-ia', titulo: 'Curso 0 · Qué es la IA: lo que dicen las leyes y la ciencia',
    resumen: 'Cuatro unidades sobre cómo definen la IA las leyes, las dudas actuales (¿entiende?, ¿razona?, ¿qué es la AGI?) y qué exige ya el Derecho chileno.',
    tipo: 'curso', publico: ['estudiantes'], ejes: ['comprender', 'etica'], duracion: '4 unidades', formato: ['web'],
    proyecto: 'EVA × Derecho PUCV', fuente: 'github.com/dojedacifuentes/eva.derecho.pucv · src/content/lecciones/', estado: 'revision', actualizado: '2026-10-23',
    etiquetas: ['definiciones legales', 'AGI', 'Derecho chileno'],
    avisos: ['Revisión jurídica pendiente (lista de cotejo en docs/07-curso-0-revision-juridica.md).', avisoPUCV],
    objetivos: ['Comparar las definiciones de IA que usan las leyes', 'Distinguir lo que se sabe de lo que se discute sobre comprensión y razonamiento', 'Identificar lo que ya exige el Derecho chileno'],
    cuerpo: `## Unidades

0.1 Las definiciones que usan las leyes · 0.2 Las dudas recientes: ¿entiende?, ¿razona?, ¿qué es la AGI? · 0.3 Lo propio de la IA y lo que concedemos · 0.4 De dónde viene «inteligencia» y qué exige ya el Derecho chileno.

Cada unidad trae lectura, presentación de EVA, práctica, evaluación y fuentes con su estado de verificación.`,
  },
  {
    id: 'derecho-curso-1-como-funciona', titulo: 'Curso 1 · Cómo funciona la IA y por qué se equivoca',
    resumen: 'Empieza con «¿Qué es una IA? Ponla a tomarte el examen»; siguen la siguiente palabra, por qué inventa y cómo pedirle bien.',
    tipo: 'curso', publico: ['estudiantes'], ejes: ['comprender', 'verificar'], duracion: '4 unidades (1 disponible)', formato: ['web'],
    proyecto: 'EVA × Derecho PUCV', fuente: 'github.com/dojedacifuentes/eva.derecho.pucv · src/content/catalogo.ts', estado: 'borrador', actualizado: '2026-10-23',
    etiquetas: ['alucinaciones', 'encargo'],
    avisos: ['Solo la unidad 1.1 está disponible; las otras tres están en preparación.', avisoPUCV],
    cuerpo: `## Unidades

1.1 ¿Qué es una IA? Ponla a tomarte el examen (disponible) · 1.2 La siguiente palabra · 1.3 Por qué inventa · 1.4 Cómo pedirle bien: el encargo.`,
  },
  {
    id: 'derecho-curso-3-investigacion', titulo: 'Curso 3 · Investigación jurídica con IA: fuentes, citas y fallos',
    resumen: 'Verificar antes de firmar, buscar en fuentes chilenas, distinguir jurisprudencia real de inventada y documentar una investigación.',
    tipo: 'curso', publico: ['estudiantes', 'docentes'], ejes: ['verificar', 'practica'], duracion: '4 unidades', formato: ['web'],
    proyecto: 'EVA × Derecho PUCV', fuente: 'github.com/dojedacifuentes/eva.derecho.pucv · src/content/lecciones/', estado: 'revision', actualizado: '2026-10-23', destacado: true,
    etiquetas: ['citas', 'jurisprudencia', 'fuentes chilenas'],
    avisos: [avisoPUCV],
    objetivos: ['Verificar una cita o un fallo antes de usarlo', 'Buscar en fuentes oficiales chilenas', 'Documentar una investigación hecha con IA'],
    cuerpo: `## Unidades

Verificar antes de firmar · Buscar en fuentes chilenas · Jurisprudencia real, no inventada · Organizar y documentar una investigación.

Cada unidad abre con un uso jurídico real y trae un objetivo verificable, una evaluación con umbral y su tabla de fuentes.`,
  },
  {
    id: 'derecho-antes-de-subir', titulo: 'Antes de subir',
    resumen: 'Clasifica un documento antes de pegarlo en una IA: qué datos personales o secretos tiene y qué hacer con ellos. Corre en el navegador.',
    tipo: 'herramienta', publico: ['estudiantes', 'docentes'], ejes: ['etica', 'practica'], formato: ['web'],
    proyecto: 'EVA × Derecho PUCV', fuente: 'github.com/dojedacifuentes/eva.derecho.pucv · src/lib/herramientas/antes-de-subir.ts', estado: 'revision', actualizado: '2026-10-23', destacado: true,
    etiquetas: ['datos personales', 'secreto profesional'],
    cuerpo: `## Para qué sirve

Para frenar antes de pegar un expediente en un chat. El documento no sale del navegador.

## Cómo usarlo en clase

Entrega a cada grupo un documento ficticio con datos sensibles y pide que lo clasifiquen y lo dejen listo para usar con IA.`,
  },
  {
    id: 'derecho-guia-piloto', titulo: 'Guía piloto: la unidad 1.1 en 45 minutos',
    resumen: 'Cómo llevar la unidad «¿Qué es una IA?» a una clase: qué hacer antes, durante y después, y qué revisar.',
    tipo: 'guia', publico: ['docentes'], ejes: ['ensenar'], duracion: '45 min', formato: ['web'],
    proyecto: 'EVA × Derecho PUCV', fuente: 'github.com/dojedacifuentes/eva.derecho.pucv · src/app/docentes/page.tsx', estado: 'borrador', actualizado: '2026-10-23',
    etiquetas: ['plan de clase'],
    avisos: [avisoPUCV],
    cuerpo: `## Para qué sirve

Es el modelo de guía docente de la plataforma: un plan para una sesión de 45 minutos, con lo que hay que revisar antes.`,
  },
  {
    id: 'derecho-tutoriales-estudiar', titulo: 'Tutoriales: estudiar e investigar con IA',
    resumen: 'ChatGPT y Claude para estudiar, investigar sin inventar, Claude Code y Codex, y navegación asistida, de básico a avanzado.',
    tipo: 'guia', publico: ['estudiantes'], ejes: ['verificar', 'construir'], duracion: '5 tutoriales', formato: ['web'],
    proyecto: 'EVA × Derecho PUCV', fuente: 'github.com/dojedacifuentes/eva.derecho.pucv · src/app/recursos/page.tsx', estado: 'borrador', actualizado: '2026-10-23',
    etiquetas: ['ChatGPT', 'Claude', 'Codex'],
    avisos: ['Qué es gratis y qué es pago está «por verificar»: cambia seguido.'],
    cuerpo: `## Los tutoriales

ChatGPT para estudiar · Claude para estudiar · Investigar con IA sin inventar · Claude Code y Codex · Navegación asistida.`,
  },

  // ── EVA LAB ──
  {
    id: 'lab-construye-tu-prompt', titulo: 'Construye tu prompt',
    resumen: 'Curso en 5 etapas: la pregunta, el prompt, la auditoría, la verificación y el cierre. Al final descargas tu trabajo.',
    tipo: 'curso', publico: ['estudiantes', 'docentes'], ejes: ['verificar', 'practica'], duracion: '45–90 min', formato: ['web', 'Markdown'],
    proyecto: 'EVA LAB', enlace: `${LAB}/curso`, fuente: 'github.com/dojedacifuentes/eva.prompts · src/content/curso/', estado: 'publicado', actualizado: '2026-09-26', destacado: true,
    etiquetas: ['prompting jurídico', 'auditoría'],
    objetivos: ['Formular una pregunta jurídica precisa', 'Escribir y auditar un prompt', 'Verificar la respuesta antes de usarla'],
    cuerpo: `## Cómo usarlo en clase

Es una sesión completa: cada estudiante parte de una pregunta de su ramo y termina con un archivo .md que documenta el prompt, la respuesta y lo que verificó. Ese archivo sirve como evidencia para evaluar.`,
  },
  {
    id: 'lab-prompt-lab', titulo: 'Prompt Lab',
    resumen: 'Arma un prompt jurídico tomando 12 decisiones explícitas y conviértelo en prompt, system prompt o PDF.',
    tipo: 'herramienta', publico: ['estudiantes', 'docentes'], ejes: ['construir', 'practica'], formato: ['web', 'PDF'],
    proyecto: 'EVA LAB', enlace: `${LAB}/prompt-lab`, fuente: 'github.com/dojedacifuentes/eva.prompts', estado: 'publicado', actualizado: '2026-09-26',
    etiquetas: ['plantillas', 'system prompt'],
    cuerpo: `## Para qué sirve

Para que el prompt deje de ser intuición: las decisiones (qué se pide, con qué fuentes, en qué formato, con qué límites y cómo se verifica) quedan escritas. El resultado se puede reutilizar o compartir.`,
  },
  {
    id: 'lab-guia-prompting', titulo: 'Guía de prompting jurídico',
    resumen: 'Guía en 4 partes y 13 capítulos sobre cómo pedir, revisar y documentar trabajo jurídico hecho con IA.',
    tipo: 'guia', publico: ['estudiantes', 'docentes'], ejes: ['verificar', 'practica'], duracion: '13 capítulos', formato: ['web'],
    proyecto: 'EVA LAB', enlace: `${LAB}/guia`, fuente: 'github.com/dojedacifuentes/eva.prompts · src/content/guia.ts', estado: 'borrador', actualizado: '2026-09-26',
    etiquetas: ['prompting jurídico'],
    avisos: ['En construcción: 3 capítulos en borrador y 10 planificados.'],
    cuerpo: `## Estado

La estructura está completa; los capítulos se publican a medida que se terminan.`,
  },
  {
    id: 'lab-conceptos', titulo: 'Conceptos: tarjetas de repaso',
    resumen: 'Unas 30 tarjetas en 4 categorías: vocabulario de IA, prompting jurídico, herramientas y flujos con varias IA.',
    tipo: 'actividad', publico: ['estudiantes'], ejes: ['comprender'], formato: ['web'],
    proyecto: 'EVA LAB', enlace: `${LAB}/conceptos`, fuente: 'github.com/dojedacifuentes/eva.prompts', estado: 'publicado', actualizado: '2026-09-26',
    etiquetas: ['glosario', 'repaso'],
    cuerpo: `## Cómo usarlo en clase

Como glosario de referencia o para un repaso rápido antes de una evaluación.`,
  },
  {
    id: 'lab-toolkit', titulo: 'Toolkit: qué herramienta usar para cada encargo',
    resumen: 'Cuándo usar Claude, ChatGPT, Gemini, NotebookLM, Perplexity, GitHub o Vercel, con protocolos de confidencialidad y verificación.',
    tipo: 'guia', publico: ['estudiantes', 'docentes'], ejes: ['practica', 'etica'], formato: ['web'],
    proyecto: 'EVA LAB', enlace: `${LAB}/toolkit`, fuente: 'github.com/dojedacifuentes/eva.prompts', estado: 'publicado', actualizado: '2026-09-26',
    etiquetas: ['herramientas', 'confidencialidad'],
    avisos: ['Las herramientas cambian rápido: revisar la fecha de actualización.'],
    cuerpo: `## Para qué sirve

Para elegir la herramienta según el encargo y no por costumbre, con los resguardos de confidencialidad de cada una.`,
  },

  // ── FUNDAMENTOS ──
  {
    id: 'fundamentos-ia-derecho', titulo: 'Fundamentos de IA para el Derecho',
    resumen: 'Curso de 4 lecciones y un caso integrador: entender, configurar, personalizar y aplicar la IA, con diagnósticos, laboratorios y portafolio.',
    tipo: 'curso', publico: ['estudiantes', 'docentes'], ejes: ['comprender', 'etica', 'construir', 'practica'], nivel: 'intermedio', duracion: '18 h', formato: ['web', 'Markdown'],
    proyecto: 'Fundamentos de IA para el Derecho', fuente: 'Archivo local ia-derecho-curso · src/content/unidades/', autoria: ['Diego Hernán Ojeda Cifuentes'], estado: 'revision', actualizado: '2026-10-05', destacado: true,
    etiquetas: ['portafolio', 'rúbricas', 'clínica jurídica'],
    avisos: ['Todavía no está publicado en la web ni en GitHub.'],
    objetivos: ['Explicar qué es un modelo de lenguaje y qué hay disponible', 'Configurar privacidad, datos y conectores', 'Usar y construir skills, gems, GPTs y proyectos', 'Diseñar un flujo de trabajo propio con control crítico'],
    cuerpo: `## Lecciones

1. **Entender:** qué es un modelo de lenguaje y qué hay disponible.
2. **Configurar:** privacidad, datos, conectores y repositorios abiertos.
3. **Personalizar:** skills, gems, GPTs y proyectos; usarlos y construirlos.
4. **Aplicar:** un flujo de trabajo propio y su control crítico.
5. **Caso integrador:** una minuta para la clínica jurídica.

Cada lección trae diagnóstico de confianza, laboratorio, producto con rúbrica, reflexión y lecturas con enlace verificable (arXiv, DOI). El portafolio se descarga en Markdown.`,
  },

  // ── EVA ARCADE ──
  {
    id: 'arcade-lex-mortis', titulo: 'LEX MORTIS · Derecho sucesorio',
    resumen: 'Juego de 30 expedientes y 126 preguntas sobre el Libro III del Código Civil, con EVA como guía.',
    tipo: 'juego', publico: ['estudiantes'], ejes: ['practica'], nivel: 'intermedio', duracion: '30 expedientes', formato: ['web'],
    proyecto: 'EVA ARCADE', enlace: 'https://sucesorio.vercel.app', fuente: 'Archivo local PROYECTO EVA01/sucesorio · docs/VALIDACION_JURIDICA.md', estado: 'publicado', actualizado: '2026-10-14',
    etiquetas: ['Código Civil', 'sucesión', 'examen de grado'],
    cuerpo: `## Para qué sirve

Para repasar Derecho sucesorio resolviendo casos. Es el juego con más verificación: las preguntas están cotejadas con la BCN (Código Civil, Libro III, y Ley 20.830).

## Cómo usarlo en clase

Como repaso antes de una prueba o del examen de grado. No enseña IA: EVA aparece como tutora.`,
  },
  {
    id: 'arcade-foro-invisible', titulo: 'FORO [in]VISIBLE · Derecho procesal civil',
    resumen: 'Juego para preparar el examen de grado en procesal civil (CPC, COT y Constitución), con EVA como guía.',
    tipo: 'juego', publico: ['estudiantes'], ejes: ['practica'], nivel: 'avanzado', formato: ['web'],
    proyecto: 'EVA ARCADE', enlace: 'https://evagameproce.vercel.app', fuente: 'Archivo local PROYECTO EVA01/eva.game.proce', estado: 'revision', actualizado: '2026-10-14',
    etiquetas: ['procesal civil', 'examen de grado'],
    avisos: ['Revisión jurídica pendiente (docs/REVISION_JURIDICA_PENDIENTE.md).'],
    cuerpo: `## Para qué sirve

Para repasar procedimiento civil con casos. No enseña IA: EVA aparece como tutora.`,
  },
  {
    id: 'arcade-potestas', titulo: 'POTESTAS · Derecho administrativo',
    resumen: 'Juego de 12 jornadas sobre Derecho administrativo, contrastado con la BCN.',
    tipo: 'juego', publico: ['estudiantes'], ejes: ['practica'], duracion: '12 jornadas', formato: ['web'],
    proyecto: 'EVA ARCADE', fuente: 'Archivo local PROYECTO EVA01/potestas', estado: 'borrador', actualizado: '2026-10-14',
    etiquetas: ['administrativo'],
    avisos: ['En rediseño y sin dirección pública; revisión jurídica pendiente.'],
    cuerpo: `## Para qué sirve

Para repasar Derecho administrativo por jornadas. Usa baldosas Kenney (CC0) y fuentes con licencia OFL.`,
  },

  // ── SERIES Y LECTURAS ──
  {
    id: 'serie-del-chat-al-repositorio', titulo: 'Serie EVA: del chat al repositorio',
    resumen: 'Ocho tutoriales paso a paso: análisis trazable de contratos, Artifacts, Markdown, checkpoints, un repositorio por caso, GitHub y publicar en Vercel.',
    tipo: 'guia', publico: ['estudiantes', 'docentes'], ejes: ['construir', 'practica'], nivel: 'intermedio', duracion: '8 capítulos', formato: ['PDF', 'PNG', 'Markdown'],
    proyecto: 'EVA × Scribe Claro', fuente: 'Archivo local SCRIBE CLARO/eva-publicacion-02, eva-capitulo-03…09', estado: 'revision', actualizado: '2026-09-20', destacado: true,
    etiquetas: ['Claude', 'GitHub', 'Vercel', 'plantillas'],
    avisos: ['El capítulo 09 tiene cuatro variantes: falta elegir la definitiva.'],
    cuerpo: `## Capítulos

- **02** De «revisa este contrato» al análisis trazable (plantilla de prompt)
- **03** Usar Artifacts con un caso de prueba
- **04** Markdown y gestión del caso (plantilla ESTADO.md)
- **05** Checkpoints y handoff: retomar el trabajo con IA
- **06** Un método para cada caso: repositorio-plantilla con Claude Code
- **07** De tu carpeta a GitHub
- **08** Claude × GitHub
- **09** De GitHub a la web con Vercel

Cada capítulo trae láminas en PDF y, cuando corresponde, su plantilla.`,
  },
  {
    id: 'scribe-citas-que-no-existen', titulo: 'Citas que no existen',
    resumen: 'Carrusel y reel sobre integridad académica cuando la IA inventa citas, fallos o autores.',
    tipo: 'lectura', publico: ['estudiantes', 'docentes'], ejes: ['verificar', 'etica'], formato: ['PDF', 'MP4', 'SRT'],
    proyecto: 'Scribe Claro', fuente: 'Archivo local SCRIBE CLARO/publicacion-07-integridad-citas, publicacion-10-reel-citas-que-no-existen', estado: 'revision', actualizado: '2026-10-05',
    etiquetas: ['integridad académica', 'alucinaciones'],
    avisos: [avisoPUCV],
    cuerpo: `## Cómo usarlo en clase

Proyecta el reel al presentar una tarea escrita y acuerda con el curso cómo se van a verificar las citas.`,
  },
  {
    id: 'scribe-postura-ia', titulo: 'Postura sobre IA de Scribe Claro',
    resumen: 'Cómo entiende Scribe Claro el uso de la IA en la escritura jurídica: una IA que revisa, no que escribe por ti.',
    tipo: 'lectura', publico: ['estudiantes', 'docentes'], ejes: ['etica', 'ensenar'], formato: ['PDF'],
    proyecto: 'Scribe Claro', fuente: 'Archivo local SCRIBE CLARO/ScribeClaro-postura-sobre-IA.pdf', estado: 'revision', actualizado: '2026-09-11',
    etiquetas: ['política de uso', 'escritura jurídica'],
    avisos: [avisoPUCV],
    cuerpo: `## Cómo usarlo en clase

Sirve de modelo para redactar la política de uso de IA de un curso: qué se permite, qué se declara y qué no se delega.`,
  },
  {
    id: 'scribe-microlecciones', titulo: 'Microlecciones de lenguaje claro',
    resumen: '25 palabras señal de un texto que necesita revisión, lo que dificulta leer, #UnaPalabraMenos y la norma ISO 24495 de lenguaje claro.',
    tipo: 'lectura', publico: ['estudiantes'], ejes: ['practica'], formato: ['PDF', 'PNG', 'MP4'],
    proyecto: 'Scribe Claro', fuente: 'Archivo local SCRIBE CLARO/publicacion-03, 05, 06, 08 y 09', estado: 'revision', actualizado: '2026-10-05',
    etiquetas: ['lenguaje claro', 'ISO 24495', 'redacción'],
    avisos: [avisoPUCV],
    cuerpo: `## Qué trae

Microlección 01 (25 palabras señal) · Microlección 02 (lo que dificulta leer) · #UnaPalabraMenos 01 · Día del Lenguaje Claro (ISO 24495) · Minuto Claro (reels 01, 02, 03 y 05).`,
  },
  {
    id: 'academy-carruseles-estudio', titulo: 'Carruseles «IA en el estudio jurídico»',
    resumen: 'Tres series de 7 láminas: Claude para abogados, antes de pegar un expediente en una IA, y cinco usos, con fuentes verificadas.',
    tipo: 'lectura', publico: ['estudiantes', 'docentes'], ejes: ['practica', 'etica'], duracion: '3 series', formato: ['PNG'],
    proyecto: 'EVA ACADEMY', fuente: 'Archivo local PROYECTO EVA01/EVA_INSTAGRAM_ACADEMY_v1', estado: 'borrador', actualizado: '2026-10-10',
    etiquetas: ['secreto profesional', 'Claude'],
    avisos: ['Sin publicar. No incluir el PDF del Colegio de Abogados que está en la misma carpeta: es de un tercero.', avisoIA],
    cuerpo: `## Para qué sirve

Para abrir la conversación sobre IA en una clase de práctica profesional con material breve y con fuentes.`,
  },
  {
    id: 'academy-herramienta-tachar', titulo: 'Tachar antes de pegar',
    resumen: 'Herramienta en un solo archivo HTML para tachar nombres, RUT y otros datos de un texto antes de pegarlo en una IA.',
    tipo: 'herramienta', publico: ['estudiantes', 'docentes'], ejes: ['etica', 'practica'], formato: ['HTML'],
    proyecto: 'EVA ACADEMY', fuente: 'Archivo local PROYECTO EVA01/EVA_INSTAGRAM_ACADEMY_v1/herramienta-tachar/tachar.html', estado: 'borrador', actualizado: '2026-10-10',
    etiquetas: ['anonimización', 'datos personales'],
    cuerpo: `## Para qué sirve

Acompaña al reel «Tacha antes de pegar». Funciona en el navegador, sin conexión.`,
  },

  // ── TALLER ──
  {
    id: 'diat-taller-clase-1', titulo: 'Taller de Prompting Jurídico · Clase 1',
    resumen: '«Del prompt aislado al razonamiento jurídico asistido»: presentación de 90 minutos, manual del estudiante de 36 páginas y guion docente.',
    tipo: 'taller', publico: ['estudiantes', 'docentes'], ejes: ['practica', 'ensenar', 'verificar'], duracion: '90 min', formato: ['PPTX', 'PDF', 'DOCX'],
    proyecto: 'Taller DIAT 2026', fuente: 'Archivo local DIAT PUCV/CLASES TALLER DIAT 2026/CLASE 1', estado: 'revision', actualizado: '2026-08-24',
    etiquetas: ['taller', 'guion docente', 'manual'],
    avisos: ['Material institucional del DIAT PUCV: requiere su autorización para publicarlo.'],
    cuerpo: `## Qué trae

- Presentación de la clase (90 minutos).
- Manual del estudiante v2.0, con ejercicios.
- Guion docente minuto a minuto y matrices de la sesión.

La Clase 2 («Laboratorio jurídico: del prompt al flujo verificable») está en validación.`,
  },

  // ── CONSTRUIR ──
  {
    id: 'kit-video-modulo', titulo: 'Kit para videos de módulo con EVA',
    resumen: 'Flujo reutilizable para producir el video de bienvenida de un módulo: guion, voz de EVA, diapositivas animadas, subtítulos karaoke y mezcla de audio.',
    tipo: 'herramienta', publico: ['docentes'], ejes: ['construir', 'ensenar'], nivel: 'avanzado', formato: ['Python', 'HTML'],
    proyecto: 'Curso IA generativa laboral', fuente: 'github.com/dojedacifuentes/curso-ia-generativa-laboral · .claude/skills/curso-video-modulo/', estado: 'revision', actualizado: '2026-10-25',
    etiquetas: ['video', 'ffmpeg', 'Playwright', 'skill de Claude'],
    avisos: [avisoIA, 'Requiere Python, ffmpeg y Playwright; lo que se genera con HeyGen y Flow consume créditos.'],
    cuerpo: `## Qué trae

Una plantilla HTML de diapositivas que se sincronizan con la voz, scripts para alinear cada palabra (Whisper), música y efectos generados por código, cambio de fondo de la presentadora y mezcla final a -16 LUFS. Está empaquetado como skill de Claude Code, con el video del módulo 1 como ejemplo.`,
  },
];

let escritas = 0;
for (const { id, cuerpo, ...d } of F) {
  const archivo = path.join(dir, `${id}.md`);
  if (fs.existsSync(archivo) && !forzar) continue;
  const fm = Object.entries(d).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  fs.writeFileSync(archivo, `---\n${fm}\n---\n\n${cuerpo}\n`, 'utf8');
  escritas++;
}
console.log(`${escritas} fichas escritas de ${F.length} -> ${dir}`);
