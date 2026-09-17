"use client";

import { useEffect } from "react";

const pageMarkup = `
<nav class="nav" id="nav">
  <a class="brand" href="/"><img src="/assets/deviosh-logo-glow.png" alt="Deviosh logo" /><span>Deviosh</span></a>
  <div class="nav-links">
    <a href="#work">Apps</a>
    <a href="#studio">Studio</a>
    <a href="#craft">Craft</a>
    <a href="#contact">Contact</a>
  </div>
  <a href="mailto:hello@deviosh.com?subject=Talk%20apps" class="cta-pill">Say hello</a>
</nav>

<section class="hero" id="hero">
  <div>
    <span class="pill"><span class="dot"></span>Founder-led app studio · building and shipping products</span>
    <h1 class="h1" id="heroH1">
      <span class="word"><span>We</span></span>
      <span class="word"><span>build</span></span>
      <span class="word"><span>mobile</span></span>
      <span class="word"><span>apps</span></span>
      <span class="word"><span>people</span></span>
      <span class="word"><span>can</span></span>
      <span class="word"><span><em>trust,</em></span></span>
      <span class="word"><span><em>use,</em></span></span>
      <span class="word"><span>and <em>grow</em> with.</span></span>
    </h1>
    <p class="lede">Deviosh is a founder-led product brand. We design, build, and ship iOS and Android apps — craft in the product, from first sketch to the App Store.</p>
    <div class="hero-actions">
      <a href="mailto:hello@deviosh.com?subject=Talk%20apps" class="btn btn-primary">Say hello <span class="arrow">→</span></a>
      <a href="/apps/pfra-tracker" class="btn btn-ghost">See PFRA Tracker</a>
    </div>
  </div>

  <div class="stage" id="heroStage">
    <div class="blob amber" data-parallax="0.18"></div>
    <div class="blob forest" data-parallax="-0.12"></div>
    <div class="phone" id="heroPhone">
      <div class="phone-screen">
        <div class="ph-logo"><img src="/assets/deviosh-logo-glow.png" alt="" /></div>
        <div class="ph-eyebrow">Studio</div>
        <div class="ph-title">Build Board</div>
        <div class="ph-list" id="phList">
          <div class="ph-item" data-step="0"><div class="num">1</div><div class="label">Shape the first useful version</div></div>
          <div class="ph-item" data-step="1"><div class="num">2</div><div class="label">Design the core experience</div></div>
          <div class="ph-item" data-step="2"><div class="num">3</div><div class="label">Build, test, and iterate</div></div>
          <div class="ph-item" data-step="3"><div class="num">4</div><div class="label">Ship with store-ready polish</div></div>
        </div>
        <div class="ph-focus">
          <div class="lbl">Current focus</div>
          <div class="body" id="phFocus">Apps designed and shipped by the studio — products people can actually use.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-meta">
    <span>Founder-led studio</span>
    <span>Native iOS &amp; Android</span>
    <span>Live on the App Store</span>
  </div>
</section>

<section class="work" id="work">
  <div class="work-eyebrow reveal">Apps</div>
  <h2 class="work-h reveal">Shipped, live, and ours.</h2>
  <a class="work-card reveal" href="/apps/pfra-tracker">
    <div class="work-thumb" aria-hidden="true"><span>86.5</span><em>PFRA</em></div>
    <div>
      <div class="work-kicker">PFRA Tracker · iOS</div>
      <div class="work-card-h">Cardio. Strength. Core.</div>
      <p class="work-card-p">Know where you stand. A 100-point performance tracker for cardio, strength, core, and body composition — live on the App Store.</p>
      <span class="work-card-link">View the showcase <span class="arrow">→</span></span>
    </div>
  </a>
</section>

<section class="showcase" id="showcase">
  <div class="showcase-pin">
    <div class="showcase-bg"></div>
    <div class="showcase-rule">
      <span>How we ship</span>
      <div class="progress" id="showcaseProgress">
        <div class="seg" data-i="0"></div>
        <div class="seg" data-i="1"></div>
        <div class="seg" data-i="2"></div>
        <div class="seg" data-i="3"></div>
      </div>
    </div>

    <div class="showcase-text">
      <div class="showcase-eyebrow">Inside the studio</div>
      <div class="showcase-stack" id="showcaseStack" style="min-height:460px;width:100%">
        <div class="showcase-slide active" data-step="0">
          <div class="showcase-num">01 · Shape</div>
          <div class="showcase-h">Start with the first useful version.</div>
          <div class="showcase-p">Every Deviosh app begins as a tight product — the smallest version that is still worth shipping — then the design and the build grow around that.</div>
          <div class="showcase-tags"><span class="tag">First useful version</span><span class="tag">Product sense</span><span class="tag">Studio-led</span></div>
        </div>
        <div class="showcase-slide" data-step="1">
          <div class="showcase-num">02 · Design</div>
          <div class="showcase-h">AI-generated UX, hand-finished by a human.</div>
          <div class="showcase-p">Generative tools explore layouts and brand directions quickly. We curate, refine, and put a prototype on a real device before the product hardens.</div>
          <div class="showcase-tags"><span class="tag">Generative UX</span><span class="tag">Real-device prototype</span><span class="tag">Human-finished</span></div>
        </div>
        <div class="showcase-slide" data-step="2">
          <div class="showcase-num">03 · Build</div>
          <div class="showcase-h">Native code, made in the studio.</div>
          <div class="showcase-p">Real iOS and Android — generated, reviewed, and tested with AI in the loop, then hardened by hand. Weekly TestFlight and Play builds as the product takes shape.</div>
          <div class="showcase-tags"><span class="tag">Native iOS &amp; Android</span><span class="tag">Weekly builds</span><span class="tag">Hand-hardened</span></div>
        </div>
        <div class="showcase-slide" data-step="3">
          <div class="showcase-num">04 · Ship</div>
          <div class="showcase-h">Live in the stores, used in the wild.</div>
          <div class="showcase-p">Apps leave the studio through the App Store and Play — screenshots, copy, review, and a listing people can actually open.</div>
          <div class="showcase-tags"><span class="tag">App Store + Play</span><span class="tag">Store-ready polish</span><span class="tag">Shipped products</span></div>
        </div>
      </div>
    </div>

    <div class="showcase-stage" id="showcaseStage">
      <div class="blob amber" data-parallax="0.10" style="left:-20px;top:10%"></div>
      <div class="blob forest" data-parallax="-0.08" style="right:-20px;bottom:8%"></div>
      <div class="phone">
        <div class="phone-screen">
          <div class="ph-logo"><img src="/assets/deviosh-logo-glow.png" alt="" /></div>
        <div class="ph-eyebrow">Studio</div>
          <div class="ph-title">Build Board</div>
          <div class="ph-list" id="phListPin">
            <div class="ph-item" data-step="0"><div class="num">1</div><div class="label">Shape the first useful version</div></div>
            <div class="ph-item" data-step="1"><div class="num">2</div><div class="label">Design the core experience</div></div>
            <div class="ph-item" data-step="2"><div class="num">3</div><div class="label">Build, test, and iterate</div></div>
            <div class="ph-item" data-step="3"><div class="num">4</div><div class="label">Ship with store-ready polish</div></div>
          </div>
          <div class="ph-focus">
            <div class="lbl">Current focus</div>
            <div class="body" id="phFocusPin">Apps designed and shipped by the studio — products people can actually use.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="services" id="studio">
  <div class="services-eyebrow reveal">The studio</div>
  <h2 class="services-h reveal">App development as craft.</h2>
  <div class="cards">
    <div class="card" data-anim="">
      <div class="card-glyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="6" y="2" width="12" height="20" rx="3"></rect><path d="M10 18h4"></path></svg></div>
      <div class="card-num">01</div>
      <div class="card-h">Native products</div>
      <p class="card-p">iOS and Android apps designed and shipped by Deviosh — real native code, store-ready polish, and a listing people can open today.</p>
    </div>
    <div class="card" data-anim="">
      <div class="card-glyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 12a9 9 0 0 1 15.5-6.3"></path><path d="M21 12a9 9 0 0 1-15.5 6.3"></path><path d="M16 4v5h5"></path><path d="M8 20v-5H3"></path></svg></div>
      <div class="card-num">02</div>
      <div class="card-h">Brand in the product</div>
      <p class="card-p">Type, motion, and interface as one system — so the app feels like it belongs to a brand, not a template.</p>
    </div>
    <div class="card" data-anim="">
      <div class="card-glyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"></path><path d="M12 18v3"></path><path d="M3 12h3"></path><path d="M18 12h3"></path><circle cx="12" cy="12" r="4.5"></circle><path d="M12 9.5v2.5l1.8 1"></path></svg></div>
      <div class="card-num">03</div>
      <div class="card-h">Intelligence in the app</div>
      <p class="card-p">Features that help people inside the product — search, summaries, guidance — wired into the experience, not bolted on.</p>
    </div>
  </div>
</section>

<section class="process" id="craft">
  <div class="process-pin">
    <div class="process-left">
      <div>
        <div class="process-eyebrow">How apps get made</div>
        <h2 class="process-h">A practical path from <span class="swap" id="swapHL">idea</span> to <span class="swap" id="swapTL">shipped app</span>.</h2>
      </div>
      <div class="process-progress" id="processProgress">
        <div class="seg" data-i="0"></div>
        <div class="seg" data-i="1"></div>
        <div class="seg" data-i="2"></div>
        <div class="seg" data-i="3"></div>
      </div>
    </div>
    <div class="process-right" id="processRight">
      <div class="stepcard active" data-step="0">
        <div class="stepcard-num">01</div>
        <div>
          <div class="stepcard-name">Shape the first version</div>
          <p class="stepcard-desc">Find what is actually useful. A tight v1 — not a wish list — so design and engineering have something real to build toward.</p>
        </div>
        <ul class="stepcard-pts">
          <li>The smallest version worth shipping</li>
          <li>A clear path to the stores</li>
          <li>Studio-owned product decisions</li>
        </ul>
      </div>
      <div class="stepcard" data-step="1">
        <div class="stepcard-num">02</div>
        <div>
          <div class="stepcard-name">Design, then put it on a device</div>
          <p class="stepcard-desc">AI explores layouts and brand directions. We curate, refine, and hand-finish a clickable prototype on real hardware.</p>
        </div>
        <ul class="stepcard-pts">
          <li>Real-device prototype</li>
          <li>Brand, type, and motion as one system</li>
          <li>Human-finished UX</li>
        </ul>
      </div>
      <div class="stepcard" data-step="2">
        <div class="stepcard-num">03</div>
        <div>
          <div class="stepcard-name">Native build</div>
          <p class="stepcard-desc">Real iOS and Android — generated and tested with AI in the loop, then hardened by hand. Weekly TestFlight and Play builds as the product takes shape.</p>
        </div>
        <ul class="stepcard-pts">
          <li>Native iOS + Android</li>
          <li>Weekly TestFlight + Play builds</li>
          <li>Hand-hardened code</li>
        </ul>
      </div>
      <div class="stepcard" data-step="3">
        <div class="stepcard-num">04</div>
        <div>
          <div class="stepcard-name">Ship it</div>
          <p class="stepcard-desc">Store submission, screenshots, copy, and a live listing. The work is done when people can open the app — not when a deck says it is.</p>
        </div>
        <ul class="stepcard-pts">
          <li>App Store + Play submission from the studio</li>
          <li>Screenshots, copy, and metadata</li>
          <li>A product people can use</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    <span>Trust <em>●</em> Use <em>●</em> Grow <em>●</em> Trust <em>●</em> Use <em>●</em> Grow <em>●</em> Trust <em>●</em> Use <em>●</em> Grow <em>●</em></span>
    <span>Trust <em>●</em> Use <em>●</em> Grow <em>●</em> Trust <em>●</em> Use <em>●</em> Grow <em>●</em> Trust <em>●</em> Use <em>●</em> Grow <em>●</em></span>
  </div>
</div>

<section class="closer" id="contact">
  <div class="closer-blob-1" data-parallax="0.18"></div>
  <div class="closer-blob-2" data-parallax="-0.14"></div>
  <div class="closer-grid">
    <div>
      <div class="closer-eyebrow reveal">Talk apps</div>
      <h2 class="closer-h reveal">Building something? Say hello.</h2>
      <p class="closer-p reveal">You will hear from the founder behind Deviosh. Apps, brand, and the craft of shipping — if you want to talk, write.</p>
    </div>
    <div class="closer-actions reveal">
      <a href="mailto:hello@deviosh.com?subject=Talk%20apps" class="btn btn-primary">Say hello <span class="arrow">→</span></a>
      <a href="/apps/pfra-tracker" class="btn btn-ghost">See PFRA Tracker</a>
    </div>
  </div>
  <div class="closer-meta reveal">
    <span>Founder-led</span>
    <span>App Store products</span>
    <span>hello@deviosh.com</span>
  </div>
</section>

<footer>
  <div>© Deviosh, 2026</div>
  <div class="links">
    <a href="/apps/pfra-tracker">PFRA Tracker</a>
    <a href="https://github.com/devioshdev">GitHub</a>
    <a href="mailto:hello@deviosh.com?subject=Deviosh%20support">Support</a>
    <a href="mailto:hello@deviosh.com">hello@deviosh.com</a>
  </div>
</footer>
`;

export default function Home() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const nav = document.getElementById("nav");
    const process = document.getElementById("craft");
    const showcase = document.getElementById("showcase");
    const hero = document.getElementById("hero");
    const heroPhone = document.getElementById("heroPhone") as HTMLElement | null;
    const heroFocus = document.getElementById("phFocus");
    const phFocusPin = document.getElementById("phFocusPin");
    const swapHL = document.getElementById("swapHL");
    const swapTL = document.getElementById("swapTL");
    const showcaseSlides = document.querySelectorAll<HTMLElement>(
      "#showcaseStack .showcase-slide",
    );
    const showcaseProgress =
      document.querySelectorAll<HTMLElement>("#showcaseProgress .seg");
    const phListPin =
      document.querySelectorAll<HTMLElement>("#phListPin .ph-item");
    const stepcards = document.querySelectorAll<HTMLElement>(
      "#processRight .stepcard",
    );
    const processProgress =
      document.querySelectorAll<HTMLElement>("#processProgress .seg");
    const heroPhList = document.querySelectorAll<HTMLElement>("#phList .ph-item");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => document.body.classList.add("ready"));
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    document
      .querySelectorAll(".reveal, .card[data-anim]")
      .forEach((el) => io.observe(el));

    const heroFocusCopy = [
      "Apps designed and shipped by the studio — products people can actually use.",
      "AI-generated UX. Hand-finished by a human.",
      "Native iOS and Android. Built in the studio.",
      "Published to the App Store — and used in the wild.",
    ];
    const focusCopy = [
      "Shape the first useful version — then design around it.",
      "AI-generated UX, hand-finished into a real-device prototype.",
      "Native iOS and Android, built and tested in the studio.",
      "Published to the App Store, then lived in by real people.",
    ];
    const headSwaps = [
      ["idea", "first version"],
      ["shape", "prototype"],
      ["prototype", "native build"],
      ["build", "published app"],
    ];

    let heroLoopActive = true;
    let heroStep = 0;
    let ticking = false;
    const clamp = (value: number, min: number, max: number) =>
      Math.max(min, Math.min(max, value));
    const progressOf = (rect: DOMRect, viewportHeight: number) =>
      clamp(-rect.top / (rect.height - viewportHeight), 0, 1);

    const setHeroStep = (index: number) => {
      heroPhList.forEach((el, itemIndex) => {
        el.classList.toggle("active", itemIndex === index);
        el.classList.toggle("dim", itemIndex !== index);
      });
      if (heroFocus) heroFocus.textContent = heroFocusCopy[index];
    };
    setHeroStep(0);

    const interval = window.setInterval(() => {
      if (prefersReducedMotion || !heroLoopActive) return;
      heroStep = (heroStep + 1) % 4;
      setHeroStep(heroStep);
    }, 2200);

    const heroIO = new IntersectionObserver(
      ([entry]) => {
        heroLoopActive = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.1 },
    );
    if (hero) heroIO.observe(hero);

    const update = () => {
      if (prefersReducedMotion || !nav || !process || !showcase) {
        ticking = false;
        return;
      }

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      nav.classList.toggle("scrolled", scrollY > 40);
      const processRect = process.getBoundingClientRect();
      nav.classList.toggle(
        "dark",
        processRect.top < 60 && processRect.bottom > 80,
      );

      if (hero && heroPhone) {
        const heroRect = hero.getBoundingClientRect();
        const heroProgress = clamp(-heroRect.top / viewportHeight, 0, 1);
        heroPhone.style.transform = `translateY(${
          heroProgress * -40
        }px) scale(${1 - heroProgress * 0.05})`;
      }

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax);
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offsetFromCenter = center - viewportHeight / 2;
        el.style.transform = `translate3d(0, ${
          offsetFromCenter * speed * -0.25
        }px, 0)`;
      });

      const showcaseRect = showcase.getBoundingClientRect();
      if (showcaseRect.top <= 0 && showcaseRect.bottom > viewportHeight) {
        const progress = progressOf(showcaseRect, viewportHeight);
        const index = clamp(Math.floor(progress * 4), 0, 3);
        const segmentProgress = clamp(progress * 4 - index, 0, 1);
        showcaseSlides.forEach((el, itemIndex) =>
          el.classList.toggle("active", itemIndex === index),
        );
        phListPin.forEach((el, itemIndex) => {
          el.classList.toggle("active", itemIndex === index);
          el.classList.toggle("dim", itemIndex !== index);
        });
        if (phFocusPin) phFocusPin.textContent = focusCopy[index];
        showcaseProgress.forEach((seg, itemIndex) => {
          seg.classList.toggle("done", itemIndex < index);
          seg.classList.toggle("active", itemIndex === index);
          seg.style.setProperty(
            "--p",
            String(itemIndex === index ? segmentProgress : itemIndex < index ? 1 : 0),
          );
        });
      }

      if (processRect.top <= 0 && processRect.bottom > viewportHeight) {
        const progress = progressOf(processRect, viewportHeight);
        const index = clamp(Math.floor(progress * 4), 0, 3);
        const segmentProgress = clamp(progress * 4 - index, 0, 1);
        stepcards.forEach((el, itemIndex) =>
          el.classList.toggle("active", itemIndex === index),
        );
        processProgress.forEach((seg, itemIndex) => {
          seg.classList.toggle("done", itemIndex < index);
          seg.classList.toggle("active", itemIndex === index);
          seg.style.setProperty(
            "--p",
            String(itemIndex === index ? segmentProgress : itemIndex < index ? 1 : 0),
          );
        });
        if (swapHL && swapTL && swapHL.dataset.cur !== String(index)) {
          swapHL.dataset.cur = String(index);
          swapTL.dataset.cur = String(index);
          swapHL.textContent = headSwaps[index][0];
          swapTL.textContent = headSwaps[index][1];
        }
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
      heroIO.disconnect();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
