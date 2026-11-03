import { SITE } from "../lib/site-config";

const WHATSAPP_TEXT = "Hola Rubén, quiero hablar de automatizar…";

export default function ContactAlternatives({ className = "" }: { className?: string }) {
  const whatsappHref = SITE.whatsappEnabled
    ? `https://wa.me/${SITE.phone.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_TEXT)}`
    : "";
  if (!whatsappHref && !SITE.bookingUrl) return null;

  const linkCls = "text-[#B8860B] hover:underline text-sm font-medium";
  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {whatsappHref && (
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={linkCls}>
          Escríbeme por WhatsApp
        </a>
      )}
      {SITE.bookingUrl && (
        <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
          O elige hora directamente
        </a>
      )}
    </div>
  );
}
