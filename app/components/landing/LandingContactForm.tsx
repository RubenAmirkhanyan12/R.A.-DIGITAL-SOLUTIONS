import ContactForm from "../ContactForm";
import ContactAlternatives from "../ContactAlternatives";
import NextSteps from "../NextSteps";

interface Props {
  title: string;
  description: string;
  sector: string;
}

export default function LandingContactForm({ title, description, sector }: Props) {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-2 text-center">
        {title}
      </h2>
      <p className="text-white/50 text-sm text-center mb-8 leading-relaxed">{description}</p>

      <ContactForm sector={sector} />
      <ContactAlternatives className="mt-5 justify-center" />
      <NextSteps className="mt-8" />

      <p className="text-white/25 text-xs text-center mt-5">
        Sin spam ni compromiso. Solo uso estos datos para responderte.
      </p>
    </div>
  );
}
