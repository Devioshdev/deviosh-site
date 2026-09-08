import Link from "next/link";
import { AppStoreBadge } from "./app-store-badge";
import { AthleteField } from "./athlete-field";
import { CardArt } from "./card-art";
import { PhoneMockup } from "./phone-mockup";
import { PFRA_PRIVACY_URL } from "@/lib/pfra";
import styles from "./pfra.module.css";

const scoringCards = [
  {
    id: "cardio",
    title: "Cardio",
    max: 50,
    events: "2-Mile Run or 20m HAMR",
    icon: "heart",
  },
  {
    id: "strength",
    title: "Strength",
    max: 15,
    events: "Hand-Release or Standard Push-Ups",
    icon: "strength",
  },
  {
    id: "core",
    title: "Core",
    max: 15,
    events: "Sit-Ups / Reverse Crunches / Plank",
    icon: "core",
  },
  {
    id: "body",
    title: "Body Comp",
    max: 20,
    events: "WHtR",
    icon: "tape",
  },
] as const;

function CardIcon({ name }: { name: (typeof scoringCards)[number]["icon"] }) {
  if (name === "heart") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10Z" />
        <path d="M5 12.5h2.6l1.6-2.6 2.2 5 1.6-2.4H19" />
      </svg>
    );
  }
  if (name === "strength") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="1.5" y="7" width="2.4" height="10" rx="0.8" />
        <rect x="20.1" y="7" width="2.4" height="10" rx="0.8" />
        <rect x="4.2" y="8.4" width="2.2" height="7.2" rx="0.6" />
        <rect x="17.6" y="8.4" width="2.2" height="7.2" rx="0.6" />
        <rect x="6.4" y="10.4" width="11.2" height="3.2" rx="1.2" />
      </svg>
    );
  }
  if (name === "core") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="16.2" cy="5.6" rx="2.3" ry="2.4" />
        <path d="M14.6 8c-2.6 3-6.8 6.6-10.4 8.2l1.4 2.2c3.8-1.6 7.4-4.8 9.4-7.6Z" />
        <path d="M4.6 16.2h8.6l.7 2H3.8z" />
        <path d="M12.6 18.2c1.2 1.8 1.5 3.6.6 5.2l-2.2-.7c.6-1 .4-2.2-.4-3.4z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3c4 1.4 7 1.2 8 .8v7.4C20 16.2 16.4 19.8 12 21.4 7.6 19.8 4 16.2 4 11.2V3.8c1.2.4 4 .6 8-.8Z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M9 16.2c.6-2 1.6-2.8 3-2.8s2.4.8 3 2.8" />
    </svg>
  );
}

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
        {scoringCards.map((card) => (
          <article className={styles.card} key={card.id}>
            <div className={styles.cardIcon}>
              <CardIcon name={card.icon} />
            </div>
            <h3>
              {card.title} <em>Max {card.max}</em>
            </h3>
            <p>{card.events}</p>
            <div className={styles.cardStage} aria-hidden="true">
              <CardArt name={card.id} />
            </div>
            <footer>Max score: {card.max}</footer>
          </article>
        ))}
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
