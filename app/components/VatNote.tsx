import { OFFER } from "../lib/site-config";

export default function VatNote({ className = "" }: { className?: string }) {
  if (!OFFER.vatNote) return null;
  return <p className={`text-white/40 text-xs ${className}`}>{OFFER.vatNote}</p>;
}
