'use client';

import { useEffect, useState } from 'react';

const firstLine = 'Lingling Yang.';
const secondLine = 'I make people look.*';
const headline = `${firstLine}\n${secondLine}`;
const heroVideo = '/hero-video.mov';

export default function Home() {
  const [length, setLength] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [pageTone, setPageTone] = useState(0);
  const [clock, setClock] = useState('');

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
        const transitionStart = window.innerHeight * 0.55;
        const transitionDistance = window.innerHeight * 0.45;
        setPageTone(Math.min(1, Math.max(0, (window.scrollY - transitionStart) / transitionDistance)));
      });
    };
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => { cancelled = true; clearTimeout(timer); cancelAnimationFrame(frame); motion.removeEventListener('change', start); window.removeEventListener('scroll', scroll); };
  }, [videoReady]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const timeZone = now.toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ').pop()?.replace(/[()]/g, '').toLowerCase();
      setClock(`${time} (${timeZone})`);
    };
    updateClock();
    const interval = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const backgroundChannel = Math.round(230 * pageTone);
  const pageBackground = `rgb(${backgroundChannel} ${backgroundChannel} ${backgroundChannel})`;

  return (
    <main id="top" style={{ backgroundColor: pageBackground }}>
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
      <section className="second-page" aria-label="Portfolio navigation">
        <header className="portfolio-header">
          <a className="portfolio-brand nav-hover" href="#top">LINGLING YANG</a>
          <nav className="portfolio-nav" aria-label="Portfolio sections">
            <a className="nav-item nav-hover" href="#experience"><span>(A)</span> Experience</a>
            <a className="nav-item nav-hover" href="#work"><span>(B)</span> Work</a>
            <a className="nav-item nav-hover" href="#contact"><span>(C)</span> Contact</a>
          </nav>
          <time className="portfolio-clock" aria-label="Current local time">{clock}</time>
        </header>
        <div className="second-page-space" id="experience" />
        <span id="work" className="section-anchor" />
        <span id="contact" className="section-anchor" />
      </section>
    </main>
  );
}
