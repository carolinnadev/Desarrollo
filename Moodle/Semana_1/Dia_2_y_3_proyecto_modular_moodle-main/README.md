# EcoAura - Sitio Web Sostenible

Este proyecto es la evidencia del sitio web multipágina y responsive para el emprendimiento **EcoAura**, dedicado a soluciones ecológicas para hogares y empresas.

## 🚀 Sitio Publicado
Puedes visitar la versión en vivo del proyecto en GitHub Pages:
👉 [https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPOSITORIO/](https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPOSITORIO/)

---

## 🛠️ Justificación del Framework CSS
Para este proyecto se eligió **Tailwind CSS (vía CDN)** por las siguientes razones:
1. **Agilidad en el desarrollo:** Permite aplicar estilos directo en el HTML mediante clases de utilidad sin salir del flujo de marcación.
2. **Diseño Responsive Integrado:** Facilita la adaptación a dispositivos móviles, tablets y escritorio de forma intuitiva.
3. **Mantenibilidad:** Evita hojas de estilo CSS extensas y redundantes, manteniendo una estructura limpia.

---

## 📁 Estructura del Proyecto
```text
.
├── index.html            # Landing page principal
├── servicios.html        # Catálogo de servicios
├── contacto.html         # Formulario de contacto
├── README.md             # Documentación del proyecto
└── assets/               # Recursos estáticos (imágenes, scripts)


## 🎨 Hoja de Estilos Externa y Variables CSS
Se implementó un archivo de estilos externo `assets/styles.css` que incluye:
- **Variables CSS (`:root`)**: Para centralizar la paleta de colores (`--color-primary`, `--color-bg-main`, etc.) y el sistema de sombras/bordes.
- **Espaciados consistentes en `rem`**: Gestión de margins, paddings y font-sizes escalables (`--spacing-xs` a `--spacing-2xl`).
- **Uso de DevTools**: Verificación del Box Model, especificidad, estados `:hover` y propiedades calculadas en el panel *Computed* e *Inspect*.