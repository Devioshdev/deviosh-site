import Image from "next/image";
import athletes from "./assets/athletes.webp";
import styles from "./pfra.module.css";

export function AthleteField() {
  return (
    <div className={styles.athletes} aria-hidden="true">
      <div className={styles.athleteGlow} />
      <div className={styles.athleteGround} />
      <Image
        src={athletes}
        alt=""
        className={styles.athletePhoto}
        sizes="(max-width: 980px) 92vw, 52vw"
        fetchPriority="high"
        placeholder="blur"
      />
    </div>
  );
}
