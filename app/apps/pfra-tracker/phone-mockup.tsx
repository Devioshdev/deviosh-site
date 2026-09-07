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
        <div className={styles.phoneScreen}>
          <header className={styles.phoneTop}>
            <span className={styles.phoneMenu} aria-hidden="true" />
            <p className={styles.phoneBrand}>PFRA TRACKER</p>
            <span className={styles.phoneChart} aria-hidden="true" />
          </header>
          <p className={styles.phoneEyebrow}>Live score</p>
          <p className={styles.phoneScore}>86.5</p>
          <p className={styles.phoneStatus}>Passing</p>
          <ul className={styles.phoneIcons}>
            {components.map((item) => (
              <li key={item.letter}>
                <span>{item.letter}</span>
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
          <div className={styles.phoneCta}>View details</div>
        </div>
      </div>
      <figcaption className={styles.phoneCaption}>
        Example dashboard · 86.5 / 100 PASSED · Satisfactory. Demo data — not a
        real athlete.
      </figcaption>
    </figure>
  );
}
