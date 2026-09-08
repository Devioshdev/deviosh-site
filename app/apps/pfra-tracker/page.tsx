import Image from "next/image";
import Link from "next/link";
import { AppStoreBadge } from "./app-store-badge";
import { AthleteField } from "./athlete-field";
import { PhoneMockup } from "./phone-mockup";
import { PFRA_PRIVACY_URL } from "@/lib/pfra";
import scoringBody from "./assets/scoring-body-comp.webp";
import scoringCardio from "./assets/scoring-cardio.webp";
import scoringCore from "./assets/scoring-core.webp";
import scoringRow from "./assets/scoring-row.webp";
import scoringStrength from "./assets/scoring-strength.webp";
import styles from "./pfra.module.css";

const scoringCards = [
  {
    id: "cardio",
    title: "Cardio",
    max: 50,
    events: "2-Mile Run or 20m HAMR",
    image: scoringCardio,
  },
  {
    id: "strength",
    title: "Strength",
    max: 15,
    events: "Hand-Release or Standard Push-Ups",
    image: scoringStrength,
  },
  {
    id: "core",
    title: "Core",
    max: 15,
    events: "Sit-Ups / Reverse Crunches / Plank",
    image: scoringCore,
  },
  {
    id: "body",
    title: "Body Comp",
    max: 20,
    events: "WHtR",
    image: scoringBody,
  },
] as const;

export default function PfraTrackerPage() {
  return (
    <div className={`pfraPage ${styles.page}`}>
      <a className={styles.skip} href="#features">
        Skip to content
      </a>

      <header className={styles.nav}>
        <Link className={styles.logo} href="/apps/pfra-tracker">
          PFRA <span>Tracker</span>
        </Link>
        <nav className={styles.navLinks} aria-label="PFRA Tracker">
          <a href="#features">Features</a>
          <a href="#scoring">Scoring</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
        </nav>
        <AppStoreBadge className={styles.navBadge} />
      </header>

      <section className={styles.hero} id="features">
        <div className={styles.streaks} aria-hidden="true" />

        <div className={styles.heroCopy}>
          <h1 className={styles.headline}>
            <span>Cardio.</span>
            <span>Strength.</span>
            <span>Core.</span>
            <span className={styles.gold}>Know where you stand.</span>
          </h1>
          <p className={styles.tagline}>Track · Score · Pass · Repeat</p>
        </div>

        <AthleteField />

        <div className={styles.heroAside}>
          <PhoneMockup />
          <AppStoreBadge />
          <p className={styles.motto}>
            <span>Built for your cadence.</span>
            <strong>Own your performance.</strong>
          </p>
        </div>
      </section>

      <section className={styles.cards} id="scoring" aria-labelledby="scoring-title">
        <h2 id="scoring-title" className={styles.srOnly}>
          Scoring components
        </h2>
        <ul className={styles.srOnly}>
          {scoringCards.map((card) => (
            <li key={card.id}>
              {card.title}, max {card.max}. {card.events}.
            </li>
          ))}
        </ul>
        <div className={styles.cardStrip} aria-hidden="true">
          <Image
            src={scoringRow}
            alt=""
            className={styles.cardStripImg}
            sizes="(max-width: 980px) 0px, min(1480px, 92vw)"
            placeholder="blur"
          />
        </div>
        <div className={styles.cardShots} aria-hidden="true">
          {scoringCards.map((card) => (
            <Image
              key={card.id}
              src={card.image}
              alt=""
              className={styles.cardShot}
              sizes="(max-width: 640px) 92vw, 46vw"
              placeholder="blur"
            />
          ))}
        </div>
      </section>

      <section className={styles.rules} aria-labelledby="rules-title">
        <div>
          <p className={styles.kicker}>100-point scale</p>
          <h2 id="rules-title">Pass the whole board, not just the total.</h2>
          <p>
            PFRA Tracker scores four components out of 100. A passing result
            needs 75 or more — and the component floors below. The 86.5 example
            on this page is demo data, not a real athlete.
          </p>
        </div>
        <ul>
          <li>
            <strong>Total</strong>
            <span>Pass at 75 / 100</span>
          </li>
          <li>
            <strong>Cardio ≥ 35</strong>
            <span>2-Mile Run · 20m HAMR</span>
          </li>
          <li>
            <strong>Strength ≥ 2.5</strong>
            <span>Hand-Release Push-Ups (2 min) · Standard Push-Ups (1 min)</span>
          </li>
          <li>
            <strong>Core ≥ 2.5</strong>
            <span>
              Sit-Ups (1 min) · Cross-Leg Reverse Crunches (2 min) · Forearm
              Plank (timed)
            </span>
          </li>
          <li>
            <strong>Body Comp &gt; 0</strong>
            <span>Waist-to-height ratio (WHtR), max 20</span>
          </li>
        </ul>
      </section>

      <section className={styles.resources} id="resources">
        <div>
          <p className={styles.kicker}>Resources</p>
          <h2>Get the app. Read the policy.</h2>
          <p>
            PFRA Tracker is on the App Store. Privacy details live on a public
            policy page — no extra storefronts, no invented download links.
          </p>
        </div>
        <div className={styles.resourceActions}>
          <AppStoreBadge />
          <a
            className={styles.textLink}
            href={PFRA_PRIVACY_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>
        </div>
      </section>

      <section className={styles.about} id="about">
        <p className={styles.kicker}>About</p>
        <h2>Independent software from Deviosh.</h2>
        <p>
          PFRA Tracker is a founder-built iOS app for tracking cardio, strength,
          core, and body-composition scores. It is an independent product — not
          affiliated with any military branch.
        </p>
        <Link className={styles.textLink} href="/">
          Back to Deviosh
        </Link>
      </section>

      <footer className={styles.footer}>
        <Link href="/">Deviosh</Link>
        <p>Independent app · Not affiliated with any military branch</p>
        <a href={PFRA_PRIVACY_URL} rel="noopener noreferrer" target="_blank">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
