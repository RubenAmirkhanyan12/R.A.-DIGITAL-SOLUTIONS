"use client";

import { useId } from "react";

interface Props {
  size?: number;
  className?: string;
}

export default function RastechLogo({ size = 48, className = "" }: Props) {
  const uid = useId().replace(/:/g, "");

  const grad = `rtg${uid}`;
  const bgGrad = `rbg${uid}`;
  const glowGrad = `rglow${uid}`;
  const clip = `rcc${uid}`;

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
        <linearGradient
          id={grad}
          x1="0"
          y1="0"
          x2="200"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="48%" stopColor="#3355ee" />
          <stop offset="100%" stopColor="#9922ff" />
        </linearGradient>

        <radialGradient id={bgGrad} cx="44%" cy="44%" r="60%">
          <stop offset="0%" stopColor="#0a1535" />
          <stop offset="100%" stopColor="#04040e" />
        </radialGradient>

        <radialGradient id={glowGrad} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1144ff" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#000010" stopOpacity="0" />
        </radialGradient>

        <clipPath id={clip}>
          <circle cx="100" cy="100" r="93" />
        </clipPath>
      </defs>

      {/* Outer shadow */}
      <circle cx="100" cy="100" r="99" fill="#060610" />

      {/* Main dark background */}
      <circle cx="100" cy="100" r="96" fill={`url(#${bgGrad})`} />

      {/* Centre glow */}
      <circle cx="100" cy="100" r="72" fill={`url(#${glowGrad})`} />

      {/* Outer border ring */}
      <circle
        cx="100"
        cy="100"
        r="95"
        stroke={`url(#${grad})`}
        strokeWidth="1"
        opacity="0.8"
      />

      {/* Fingerprint rings — slightly offset centres create the organic fingerprint feel */}
      <ellipse cx="97" cy="95" rx="81" ry="77" stroke={`url(#${grad})`} strokeWidth="1.6" fill="none" clipPath={`url(#${clip})`} opacity="0.38" />
      <ellipse cx="97" cy="96" rx="71" ry="67" stroke={`url(#${grad})`} strokeWidth="1.6" fill="none" clipPath={`url(#${clip})`} opacity="0.46" />
      <ellipse cx="98" cy="96" rx="62" ry="58" stroke={`url(#${grad})`} strokeWidth="1.6" fill="none" clipPath={`url(#${clip})`} opacity="0.54" />
      <ellipse cx="98" cy="97" rx="53" ry="49" stroke={`url(#${grad})`} strokeWidth="1.6" fill="none" clipPath={`url(#${clip})`} opacity="0.62" />
      <ellipse cx="99" cy="97" rx="44" ry="40" stroke={`url(#${grad})`} strokeWidth="1.6" fill="none" clipPath={`url(#${clip})`} opacity="0.70" />
      <ellipse cx="99" cy="98" rx="35" ry="31" stroke={`url(#${grad})`} strokeWidth="1.7" fill="none" clipPath={`url(#${clip})`} opacity="0.78" />
      <ellipse cx="100" cy="99" rx="26" ry="22" stroke={`url(#${grad})`} strokeWidth="1.7" fill="none" clipPath={`url(#${clip})`} opacity="0.87" />
      <ellipse cx="100" cy="100" rx="17" ry="13" stroke={`url(#${grad})`} strokeWidth="1.8" fill="none" clipPath={`url(#${clip})`} opacity="0.96" />

      {/* Circuit dots at cardinal points */}
      <circle cx="100" cy="5"   r="2.5" fill={`url(#${grad})`} />
      <circle cx="195" cy="100" r="2.5" fill={`url(#${grad})`} />
      <circle cx="100" cy="195" r="2.5" fill={`url(#${grad})`} />
      <circle cx="5"   cy="100" r="2.5" fill={`url(#${grad})`} />

      {/* Diagonal accent dots */}
      <circle cx="170" cy="30"  r="2" fill="#00c8ff" opacity="0.65" />
      <circle cx="30"  cy="30"  r="2" fill="#00c8ff" opacity="0.65" />
      <circle cx="170" cy="170" r="2" fill="#8822ff" opacity="0.65" />
      <circle cx="30"  cy="170" r="2" fill="#8822ff" opacity="0.65" />

      {/* Short circuit connector lines */}
      <line x1="100" y1="5" x2="100" y2="14" stroke={`url(#${grad})`} strokeWidth="1" opacity="0.5" />
      <line x1="195" y1="100" x2="186" y2="100" stroke={`url(#${grad})`} strokeWidth="1" opacity="0.5" />

      {/* The R — bold, gradient-filled */}
      <text
        x="100"
        y="128"
        textAnchor="middle"
        fontSize="88"
        fontWeight="900"
        fontFamily="'Arial Black', Impact, Arial, sans-serif"
        fill={`url(#${grad})`}
        opacity="0.95"
      >
        R
      </text>
    </svg>
  );
}
