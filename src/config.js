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
  catalogUrl: "https://wa.me/5492974343520?text=Hola%20LEVJA!%20Quisiera%20ver%20el%20cat%C3%A1logo%20completo%20de%20fragancias",
  
  // Mensajes predeterminados
  defaultWhatsappMsg: "Hola LEVJA! Quisiera hacer una consulta sobre sus productos.",
  msg9pm: "Hola LEVJA! Quiero consultar precio y disponibilidad de Afnan 9PM Night Out.",
  msgMontale: "Hola LEVJA! Quiero consultar precio y disponibilidad de Montale Arabians Tonka.",

  // Datos detallados de las fragancias
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
    "montale": {
      brand: "MONTALE PARIS",
      name: "ARABIANS TONKA",
      subtitle: "Eau de Parfum · 100ml / 3.4 Fl.Oz.",
      description: "Un tributo a la nobleza del caballo árabe. Fragancia oriental opulenta que fusiona especias ardientes, rosas búlgaras y haba tonka con un toque gourmand dulce irresistible.",
      notes: {
        salida: "Azafrán de Oriente, Bergamota de Calabria",
        corazon: "Madera de Agar (Oud), Rosa de Bulgaria",
        fondo: "Haba Tonka, Caña de Azúcar, Ámbar, Almizcle Blanco"
      },
      image: "./assets/montale_arabians_tonka.webp",
      theme: "gold"
    }
  }
};
