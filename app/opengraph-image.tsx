import { ImageResponse } from "next/og";
import { SITE } from "./lib/site-config";

export const alt = `${SITE.name}: automatización de procesos en ${SITE.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "linear-gradient(135deg, #1A3A52 0%, #0F1F2E 55%, #0F0F0F 100%)",
          color: "#F8F9FA",
        }}
      >
        <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: 8, color: "#B8860B", marginBottom: 36 }}>
          {SITE.name}
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.15 }}>
          {`Automatización de procesos en ${SITE.city}`}
        </div>
      </div>
    ),
    size,
  );
}
