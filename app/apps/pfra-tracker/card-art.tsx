import styles from "./pfra.module.css";

export function CardArt({
  name,
}: {
  name: "cardio" | "strength" | "core" | "body";
}) {
  return (
    <svg
      className={styles.cardArt}
      viewBox="0 0 140 90"
      fill="currentColor"
      preserveAspectRatio="xMaxYMax meet"
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
      <ellipse cx="78" cy="16" rx="8" ry="8.5" />
      <path d="M62 26c12-5 26-1 32 10 5 8 3 16-3 21-10 4-18 0-23-7 2-8-1-16-10-24Z" />
      <path d="M88 30c14 6 22 4 26-3 2 10-6 18-18 22-8 2-16-3-18-11Z" />
      <path d="M60 32c-16 8-26 6-30-3 3 14 14 22 28 23 6-6 8-13 2-20Z" />
      <path d="M62 52c-3 14-14 24-20 32 10 2 18-6 26-18 4-8 6-14 2-18Z" />
      <path d="M80 54c12 10 26 14 34 24-10 6-22 0-34-12-6-8-8-14-4-16Z" />
    </g>
  );
}

function PushUp() {
  return (
    <g>
      <ellipse cx="116" cy="24" rx="8" ry="7.5" />
      <path d="M16 44c12-14 40-22 72-20 18 1 32 8 40 16l-8 9c-10-7-24-12-38-12-26 0-46 8-54 20Z" />
      <path d="M30 40c-3 10 0 22 4 28h14c-3-9-3-18 2-26Z" />
      <path d="M100 32c6 8 8 18 6 26h16c2-12-1-22-8-30Z" />
      <path d="M18 68h20c1.4 0 2 1 2 2.4v3.2c0 1.4-.6 2.4-2 2.4H16c-1.4 0-2-1-2-2.4v-3.2c0-1.4.6-2.4 2-2.4Z" />
      <path d="M104 58h22c1.4 0 2 1 2 2.4v3.2c0 1.4-.6 2.4-2 2.4h-24c-1.4 0-2-1-2-2.4v-3.2c0-1.4.6-2.4 2-2.4Z" />
      <path d="M14 42c-6-2-10-8-8-14 6 1 12 4 16 10Z" />
    </g>
  );
}

function SitUp() {
  return (
    <g>
      <ellipse cx="86" cy="18" rx="8" ry="8.5" />
      <path d="M70 26c-8 10-20 22-30 30 8 2 16-2 24-10 6-6 10-12 10-18Z" />
      <path d="M78 28c10 10 22 16 32 18-2 7-10 9-20 6-8-2-14-10-12-24Z" />
      <path d="M28 62c10-4 22-16 32-28 10 10 24 16 40 16 3 8-4 16-16 18H34c-6-2-8-4-6-6Z" />
      <path d="M88 52c14 4 26 12 30 24-12 6-24 2-36-8-6-6-6-12-2-16Z" />
    </g>
  );
}

function ShieldBody() {
  return (
    <g>
      <path d="M70 6c22 7 40 5 48 2v38c0 24-18 40-48 50C40 86 22 70 22 46V8c10 3 26 5 48-2Z" />
      <g fill="#001428">
        <circle cx="70" cy="34" r="10" />
        <path d="M50 72c3-16 10-24 20-24s17 8 20 24Z" />
      </g>
    </g>
  );
}
