function DataCollectionIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="8" y="10" width="22" height="16" rx="1.5" />
      <line x1="12" y1="28" x2="26" y2="28" />
      <line x1="19" y1="28" x2="19" y2="32" />
      <line x1="14" y1="32" x2="24" y2="32" />
      <path d="M28 14h8l4 6v10h-8l-4-6V14z" />
      <line x1="30" y1="20" x2="38" y2="20" />
      <path d="M32 8v4M36 8v4M40 8v4" />
      <path d="M31 8h10v3H31z" />
    </svg>
  );
}

function ForensicAnalysisIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 34h24" />
      <path d="M14 30h20l2 4H12l2-4z" />
      <path d="M16 26h16l2 4H14l2-4z" />
      <path d="M18 22h12l2 4H16l2-4z" />
      <circle cx="20" cy="24" r="1.2" fill="currentColor" />
      <circle cx="24" cy="21" r="1.2" fill="currentColor" />
      <circle cx="28" cy="23" r="1.2" fill="currentColor" />
      <circle cx="31" cy="19" r="1.2" fill="currentColor" />
      <path d="M20 24l4-3 4 2 7-5" />
    </svg>
  );
}

function ExpertTestimonyIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="24" y1="10" x2="24" y2="36" />
      <line x1="12" y1="36" x2="36" y2="36" />
      <line x1="12" y1="18" x2="36" y2="18" />
      <path d="M12 18 L8 26 L16 26 Z" />
      <path d="M36 18 L32 26 L40 26 Z" />
      <circle cx="24" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}

function HeroDataCollectionIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="12" height="9" rx="1" />
      <line x1="6" y1="15" x2="12" y2="15" />
      <line x1="9" y1="15" x2="9" y2="17" />
      <path d="M14 6h5l2 3v5h-5l-2-3V6z" />
      <path d="M15 9h4M16.5 3v2M18.5 3v2M20.5 3v2" />
    </svg>
  );
}

function HeroForensicAnalysisIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 18h14" />
      <path d="M6 15h12l1 3H5l1-3z" />
      <path d="M7 12h10l1 3H6l1-3z" />
      <path d="M8 9h8l1 3H7l1-3z" />
      <circle cx="10" cy="10" r="0.8" fill="currentColor" />
      <circle cx="12" cy="8.5" r="0.8" fill="currentColor" />
      <circle cx="14" cy="9.5" r="0.8" fill="currentColor" />
      <circle cx="16" cy="7.5" r="0.8" fill="currentColor" />
      <path d="M10 10l2-1.5 2 1 4-2.5" />
    </svg>
  );
}

function HeroExpertTestimonyIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="18" />
      <line x1="6" y1="18" x2="18" y2="18" />
      <line x1="6" y1="9" x2="18" y2="9" />
      <path d="M6 9 L4 14 L8 14 Z" />
      <path d="M18 9 L16 14 L20 14 Z" />
      <circle cx="12" cy="5" r="1" fill="currentColor" />
    </svg>
  );
}

export const forensicsItems = [
  {
    id: "digital-data-collection",
    title: "Digital Data Collection",
    description:
      "Forensic imaging of ESI is essential to conducting an inviolable digital investigation. The acquisition process requires a thorough step by step analysis to ensure all information is validated and incontestable in court. We guarantee that every imaged device is duplicated as a safeguard against data corruption.",
    Icon: DataCollectionIcon,
    HeroIcon: HeroDataCollectionIcon,
  },
  {
    id: "digital-forensic-analysis",
    title: "Digital Forensic Analysis",
    description:
      "Utilizing today's most advanced AI technology, we meticulously analyze the captured information to establish the user actions performed prior to collection. Our detailed analysis of acquired devices provides you with a convenient and easy to understand report of the research findings.",
    Icon: ForensicAnalysisIcon,
    HeroIcon: HeroForensicAnalysisIcon,
  },
  {
    id: "expert-testimony",
    title: "Expert Testimony",
    description:
      "Our forensic experts present electronic evidence in a transparent and easy to understand manner. Our team is trained to work closely with the litigation team and prepare the findings of the analysis for fair presentation. We act as expert witnesses in a variety of litigation environments explaining complex matters in a succinct and easy to understand manner.",
    Icon: ExpertTestimonyIcon,
    HeroIcon: HeroExpertTestimonyIcon,
  },
];
