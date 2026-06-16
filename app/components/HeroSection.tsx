import HeroClient from "./HeroClient";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background: layered gradient mesh */}
      <div className="absolute inset-0 bg-[#0F0F0F]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A52] via-[#0F0F0F] to-[#0F0F0F] opacity-90" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(248,249,250,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248,249,250,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1A3A52] opacity-30 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#B8860B] opacity-10 blur-[120px]" />

      {/* Decorative geometric lines */}
      <div className="absolute top-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-[#B8860B]/40 to-transparent hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-40 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent hidden lg:block" />

      <HeroClient />
    </section>
  );
}
