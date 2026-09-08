import styles from "./pfra.module.css";

const components = [
  { letter: "C", label: "Cardio" },
  { letter: "S", label: "Strength" },
  { letter: "K", label: "Core" },
  { letter: "B", label: "Body Comp" },
] as const;

export function PhoneMockup() {
  return (
    <figure className={styles.phoneWrap}>
      <div className={styles.phone}>
        <span className={styles.phoneSilent} aria-hidden="true" />
        <span className={styles.phoneVol} aria-hidden="true" />
        <span className={styles.phonePower} aria-hidden="true" />
        <div className={styles.phoneScreen}>
          <div className={styles.island} aria-hidden="true" />
          <header className={styles.phoneTop}>
            <span className={styles.phoneMenu} aria-hidden="true" />
            <p className={styles.phoneBrand}>PFRA TRACKER</p>
            <span className={styles.phoneChart} aria-hidden="true" />
          </header>
          <p className={styles.phoneEyebrow}>Live score</p>
          <p className={styles.phoneScore}>86.5</p>
          <p className={styles.phoneStatus}>
            <i />
            Passing
            <i />
          </p>
          <ul className={styles.phoneIcons}>
            {components.map((item, index) => (
              <li key={item.letter}>
                <span className={index % 2 ? styles.iconCyan : styles.iconNavy}>
                  {item.letter}
                </span>
                <em>{item.label}</em>
              </li>
            ))}
          </ul>
          <div className={styles.phoneStats}>
            <div>
              <span>Percentile</span>
              <strong>82nd</strong>
              <div className={styles.phoneBar}>
                <i style={{ width: "82%" }} />
              </div>
            </div>
            <div>
              <span>Next test window</span>
              <strong>45 days</strong>
            </div>
          </div>
          <div className={styles.phoneCta}>
            View details
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M6 3.5 11 8l-5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <figcaption className={styles.phoneCaption}>
        Example dashboard · 86.5 / 100 PASSED · Satisfactory. Demo data — not a
        real athlete.
      </figcaption>
    </figure>
  );
}
