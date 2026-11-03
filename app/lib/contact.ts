// Reglas del formulario de contacto, compartidas por el formulario y la ruta /api/contact

export const CONTACT_LIMITS = { nombre: 100, contacto: 120, mensaje: 2000, extra: 300 };

export const SECTOR_LABELS: Record<string, string> = {
  home: "WEB",
  restaurantes: "RESTAURANTE",
  ecommerce: "E-COMMERCE",
  agencias: "AGENCIA",
  otros: "OTRO SECTOR",
};

export const SECTOR_OPTIONS = [
  { value: "restaurantes", label: "Restaurante, bar o catering" },
  { value: "ecommerce", label: "Tienda online" },
  { value: "agencias", label: "Agencia" },
  { value: "otros", label: "Otro sector" },
];

export const HOURS_OPTIONS = ["Menos de 10 h", "10-20 h", "20-40 h", "40-60 h", "Más de 60 h"];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isEmail(value: string): boolean {
  return EMAIL.test(value.trim());
}

export function isPhone(value: string): boolean {
  const v = value.trim();
  return /^[+\d\s().-]+$/.test(v) && v.replace(/\D/g, "").length >= 9;
}

export function isValidContact(value: string): boolean {
  return isEmail(value) || isPhone(value);
}
