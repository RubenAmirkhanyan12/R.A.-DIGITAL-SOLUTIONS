"use client";

import { useId } from "react";

interface Props {
  size?: number;
  className?: string;
}

export default function RastechLogo({ size = 48, className = "" }: Props) {
  const uid      = useId().replace(/:/g, "");
  const grad     = `rtg${uid}`;
  const bgGrad   = `rbg${uid}`;
  const glowGrad = `rglow${uid}`;
  const clip     = `rcc${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Blue → indigo → violet gradient — matches the uploaded image */}
        <linearGradient id={grad} x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#00d4ff" />
          <stop offset="45%"  stopColor="#3355ee" />
          <stop offset="100%" stopColor="#9922ff" />
        </linearGradient>

        <radialGradient id={bgGrad} cx="44%" cy="44%" r="60%">
          <stop offset="0%"   stopColor="#08122a" />
          <stop offset="100%" stopColor="#030308" />
        </radialGradient>

        <radialGradient id={glowGrad} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1144ff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#000010" stopOpacity="0"    />
        </radialGradient>

        <clipPath id={clip}>
          <circle cx="100" cy="100" r="93" />
        </clipPath>
      </defs>

      {/* ── Background ────────────────────────────────────────── */}
      <circle cx="100" cy="100" r="99" fill="#050510" />
      <circle cx="100" cy="100" r="96" fill={`url(#${bgGrad})`} />
      <circle cx="100" cy="100" r="70" fill={`url(#${glowGrad})`} />

      {/* Outer border ring */}
      <circle cx="100" cy="100" r="95" stroke={`url(#${grad})`} strokeWidth="1.2" opacity="0.85" />

      {/* ── Fingerprint ridges ────────────────────────────────── */}
      {/* 13 concentric ellipses with gradually offset centres  */}
      {/* — creates the organic fingerprint swirl from the image */}
      <ellipse cx="96" cy="93" rx="88" ry="84" stroke={`url(#${grad})`} strokeWidth="1.3" fill="none" clipPath={`url(#${clip})`} opacity="0.22" />
      <ellipse cx="96" cy="93" rx="81" ry="77" stroke={`url(#${grad})`} strokeWidth="1.3" fill="none" clipPath={`url(#${clip})`} opacity="0.28" />
      <ellipse cx="97" cy="94" rx="74" ry="70" stroke={`url(#${grad})`} strokeWidth="1.4" fill="none" clipPath={`url(#${clip})`} opacity="0.34" />
      <ellipse cx="97" cy="94" rx="67" ry="63" stroke={`url(#${grad})`} strokeWidth="1.4" fill="none" clipPath={`url(#${clip})`} opacity="0.40" />
      <ellipse cx="97" cy="95" rx="60" ry="56" stroke={`url(#${grad})`} strokeWidth="1.5" fill="none" clipPath={`url(#${clip})`} opacity="0.47" />
      <ellipse cx="98" cy="95" rx="53" ry="49" stroke={`url(#${grad})`} strokeWidth="1.5" fill="none" clipPath={`url(#${clip})`} opacity="0.53" />
      <ellipse cx="98" cy="96" rx="46" ry="42" stroke={`url(#${grad})`} strokeWidth="1.6" fill="none" clipPath={`url(#${clip})`} opacity="0.59" />
      <ellipse cx="99" cy="96" rx="39" ry="35" stroke={`url(#${grad})`} strokeWidth="1.6" fill="none" clipPath={`url(#${clip})`} opacity="0.65" />
      <ellipse cx="99" cy="97" rx="32" ry="28" stroke={`url(#${grad})`} strokeWidth="1.7" fill="none" clipPath={`url(#${clip})`} opacity="0.72" />
      <ellipse cx="99" cy="97" rx="25" ry="21" stroke={`url(#${grad})`} strokeWidth="1.7" fill="none" clipPath={`url(#${clip})`} opacity="0.79" />
      <ellipse cx="100" cy="98" rx="18" ry="14" stroke={`url(#${grad})`} strokeWidth="1.8" fill="none" clipPath={`url(#${clip})`} opacity="0.87" />
      <ellipse cx="100" cy="98" rx="11" ry="8"  stroke={`url(#${grad})`} strokeWidth="1.8" fill="none" clipPath={`url(#${clip})`} opacity="0.94" />

      {/* ── Ridge bifurcation marks ───────────────────────────── */}
      {/* Short dashed arcs simulate the ridge endings & splits   */}
      <path d="M 38 52 Q 72 24 118 22"  stroke={`url(#${grad})`} strokeWidth="1.1" fill="none" clipPath={`url(#${clip})`} opacity="0.20" strokeDasharray="5 7"  />
      <path d="M 158 42 Q 180 75 178 118" stroke={`url(#${grad})`} strokeWidth="1.1" fill="none" clipPath={`url(#${clip})`} opacity="0.18" strokeDasharray="4 8"  />
      <path d="M 28 140 Q 20 170 52 182" stroke={`url(#${grad})`} strokeWidth="1.1" fill="none" clipPath={`url(#${clip})`} opacity="0.18" strokeDasharray="3 7"  />
      <path d="M 152 168 Q 130 188 95 192" stroke={`url(#${grad})`} strokeWidth="1.1" fill="none" clipPath={`url(#${clip})`} opacity="0.16" strokeDasharray="4 9"  />

      {/* ── Cardinal compass dots ─────────────────────────────── */}
      <circle cx="100" cy="5"   r="2.5" fill={`url(#${grad})`} />
      <circle cx="195" cy="100" r="2.5" fill={`url(#${grad})`} />
      <circle cx="100" cy="195" r="2.5" fill={`url(#${grad})`} />
      <circle cx="5"   cy="100" r="2.5" fill={`url(#${grad})`} />

      {/* Connector ticks */}
      <line x1="100" y1="5"   x2="100" y2="15"  stroke={`url(#${grad})`} strokeWidth="1" opacity="0.5" />
      <line x1="195" y1="100" x2="185" y2="100"  stroke={`url(#${grad})`} strokeWidth="1" opacity="0.5" />

      {/* Diagonal accent dots */}
      <circle cx="170" cy="30"  r="2" fill="#00c8ff" opacity="0.6" />
      <circle cx="30"  cy="30"  r="2" fill="#00c8ff" opacity="0.6" />
      <circle cx="170" cy="170" r="2" fill="#8822ff" opacity="0.6" />
      <circle cx="30"  cy="170" r="2" fill="#8822ff" opacity="0.6" />

      {/* ── R — centred, bold, full gradient ─────────────────── */}
      <text
        x="100"
        y="128"
        textAnchor="middle"
        fontSize="88"
        fontWeight="900"
        fontFamily="'Arial Black', Impact, Arial, sans-serif"
        fill={`url(#${grad})`}
        opacity="0.97"
      >
        R
      </text>
    </svg>
  );
}
