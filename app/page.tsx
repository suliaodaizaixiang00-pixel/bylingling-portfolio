'use client';

import { useEffect, useState } from 'react';

const firstLine = 'Lingling.';
const secondLine = 'I make people look.*';
const headline = `${firstLine}\n${secondLine}`;
const heroVideo = '/hero-video.mov';
const workCategories = [
  ['01', 'Product Marketing', 'product-marketing'],
  ['02', 'Influencer Marketing', 'influencer-marketing'],
  ['03', 'Creative & Campaign Strategy', 'creative-campaign-strategy'],
  ['04', 'Content & Social Media', 'content-social-media'],
  ['05', 'Digital Product Development', 'digital-product-development'],
  ['06', 'Competitions', 'competitions'],
] as const;

export default function Home() {
  const [length, setLength] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [pageTone, setPageTone] = useState(0);
  const [clock, setClock] = useState('');
  const [activeSection, setActiveSection] = useState<'lingling' | 'experience' | 'work'>('lingling');

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
    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const experience = document.getElementById('experience');
        const work = document.getElementById('work');
        if (work && work.getBoundingClientRect().top <= 120) setActiveSection('work');
        else if (experience && experience.getBoundingClientRect().top <= 120) setActiveSection('experience');
        else setActiveSection('lingling');
      });
    };
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

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
      <section className="second-page" id="lingling" aria-label="About Lingling Yang">
        <header className="portfolio-header">
          <a className={`portfolio-brand nav-hover ${activeSection === 'lingling' ? 'is-active' : ''}`} href="#lingling">LINGLING YANG</a>
          <nav className="portfolio-nav" aria-label="Portfolio sections">
            <a className={`nav-item nav-hover ${activeSection === 'experience' ? 'is-active' : ''}`} href="#experience"><span>(A)</span> Experience</a>
            <a className={`nav-item nav-hover ${activeSection === 'work' ? 'is-active' : ''}`} href="#work"><span>(B)</span> Work</a>
            <a className="nav-item nav-hover" href="/contact"><span>(C)</span> Contact</a>
          </nav>
          <time className="portfolio-clock" aria-label="Current local time">{clock}</time>
        </header>
        <div className="profile-layout">
          <div className="profile-copy">
            <p>
              Hi, I’m Lingling — a digital marketer with a background in Advertising and Anthropology, with hands-on experience across beauty, FMCG, and culture &amp; entertainment. <span className="profile-accent">SPORTY</span> in spirit, <span className="profile-accent">TENDER</span> in how I see people, and <span className="profile-accent">CURIOUS</span> about what comes next.
            </p>
            <p>
              My experience spans influencer marketing, product marketing, content marketing, campaign execution, consumer research, and performance analysis, allowing me to approach marketing with both creative thinking and a data-informed mindset.
            </p>
            <p>
              I’m curious about how emerging technologies, especially AI, are changing the way we create, communicate, and market. I actively bring new tools into my workflows — from research and ideation to content development, data analysis, and coding-assisted projects — and enjoy discovering new ways to turn ideas into real outcomes.
            </p>
          </div>
          <figure className="profile-image-wrap">
            <img className="profile-image" src="/lingling-portrait.jpg" alt="Lingling Yang standing beside a blue lake and mountain landscape" />
          </figure>
        </div>
        <section className="skills-index" aria-label="Languages, skills, focus, and tools">
          <div className="skills-column">
            <h2>Languages</h2>
            <ul>
              <li>English (Proficient, IELTS 7.5)</li>
              <li>Mandarin (Native)</li>
              <li>Cantonese (Beginner)</li>
              <li>Spanish (Beginner)</li>
            </ul>
          </div>
          <div className="skills-column">
            <h2>Skills</h2>
            <ul>
              <li>Strategy &amp; Research</li>
              <li>Content &amp; Campaigns</li>
              <li>Data &amp; Analytics</li>
              <li>Product &amp; Digital</li>
            </ul>
          </div>
          <div className="skills-column">
            <h2>Focus</h2>
            <ul>
              <li>Digital Marketing</li>
              <li>Influencer Marketing</li>
              <li>Product Marketing</li>
              <li>Consumer &amp; Market Insights</li>
            </ul>
          </div>
          <div className="skills-column skills-tools">
            <h2>Tools</h2>
            <ul>
              <li>AI Tools</li>
              <li>MySQL · SPSS</li>
              <li>Google Analytics</li>
              <li>SEO · SEM / Search Ads</li>
              <li>Social Media Ads</li>
              <li>Photoshop · Premiere Pro · Final Cut Pro</li>
              <li>Canva</li>
            </ul>
          </div>
        </section>
        <section className="experience-page" id="experience" aria-labelledby="experience-title">
          <div className="resume-section education-section">
            <h2 id="experience-title">Education</h2>
            <div className="resume-content">
              <article className="resume-entry education-entry">
                <h3>The Chinese University of Hong Kong</h3>
                <p><em>Master of Arts in Anthropology</em> <span aria-hidden="true">|</span> GPA: 3.7/4.0 (Dean&apos;s List)</p>
              </article>
              <article className="resume-entry education-entry">
                <h3>Hangzhou City University</h3>
                <p><em>Bachelor of Arts in Advertising</em> <span aria-hidden="true">|</span> GPA: 3.9/4.0 (Top 1)<br />Government Scholarship, First-Class Honours</p>
              </article>
            </div>
          </div>

          <div className="resume-section work-section">
            <h2>Work Experience</h2>
            <div className="resume-content">
              <article className="resume-entry job-entry">
                <div className="job-heading">
                  <h3>Mistine China, Hangzhou</h3>
                  <p>Marketing Intern</p>
                </div>
                <ul>
                  <li>Developed and executed integrated marketing campaigns for beauty brand Mistine, translating consumer insights, social trends, and product selling points into campaign communication and content strategies</li>
                  <li>Conducted beauty market and competitor research to inform brand positioning, campaign planning, and influencer and media strategies</li>
                  <li>Executed social and influencer marketing across multiple platforms, coordinating media placements and 66 KOL collaborations that generated 4.55M impressions and contributed to RMB 3.60M GMV</li>
                </ul>
              </article>
              <article className="resume-entry job-entry">
                <div className="job-heading">
                  <h3>Shanghai Ogilvy Advertising, Shanghai</h3>
                  <p>Account Executive Intern</p>
                </div>
                <ul>
                  <li>Worked on integrated social campaigns for Coca-Cola China, translating campaign ideas into multi-platform activations across Weibo, WeChat, Xiaohongshu, and TikTok</li>
                  <li>Supported cross-market campaign delivery and optimization across 11 cities, coordinating stakeholders and translating campaign performance data into actionable post-campaign learnings</li>
                  <li>Managed social and influencer activation, coordinating media resources and 64 creators as part of campaigns that collectively delivered 300M+ video views and 4.49M engagements</li>
                </ul>
              </article>
              <article className="resume-entry job-entry">
                <div className="job-heading">
                  <h3>Dakuai Cultural Creativity Co., Ltd., Hangzhou</h3>
                  <p>Marketing Intern</p>
                </div>
                <ul>
                  <li>Developed content marketing for one of the largest music festivals in China XIHU Music Festival, identifying audience-relevant topics and creating editorial content to strengthen its digital presence and audience engagement</li>
                  <li>Supported community and event marketing through three festival-themed activations, contributing to 2,000 new followers and an average of 3,000 views per article.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="work-index" id="work" aria-labelledby="work-index-title">
          <div className="work-list-wrap">
            <h2 className="work-index-title" id="work-index-title">Selected work</h2>
            <nav className="work-category-list" aria-label="Work categories">
              {workCategories.map(([number, label, slug]) => (
                <a className="work-category" href={`/work/${slug}`} key={slug}>
                  <span className="work-category-number">{number}</span>
                  <span className="work-category-name">{label}</span>
                  <span className="work-category-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
          </div>
        </section>
      </section>
    </main>
  );
}
