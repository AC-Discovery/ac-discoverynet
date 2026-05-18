const sharedSvgProps = {
  width: 44,
  height: 44,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function ForensicsIcon() {
  return (
    <svg {...sharedSvgProps}>
      <path d="M10 14 24 8 38 14 24 20 10 14z" />
      <path d="M10 14v14l14 6" />
      <path d="M38 14v8" />
      <path d="M24 20v14" />
      <circle cx="32" cy="32" r="6" />
      <line x1="36.5" y1="36.5" x2="42" y2="42" />
    </svg>
  );
}

export function ProcessingIcon() {
  return (
    <svg {...sharedSvgProps}>
      <rect x="16" y="6" width="26" height="18" rx="2" />
      <line x1="20" y1="24" x2="38" y2="24" />
      <line x1="29" y1="24" x2="29" y2="28" />
      <rect x="6" y="20" width="22" height="14" rx="2" />
      <line x1="4" y1="36" x2="30" y2="36" />
    </svg>
  );
}

export function DocumentReviewIcon() {
  return (
    <svg {...sharedSvgProps}>
      <rect x="14" y="6" width="22" height="28" rx="2" />
      <rect x="8" y="12" width="22" height="28" rx="2" />
      <line x1="13" y1="20" x2="25" y2="20" />
      <line x1="13" y1="26" x2="25" y2="26" />
      <line x1="13" y1="32" x2="20" y2="32" />
    </svg>
  );
}

export function AiDiscoveryIcon() {
  return (
    <svg {...sharedSvgProps}>
      <g transform="translate(24 24)">
        <ellipse rx="16" ry="6" transform="rotate(45)" />
        <ellipse rx="16" ry="6" transform="rotate(-45)" />
        <circle r="2.5" fill="currentColor" />
      </g>
    </svg>
  );
}

export function StaffingIcon() {
  return (
    <svg {...sharedSvgProps}>
      <circle cx="24" cy="14" r="5" />
      <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10" />
      <circle cx="10" cy="18" r="3.5" />
      <path d="M3 38c0-3.7 3-7 7-7" />
      <circle cx="38" cy="18" r="3.5" />
      <path d="M45 38c0-3.7-3-7-7-7" />
    </svg>
  );
}

export function FlexibleTalentIcon() {
  return (
    <svg {...sharedSvgProps}>
      <circle cx="24" cy="20" r="6" />
      <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10" />
      <circle cx="38" cy="10" r="2.5" fill="currentColor" />
      <circle cx="10" cy="10" r="2.5" fill="currentColor" />
      <line x1="36" y1="12" x2="29" y2="17" />
      <line x1="12" y1="12" x2="19" y2="17" />
    </svg>
  );
}

export function TrialServicesIcon() {
  return (
    <svg {...sharedSvgProps}>
      <rect x="8" y="6" width="22" height="30" rx="2" />
      <line x1="13" y1="14" x2="25" y2="14" />
      <line x1="13" y1="20" x2="25" y2="20" />
      <line x1="13" y1="26" x2="22" y2="26" />
      <circle cx="34" cy="34" r="6" />
      <polyline points="31.5 34 33.5 36 37 32.5" />
    </svg>
  );
}

export function CourtroomReportingIcon() {
  return (
    <svg {...sharedSvgProps}>
      <rect x="6" y="6" width="18" height="28" rx="2" />
      <line x1="10" y1="14" x2="20" y2="14" />
      <line x1="10" y1="20" x2="20" y2="20" />
      <line x1="32" y1="10" x2="32" y2="40" />
      <line x1="26" y1="14" x2="38" y2="14" />
      <path d="M26 14 L23 22 L29 22 Z" />
      <path d="M38 14 L35 22 L41 22 Z" />
    </svg>
  );
}

export function CyberShieldIcon() {
  return (
    <svg {...sharedSvgProps}>
      <path d="M24 6 L40 12 V22 C40 32 32 40 24 42 C16 40 8 32 8 22 V12 Z" />
      <rect x="20" y="23" width="8" height="8" rx="1" />
      <path d="M22 23 V19 C22 17 23 16 24 16 C25 16 26 17 26 19 V23" />
    </svg>
  );
}

export function LegalOpsIcon() {
  return (
    <svg {...sharedSvgProps}>
      <rect x="6" y="24" width="5" height="14" />
      <rect x="14" y="18" width="5" height="20" />
      <rect x="22" y="12" width="5" height="26" />
      <polyline points="6 14 14 8 22 12 30 6" />
      <circle cx="35" cy="32" r="6" />
      <line x1="39.5" y1="36.5" x2="42" y2="39" />
    </svg>
  );
}
