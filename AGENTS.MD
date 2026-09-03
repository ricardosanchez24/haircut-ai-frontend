# FRONTEND_AGENTS.md - Contexto del Cliente (Haircut AI MVP)

## 📌 Visión General del Proyecto
Frontend en React + Vite para un MVP de recomendación de cortes de cabello basada en IA.
El usuario sube una foto de su rostro, el cliente la envía al backend (FastAPI) y despliega 3 recomendaciones personalizadas generadas por Google Gemini.

---

## 🏗️ Arquitectura y Flujo del Proyecto
- **Tipo de App:** Single Page Application (SPA) de una sola página y flujo continuo por estados.
- **Router:** No se usa `react-router-dom`. La navegación se gestiona con estados de React.
- **Análisis:** La IA (Gemini) analiza TODO desde la foto (forma de rostro, tipo de cabello, densidad, facciones). No hay inputs manuales del usuario.

---

## 📐 Mapa de Estados de la App

```
┌─────────────────────────────────────────┐
│  ESTADO: upload                         │
│  - Header con logo + "Inicio"           │
│  - Copy: "Descubre tu mejor estilo      │
│    con ayuda de la IA"                  │
│  - Botón/upload para seleccionar foto   │
│  - Vista previa de imagen seleccionada  │
│  - Validaciones: JPG/PNG, max 5MB       │
│  - Botón "Analizar"                     │
└──────────────────┬──────────────────────┘
                   │ usuario hace click en "Analizar"
                   ▼
┌─────────────────────────────────────────┐
│  ESTADO: loading                        │
│  - Spinner/animación visual             │
│  - Mensajes dinámicos rotativos:        │
│    · "Analizando tu forma de rostro..." │
│    · "Detectando tipo de cabello..."    │
│    · "Buscando los mejores estilos..."  │
│    · "Preparando tus recomendaciones..."│
└──────────────────┬──────────────────────┘
                   │ API responde
                   ▼
        ┌──────────┴──────────┐
        ▼                     ▼
┌───────────────────┐   ┌───────────────────┐
│  ESTADO: éxito    │   │  ESTADO: error    │
│  - 3 cortes       │   │  - Mensaje claro  │
│    · nombre       │   │    del error      │
│    · icono        │   │  - Botón          │
│    · descripción  │   │    "Reintentar"   │
│      (por qué le  │   │  - Vuelve al      │
│      queda bien)  │   │    estado upload  │
│  - Texto: "Cómo   │   └───────────────────┘
│    pedirlo al     │
│    barbero"       │
│  - Botón:         │
│    "Intentar con  │
│    otra foto"     │
└───────────────────┘
```

---

## 📱 Diseño de la Interfaz

### Header
- **Posición:** Fijo arriba.
- **Contenido:** Logo a la izquierda, navegación ("Inicio") a la derecha.
- **Estilo:** Color de fondo más oscuro que el body de la app.

### Sección Principal
- Ubicada debajo del header.
- Aquí ocurre todo el flujo: upload, loading y resultados.

### Footer
- Redes sociales del proyecto.
- Derechos reservados.

### Paleta / Estilo
- Limpio, moderno, centrado en el usuario.
- 100% responsive (móvil y escritorio) con Tailwind CSS.

---

## 🎯 Contenido de la Pantalla de Resultados

Cada corte recomendado incluye:
1. **Nombre del corte** (ej: "Fade Degradado con Textura").
2. **Icono/imagen representativa.**
3. **Descripción personalizada** de por qué le queda bien al usuario según sus facciones y forma de rostro.

Además, un **bloque de texto explicativo** titulado "Cómo pedirlo al barbero" que le indica al usuario qué decirle a su barbero para conseguir el corte recomendado. Ejemplo:

> **Fade Degradado con Textura**
> "Pídele un fade bajo o medio con transición suave. En la parte superior, pide textura con tijera de 3-4cm. Lleva una referencia foto."

Esto no es un botón ni enlace para compartir. Es solo contenido informativo.

---

## 🛠️ Tech Stack Frontend (Obligatorio)
- **Framework & Build Tool:** React + Vite
- **Estilos:** Tailwind CSS
- **Iconografía:** Lucide Icons (`lucide-react`)
- **Peticiones HTTP:** `fetch` nativo o `axios`

---

## 🔌 Integración con el Backend (FastAPI)
- **URL Base de la API:** `http://localhost:8000/api`
- **Variable de Entorno:** `.env` en la raíz del frontend:
  ```env
  VITE_API_BASE_URL=http://localhost:8000/api
  ```

### Endpoint a Consumir
- **POST** `/api/analyze`
  - **Tipo:** `multipart/form-data`
  - **Descripción:** Envío del archivo de imagen para su análisis.
  - **Respuesta esperada:** JSON con 3 recomendaciones de cortes (nombre, icono, descripción, texto "cómo pedirlo").

---

## 📋 Convenciones Técnicas del Frontend

### ⚡ Simplicidad
- **Prioridad:** Agilidad en el desarrollo.
- **Enfoque:** Sin `react-router-dom`. Estados de React para gestionar la navegación.

### 🛡️ Validaciones en Cliente
- **Formatos:** Aceptar únicamente archivos JPG y PNG.
- **Tamaño:** Validar un peso máximo de 5MB antes de enviar.

### 🎨 Experiencia de Usuario (UX)
- **Previsualización:** Mostrar vista previa de la imagen antes de enviarla.
- **Loading:** Mensajes dinámicos rotativos, no solo un spinner genérico.
- **Errores:** Mensajes amigables para: imagen inválida, rostro no detectado, API fallida, sin conexión.
- **Reintentar:** Botón "Intentar con otra foto" en pantalla de resultados y en errores.

---

## 📜 Reglas del Estilo de Trabajo (Working Style Rules)

### 🔄 Flujo Obligatorio
- **Proceso:** Plan → Aprobación → Ejecución.
- **Restricción:** No escribir ni modificar código sin aprobación explícita del usuario.

### ❓ Método Socrático
- **Aplicación:** Durante el aprendizaje de conceptos nuevos.
- **Acción:** Pedir al usuario que explique o justifique la implementación propuesta.

### ⚠️ Manejo de Errores
- **Explicación:** Detallar POR QUÉ sucede el error y DÓNDE se encuentra.
- **Didáctica:** No dar la solución directa; desafiar al usuario a resolverlo.

### 🌳 Control de Versiones (Git)
- **Restricción:** Prohibido ejecutar comandos de Git sin permiso explícito.

### 🏗️ Arquitectura
- **Restricción:** No tomar decisiones de arquitectura unilateralmente.
- **Acción:** Proponer alternativas y dar recomendaciones técnicas.

### 🔍 Consultas Faltantes
- **Restricción:** Queda prohibido asumir requerimientos.
- **Acción:** Preguntar explícitamente si falta información.

### 📝 Explicación del Código
- **Calidad:** Explicar siempre el porqué de los cambios.
- **Restricción:** No entregar código ilegible ni sin contexto.

### 🛠️ Uso de Herramientas / MCP
- **Actualización:** Utilizar MCPs configurados para consultar documentación.
- **Objetivo:** Conocimiento al día antes de generar código.

---

## 📋 Directrices de Desarrollo

### 🔄 Flujo de Git
- **Push:** Solo subir cambios después de aprobación explícita del usuario.
- **Commit:** Cada tarea completada = 1 commit descriptivo + push.
- **Merge:** Solo cuando la feature esté completa Y el usuario lo indique explícitamente.

### 📝 Explicación de Cambios
- **Antes de push:** Mostrar cambios con comentarios explicando cada línea nueva.
- **Después de aprobación:** Eliminar comentarios del código.

### 🏗️ Arquitectura de Componentes
- **Separación de responsabilidades:** Cada componente hace una sola cosa.
- **Sub-componentes:** Extraer partes reutilizables en componentes separados.

### ❓ Resolución de Dudas
- **Prioridad:** Responder preguntas del usuario antes de continuar con la siguiente tarea.
- **Restricción:** No avanzar si el usuario tiene dudas pendientes.

### 🧪 TDD
- **Ciclo obligatorio:** RED (test falla) → GREEN (código mínimo) → REFACTOR (limpiar).
- **Cada función:** Primero escribir test, luego implementar.

# spec/ — Spec Driven Development (Plantilla + Diagrama)

> Plantilla genérica para documentar cualquier proyecto con desarrollo dirigido por especificaciones (SDD): primero se escribe la spec, luego el plan, luego las tareas, y solo entonces se toca el código.

---

## 📐 Diagrama de la Estructura de Archivos

```
spec/
├── constitution/            ← Reglas estables del proyecto (cambian poco)
│   ├── mission.md           ← qué construimos y para quién
│   ├── tech-stack.md        ← tecnologías, convenciones y límites
│   └── roadmap.md           ← orden de las features
└── features/                ← Una carpeta por feature
    └── NNN-nombre-feature/
        ├── spec.md          ← qué hace + criterios de aceptación
        ├── plan.md          ← cómo se implementa
        └── tasks.md         ← checklist de tareas
```

# MCPs

-- **Context7:** Se usa para consultar la documentacion oficial actualizada de todas las herramientas tecnologicas, debes usarla siempre que vayas a implementar algo sobre una tecnologia, ya que debes tener la informacion mas actualizada posible 