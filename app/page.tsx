'use client';

import { useEffect, useState } from 'react';

const firstLine = 'Lingling Yang.';
const secondLine = 'I make people look.*';
const headline = `${firstLine}\n${secondLine}`;
const heroVideo = '/hero-video.mov';
const footerVideo: string = '';

export default function Home() {
  const [length, setLength] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    if (!videoReady) return;

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
        if (i === headline.length) { i = 0; timer = setTimeout(tick, 2000); }
        else { i++; timer = setTimeout(tick, 120); }
      };
      tick();
    };
    start();
    motion.addEventListener('change', start);
    let frame = 0;
    const scroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const fadeDistance = Math.max(window.innerHeight * 0.8, 400);
        setHeroOpacity(Math.max(0, 1 - window.scrollY / fadeDistance));
      });
    };
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => { cancelled = true; clearTimeout(timer); cancelAnimationFrame(frame); motion.removeEventListener('change', start); window.removeEventListener('scroll', scroll); };
  }, [videoReady]);

  return (
    <main>
      {heroVideo && <div className="hero-video" style={{ opacity: heroOpacity }} aria-hidden="true"><div className="film-frame"><video src={heroVideo} autoPlay muted loop playsInline preload="auto" onLoadedData={() => setVideoReady(true)} onCanPlay={() => setVideoReady(true)} /></div></div>}
      <section className="hero" style={{ opacity: heroOpacity }} aria-label="Introduction">
        <div className="headline-wrap">
          <h1 aria-label={headline}>
            <span className="headline-line" aria-hidden="true">{firstLine.slice(0, length) || '\u00a0'}</span>
            <span className="headline-line headline-line-secondary" aria-hidden="true">{secondLine.slice(0, Math.max(0, length - firstLine.length - 1)) || '\u00a0'}</span>
          </h1>
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
