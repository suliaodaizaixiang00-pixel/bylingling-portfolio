'use client';

import { useEffect, useState } from 'react';

const headline = 'Lingling Yang. I make people look*.';
// Add the uploaded video URL here when the film is ready.
const heroVideo: string = '';
const footerVideo: string = '';

export default function Home() {
  const [length, setLength] = useState(headline.length);
  const [scrolled, setScrolled] = useState(false);
  const [videoHidden, setVideoHidden] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;
    const start = () => {
      clearTimeout(timer);
      if (motion.matches) { setLength(headline.length); return; }
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        setLength(i);
        if (i === headline.length) { i = 0; timer = setTimeout(tick, 800); }
        else { i++; timer = setTimeout(tick, 120); }
      };
      tick();
    };
    start();
    motion.addEventListener('change', start);
    const scroll = () => { setScrolled(window.scrollY > 200); setVideoHidden(window.scrollY > 400); };
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => { cancelled = true; clearTimeout(timer); motion.removeEventListener('change', start); window.removeEventListener('scroll', scroll); };
  }, []);

  return (
    <main>
      {heroVideo && <div className={`hero-video ${videoHidden ? 'is-hidden' : ''}`} aria-hidden="true"><video src={heroVideo} autoPlay muted loop playsInline /></div>}
      <section className={`hero ${scrolled ? 'is-hidden' : ''}`} aria-label="Introduction">
        <div className="headline-wrap">
          <h1 aria-label={headline}><span aria-hidden="true">{headline.slice(0, length) || '\u00a0'}</span></h1>
        </div>
        <p className={`footnote ${length === headline.length ? 'visible' : ''}`}>*And sometimes click</p>
      </section>
      <div className="fold">
        <section className="about" aria-labelledby="about-title">
          <h2 id="about-title">About Me</h2>
          <div className="about-copy" />
        </section>
        <section className="work" aria-label="Selected work">
          <div className="table-head"><h2>Client</h2><h2>Project</h2><h2>Type</h2><span /></div>
          <div className="work-space" />
        </section>
        <section className="contact" aria-labelledby="contact-title"><h2 id="contact-title">Contact</h2></section>
        <footer>
          <div className="credits"><p>© Lingling Yang 2026</p><p>Site</p><p>Video</p></div>
          {footerVideo && <div className="footer-video"><video src={footerVideo} autoPlay muted loop playsInline aria-label="Closing film" /></div>}
        </footer>
      </div>
    </main>
  );
}
