import styles from "./pfra.module.css";

export function AthleteField() {
  return (
    <div className={styles.athletes} aria-hidden="true">
      <div className={styles.athleteGlow} />
      <svg
        className={styles.athleteSvg}
        viewBox="0 0 720 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="360" cy="392" rx="230" ry="18" fill="#00164d" opacity=".55" />
        <g transform="translate(70 86) scale(.86)">
          <Runner fill="#0c2a73" rim="#7DC7E3" />
        </g>
        <g transform="translate(400 70) scale(.9)">
          <Runner fill="#0a2466" rim="#9ad6ea" flip />
        </g>
        <g transform="translate(228 40)">
          <Runner fill="#12357f" rim="#7DC7E3" />
        </g>
      </svg>
    </div>
  );
}

function Runner({
  fill,
  rim,
  flip = false,
}: {
  fill: string;
  rim: string;
  flip?: boolean;
}) {
  return (
    <g transform={flip ? "translate(250 0) scale(-1 1)" : undefined}>
      <path
        d="M118 46c12 3 20 16 16 28-4 11-16 16-27 13-12-3-18-15-14-26 4-11 14-17 25-15Z"
        fill={fill}
        stroke={rim}
        strokeWidth="2"
      />
      <path
        d="M86 92c18-14 58-16 72 6 9 14 4 36-2 58l-18 8c-2-16-1-32 4-42-8-8-24-6-36 4-4 4-12 18-16 16-3-2 0-28-4-50Z"
        fill={fill}
        stroke={rim}
        strokeWidth="2"
      />
      <path
        d="M92 168c16 4 40 2 54-12 6 18 8 40 4 58-16 8-38 10-56 4-8-18-10-34-2-50Z"
        fill="#081c52"
      />
      <path
        d="M154 86c22 8 40 36 30 48-10 6-22-8-34-22-4-6-4-16 4-26Z"
        fill={fill}
        stroke={rim}
        strokeWidth="2"
      />
      <path
        d="M78 102c-22 16-34 40-26 50 10 4 20-14 28-30 3-7 4-14-2-20Z"
        fill={fill}
        stroke={rim}
        strokeWidth="2"
      />
      <path
        d="M104 218c6 22 0 40-12 62-4 8-16 18-10 26 8 2 20-10 26-22 12-22 18-42 12-62l-16-4Z"
        fill={fill}
        stroke={rim}
        strokeWidth="2"
      />
      <path
        d="M136 220c16 18 34 32 30 50-4 14-18 20-12 30 10-2 24-16 28-32 6-24-12-44-30-56l-16 8Z"
        fill={fill}
        stroke={rim}
        strokeWidth="2"
      />
    </g>
  );
}
