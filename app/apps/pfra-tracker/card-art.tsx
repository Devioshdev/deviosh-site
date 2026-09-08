import styles from "./pfra.module.css";

export function CardArt({
  name,
}: {
  name: "cardio" | "strength" | "core" | "body";
}) {
  return (
    <svg
      className={styles.cardArt}
      viewBox="0 0 160 90"
      fill="currentColor"
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
    <g transform="translate(28 6)">
      <ellipse cx="62" cy="10" rx="8" ry="9" />
      <path d="M52 20c10-4 22-2 30 8 6 8 6 16 2 22-10 4-18 2-24-4 2-8 0-16-8-26Z" />
      <path d="M78 28c14 6 24 4 28-2 2 10-6 18-16 22-8 2-16-2-18-10l6-10Z" />
      <path d="M56 30c-16 8-28 6-32-2 2 14 12 22 26 24 6-6 8-14 6-22Z" />
      <path d="M54 48c-4 16-16 28-22 38 10 2 18-6 26-18 4-8 6-14 4-20l-8 0Z" />
      <path d="M72 50c12 12 26 16 34 28-10 8-22 2-34-10-6-8-8-14-6-18l6 0Z" />
    </g>
  );
}

function PushUp() {
  return (
    <g transform="translate(10 18)">
      <ellipse cx="122" cy="18" rx="9" ry="8" />
      <path d="M18 42c8-16 28-24 58-26 22-2 38 4 48 12l-6 10c-12-6-28-10-46-8-24 2-40 8-48 18l-6-6Z" />
      <path d="M28 38c-4 10-2 22 2 28h14c-2-10-2-18 2-26l-18-2Z" />
      <path d="M108 32c6 8 8 18 6 26h16c2-12 0-22-6-30l-16 4Z" />
      <path d="M22 68h18v6H18zM112 60h22v6h-26z" />
    </g>
  );
}

function SitUp() {
  return (
    <g transform="translate(22 8)">
      <ellipse cx="78" cy="16" rx="8" ry="9" />
      <path d="M18 70c8-4 20-18 28-34 6 10 16 16 28 16 4 8 6 16 4 22H22c-4-2-6-4-4-4Z" />
      <path d="M50 40c12-16 22-22 32-24 2 8-2 16-10 24-6 6-14 10-22 10v-10Z" />
      <path d="M46 72c18-2 34-2 48 6 2 4-6 8-16 8H42c-2-4 0-12 4-14Z" />
    </g>
  );
}

function ShieldBody() {
  return (
    <g transform="translate(36 2)">
      <path d="M44 4c18 6 34 4 40 2v36c0 22-16 38-40 46C20 80 4 64 4 42V6c8 2 22 4 40-2Z" />
      <g fill="#001428" opacity=".88">
        <circle cx="44" cy="28" r="8" />
        <path d="M28 62c2-14 8-20 16-20s14 6 16 20H28Z" />
      </g>
    </g>
  );
}
