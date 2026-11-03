import type { InputHTMLAttributes, Ref } from "react";
import { SITE } from "../lib/site-config";

export const CONSENT_ERROR = "Marca la casilla para poder enviar el formulario.";

type ConsentCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
};

export function ConsentCheckbox({ id, error, ...inputProps }: ConsentCheckboxProps) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <input
          id={id}
          type="checkbox"
          aria-required="true"
          className="mt-0.5 w-4 h-4 shrink-0 accent-[#B8860B]"
          {...inputProps}
        />
        <span className="text-white/55 text-xs leading-relaxed">
          He leído la información básica de protección de datos y acepto que Rubén
          Amirkhanyan trate mis datos para responder a mi consulta
        </span>
      </label>
      {error && (
        <p role="alert" className="text-red-400 text-xs mt-1 pl-7">
          {error}
        </p>
      )}
    </div>
  );
}

export function ConsentNotice() {
  return (
    <p className="text-white/30 text-[11px] leading-relaxed">
      Responsable: Rubén Amirkhanyan. Finalidad: responder a tu consulta. Legitimación:
      tu consentimiento. Destinatarios: los proveedores necesarios para alojar la web y
      enviar el correo. Derechos: acceso, rectificación, supresión y otros, escribiendo a{" "}
      <a href={`mailto:${SITE.email}`} className="underline hover:text-white/60">
        {SITE.email}
      </a>
      . Más información: política de privacidad (en preparación).
      {SITE.whatsappEnabled &&
        " Si me escribes por WhatsApp, el mensaje pasa por WhatsApp, un servicio de terceros con su propia política de privacidad."}
    </p>
  );
}
