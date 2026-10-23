import React, { useState } from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import LinkCard from './components/LinkCard';
import EnviosCard from './components/EnviosCard';
import FeaturedSection from './components/FeaturedSection';
import Modal from './components/Modal';
import ShareButton from './components/ShareButton';
import Toast from './components/Toast';
import { LEVJA_CONFIG } from './config';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2600);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'LEVJA | Perfumes · Tecnología · Accesorios',
      text: 'Descubrí el catálogo y las fragancias exclusivas de LEVJA.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('¡Enlace copiado al portapapeles!');
      }).catch(() => {
        fallbackCopy();
      });
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = window.location.href;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      showToast('¡Enlace copiado al portapapeles!');
    } catch (err) {
      showToast('No se pudo copiar el enlace');
    }
    document.body.removeChild(textarea);
  };

  const whatsappLink = `https://wa.me/${LEVJA_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    LEVJA_CONFIG.defaultWhatsappMsg
  )}`;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#060709]">
      {/* CAPA 1: Luz ambiental difuminada para PC / Pantallas anchas (Opción B) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65 filter blur-[42px] scale-105"
          style={{ backgroundImage: "url('./assets/background.jpg')" }}
        />
        {/* Velo de contraste y atmósfera de estudio para envolver la pantalla */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#060709]/70" />
      </div>

      {/* CAPA 2: Fondo nítido central */}
      <div
        className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[682px] pointer-events-none z-0 bg-no-repeat bg-top bg-cover sm:bg-[length:682px_auto]"
        style={{
          backgroundImage: "url('./assets/background.jpg')",
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)',
        }}
      />
      {/* Botón Flotante de Compartir */}
      <ShareButton onShare={handleShare} />

      {/* Contenedor Principal (Aspect Ratio Móvil centrado) */}
      <main className="w-full max-w-[682px] px-4 pt-24 sm:px-[38px] sm:pt-[128px] pb-6 flex flex-col relative z-10">
        
        {/* Encabezado de Marca */}
        <Header />

        {/* Lista de Enlaces Principales */}
        <section className="flex flex-col gap-2.5 sm:gap-[9px] mb-2.5 sm:mb-[10px]" aria-label="Enlaces directos">
          
          {/* 1. CATÁLOGO */}
          <LinkCard
            id="link-catalogo"
            href={LEVJA_CONFIG.catalogUrl}
            title="CATÁLOGO"
            subtitle="TODAS NUESTRAS FRAGANCIAS"
            thumbSrc="./assets/thumb_catalogo.webp"
            thumbAlt="Catálogo LEVJA"
            icon={<ShoppingBag size={28} strokeWidth={1.5} />}
          />

          {/* 2. INSTAGRAM */}
          <LinkCard
            id="link-instagram"
            href={LEVJA_CONFIG.instagramUrl}
            title="INSTAGRAM"
            subtitle="NOVEDADES Y LANZAMIENTOS"
            thumbSrc="./assets/thumb_instagram.webp"
            thumbAlt="Instagram LEVJA"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            }
          />

          {/* 3. TIKTOK (visible si se configura en config.js) */}
          {LEVJA_CONFIG.tiktokUrl && (
          <LinkCard
              id="link-tiktok"
              href={LEVJA_CONFIG.tiktokUrl}
              title="TIKTOK"
              subtitle="RESEÑAS Y CONTENIDO"
              thumbSrc="./assets/thumb_tiktok.webp"
              thumbAlt="TikTok LEVJA"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              }
            />
          )}

          {/* 4. WHATSAPP */}
          <LinkCard
            id="link-whatsapp"
            href={whatsappLink}
            title="WHATSAPP"
            subtitle="CONSULTAS Y PEDIDOS"
            thumbSrc="./assets/thumb_whatsapp.webp"
            thumbAlt="WhatsApp LEVJA"
            icon={<MessageCircle size={28} strokeWidth={1.5} />}
          />

          {/* 5. ENVÍOS */}
          <EnviosCard onClick={() => setActiveModal('envios')} />

        </section>

        {/* Sección de Fragancias Destacadas */}
        <FeaturedSection onOpenModal={(type) => setActiveModal(type)} />

        {/* Footer */}
        <footer className="text-center mt-[18px] pb-3 select-none">
          <span className="font-sans text-[8px] tracking-[2.2px] text-white/45 uppercase">
            © LEVJA · FRAGANCIAS EXCLUSIVAS
          </span>
        </footer>

      </main>

      {/* Modales Interactivos */}
      <Modal
        isOpen={Boolean(activeModal)}
        onClose={() => setActiveModal(null)}
        modalType={activeModal}
      />

      {/* Notificación Toast */}
      <Toast message={toastMessage} isVisible={isToastVisible} />
    </div>
  );
}
