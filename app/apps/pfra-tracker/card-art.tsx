import styles from "./pfra.module.css";

export function CardArt({
  name,
}: {
  name: "cardio" | "strength" | "core" | "body";
}) {
  return (
    <svg
      className={styles.cardArt}
      viewBox="0 0 100 100"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {name === "cardio" ? <Runner /> : null}
      {name === "strength" ? <PushUp /> : null}
      {name === "core" ? <SitUp /> : null}
      {name === "body" ? <ShieldBody /> : null}
    </svg>
  );
}

function Runner() {
  return (
    <g>
      <circle cx="58" cy="16" r="9" />
      <path d="M44 28c12-6 26-2 32 12 4 9 0 16-7 20-10 4-18-2-22-10 2-8-2-16-12-22Z" />
      <path d="M70 34c14 6 22 2 26-6 0 12-8 20-20 24-8 2-16-4-18-12Z" />
      <path d="M42 36c-16 8-26 4-30-6 4 14 16 22 30 22 6-6 8-12 0-16Z" />
      <path d="M46 58c-4 14-14 24-22 32 12 0 20-8 28-20 4-8 6-14 0-16Z" />
      <path d="M62 60c12 10 26 14 34 24-12 6-22-2-34-14-6-8-8-14-4-16Z" />
    </g>
  );
}

function PushUp() {
  return (
    <g transform="translate(0 -4)">
      <circle cx="76" cy="20" r="9" />
      <path d="M20 42c12-14 34-20 52-16 10 2 16 8 20 14l-10 8c-6-6-14-10-22-10-16 0-30 8-36 16Z" />
      <path d="M36 38c-2 10 2 18 6 24h12c-3-8-3-16 0-22Z" />
      <path d="M66 32c6 8 8 18 6 24h12c2-10-2-18-8-26Z" />
      <path d="M18 44c-8-2-12-10-8-16 8 2 14 6 18 12Z" />
    </g>
  );
}

function SitUp() {
  return (
    <g transform="translate(0 -6)">
      <circle cx="64" cy="16" r="9" />
      <path d="M50 26c-8 12-20 22-30 30 8 2 16-4 24-12 8-8 12-14 10-18Z" />
      <path d="M58 28c12 10 22 14 32 14 0 8-10 10-20 6-8-2-14-10-12-20Z" />
      <path d="M22 62c10-4 20-14 30-26 10 10 22 16 36 16 4 8-4 14-14 16H28c-6-2-8-4-6-6Z" />
      <path d="M64 52c12 4 24 10 28 20-10 6-22 2-32-8-6-6-6-10-2-12Z" />
    </g>
  );
}

function ShieldBody() {
  return (
    <g>
      <path d="M50 10c18 6 32 4 38 2v30c0 20-14 34-38 42C24 76 10 62 10 42V12c8 2 22 4 40-2Z" />
      <g fill="#001428">
        <circle cx="50" cy="34" r="9" />
        <path d="M32 66c2-14 8-20 18-20s16 6 18 20Z" />
      </g>
    </g>
  );
}
