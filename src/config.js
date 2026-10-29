/**
 * LEVJA - Configuración de Negocio y Enlaces
 * Modificá estos datos según tu conveniencia.
 */
export const LEVJA_CONFIG = {
  // Número de WhatsApp con código de país (Argentina: +54 9 297 434-3520)
  whatsappNumber: "5492974343520",
  
  // Enlaces de redes sociales
  instagramUrl: "https://www.instagram.com/levja.tm/",
  tiktokUrl: "https://www.tiktok.com/@levja.tm",
  catalogUrl: "https://levjatm.com.ar/catalogo.html",
  
  // Mensajes predeterminados
  defaultWhatsappMsg: "Hola LEVJA! Quisiera hacer una consulta sobre sus productos.",
  msg9pm: "Hola LEVJA! Quiero consultar precio y disponibilidad de Afnan 9PM Night Out.",
  msgNebras: "Hola LEVJA! Quiero consultar precio y disponibilidad de Lattafa Nebras Pride.",

  // Datos detallados de las fragancias destacadas
  fragrances: {
    "9pm": {
      brand: "AFNAN PERFUMES",
      name: "9PM NIGHT OUT",
      subtitle: "Extrait de Parfum · 100ml / 3.4 Fl.Oz.",
      description: "Una fragancia magnética y seductora, perfecta para la noche y ocasiones especiales. Combina dulzura especiada con una proyección y longevidad sobresalientes.",
      notes: {
        salida: "Manzana, Canela, Lavanda salvaje, Bergamota",
        corazon: "Flor de Azahar del naranjo, Lirio de los valles",
        fondo: "Vainilla Bourbon, Haba Tonka, Ámbar, Pachulí"
      },
      image: "./assets/afnan_9pm.webp",
      theme: "silver"
    },
    "nebras": {
      brand: "LATTAFA PERFUMES",
      name: "NEBRAS PRIDE",
      subtitle: "Eau de Parfum · 100ml / 3.4 Fl.Oz.",
      description: "Una fragancia cautivadora y sensual que combina frutos rojos glaseados, vainilla cremosa y cacao refinado. Un aroma gourmand oriental moderno con una fijación y estela deslumbrantes.",
      notes: {
        salida: "Frutos Rojos glaseados, Mandarina jugosa",
        corazon: "Vainilla Bourbon, Cacao puro, Rosa delicada",
        fondo: "Haba Tonka, Azúcar moreno, Ámbar, Almizcle"
      },
      image: "./assets/lattafa_nebras.webp",
      theme: "silver"
    }
  }
};
