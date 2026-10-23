# LEVJA - Linktree en React + Tailwind CSS

Un Linktree de ultra lujo desarrollado en **React 18**, **Tailwind CSS** y **Vite**, fiel al mockup original de la marca **LEVJA** (Perfumes · Tecnología · Accesorios).

---

## ✨ Características

- **Stack Tecnológico Moderno:**
  - **React 18** (Componentes modulares, estado fluido, rendimiento óptimo)
  - **Tailwind CSS 3** (Estilizado utilitario, glassmorphism, tipografías Didone/Serif y Sans geométricas)
  - **Vite 6** (Compilación y Hot Reload ultrarrápido)
  - **Lucide React** (Iconografía limpia y moderna)
- **Fondo con Perfumes sobre las Piedras:**
  - Fondo obsidian con los frascos superiores y niebla atmosférica.
  - En la sección **Fragancias Destacadas**, los perfumes **Afnan 9PM Night Out** y **Montale Arabians Tonka** están integrados sobre las piedras volcánicas originales, con iluminación y sombras naturales.
- **Interacción y Modales:**
  - Modales emergentes para **9PM Night Out** y **Arabians Tonka** con pirámide olfativa (Salida, Corazón, Fondo), concentración y botón directo para pedir por WhatsApp.
  - Modal con información de **Envíos a todo el país**.
  - Botón flotante para compartir o copiar enlace con notificación Toast.

---

## 📁 Estructura del Proyecto

```text
LEVJA LINTREE/
├── public/
│   └── assets/                  # Imágenes WebP optimizadas y fondos
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Logotipo LEVJA y subtítulo con líneas
│   │   ├── LinkCard.jsx         # Tarjetas de enlace con glassmorphism y thumbnail
│   │   ├── EnviosCard.jsx       # Tarjeta destacada de Envíos
│   │   ├── FeaturedSection.jsx  # Perfumes sobre piedras volcánicas y hotspots
│   │   ├── Modal.jsx            # Modales de detalle y pedido por WhatsApp
│   │   ├── ShareButton.jsx      # Botón flotante superior de compartir
│   │   └── Toast.jsx            # Notificación animada de enlace copiado
│   ├── config.js                # Configuración de WhatsApp, enlaces y textos
│   ├── App.jsx                  # Componente raíz y orquestador de estado
│   ├── index.css                # Directivas de Tailwind y estilos base
│   └── main.jsx                 # Punto de entrada de React
├── index.html                   # HTML base con fuentes de Google
├── vite.config.js               # Configuración de Vite
├── tailwind.config.js           # Configuración de temas, fuentes y sombras
├── package.json
└── README.md
```

---

## ⚙️ Cómo Personalizar Enlaces y Teléfonos

Todos los enlaces y datos de contacto se modifican fácilmente en [`src/config.js`](./src/config.js):

```javascript
export const LEVJA_CONFIG = {
  // Número de WhatsApp con código de país (ejemplo: 5491123456789)
  whatsappNumber: "5491100000000",
  
  // Enlaces de redes sociales
  instagramUrl: "https://instagram.com/levja.arg",
  tiktokUrl: "https://tiktok.com/@levja.arg",
  catalogUrl: "https://wa.me/5491100000000?text=Hola%20LEVJA!%20Quisiera%20ver%20el%20catálogo",
  
  // Mensajes predeterminados
  defaultWhatsappMsg: "Hola LEVJA! Quisiera hacer una consulta sobre sus productos.",
  msg9pm: "Hola LEVJA! Quiero consultar precio y disponibilidad de Afnan 9PM Night Out.",
  msgMontale: "Hola LEVJA! Quiero consultar precio y disponibilidad de Montale Arabians Tonka."
};
```

---

## 🚀 Comandos Disponibles

### Iniciar servidor de desarrollo local:
```bash
npm run dev
```
Abre automáticamente la aplicación en `http://localhost:3000` con recarga instantánea.

### Generar versión de producción (Build):
```bash
npm run build
```
Genera los archivos listos para producción en la carpeta `dist/`.

### Previsualizar la versión de producción:
```bash
npm run preview
```

### Publicar en Internet:
Podés desplegar este proyecto en **Vercel**, **Netlify** o **Cloudflare Pages** conectando tu repositorio o arrastrando la carpeta del proyecto. Se detectará automáticamente como una aplicación de Vite + React.
