const strategyProjects = [
  {
    title: 'CWM Campaigns OCP Marketing — Influencer Brief & Review',
    images: [
      '/work/influencer-marketing/strategy/cwm-ocp/01-kol-brief.png',
      '/work/influencer-marketing/strategy/cwm-ocp/02-project-background.png',
      '/work/influencer-marketing/strategy/cwm-ocp/03-social-wave.png',
    ],
  },
  {
    title: 'Lemon Coke × McDonald’s Social Campaign Review',
    images: [
      '/work/influencer-marketing/strategy/lemon-coke-mcd/01-cover.png',
      '/work/influencer-marketing/strategy/lemon-coke-mcd/02-kol-performance.png',
      '/work/influencer-marketing/strategy/lemon-coke-mcd/03-learning.png',
    ],
  },
  {
    title: 'Coke FWWC Social Campaign — Influencer Brief & Review',
    images: ['/work/influencer-marketing/strategy/fwwc/01-fwwc-review.png'],
  },
  {
    title: 'Coke MAF Campaign — Influencer Brief',
    images: [
      '/work/influencer-marketing/strategy/coke-maf/01-kol-brief.png',
      '/work/influencer-marketing/strategy/coke-maf/02-seasonal-kol.png',
    ],
  },
  {
    title: 'CWM O2O Campaigns — Influencer Brief',
    images: [
      '/work/influencer-marketing/strategy/cwm-o2o/01-wave-01.png',
      '/work/influencer-marketing/strategy/cwm-o2o/02-shenyang-food-festival.png',
    ],
  },
] as const;

const activationProjects = [
  {
    title: 'COCA-COLA CHINA — CWM O2O Campaigns',
    body: 'Coordinated 64 KOLs across 11 cities, extending campaign engagement from social media to offline retail through store-visit content etc. while maintaining consistent brand messaging across local executions.',
    images: [
      '/work/influencer-marketing/activation/cwm-o2o/01-social-connection-plan.png',
      '/work/influencer-marketing/activation/cwm-o2o/02-campaign-calendar.png',
      '/work/influencer-marketing/activation/cwm-o2o/03-kol-strategy.png',
      '/work/influencer-marketing/activation/cwm-o2o/04-case-video-reference.png',
    ],
  },
  {
    title: 'MISTINE CHINA — Multi-platform Creator Activation',
    body: 'Coordinated 66 KOL collaborations across Weibo, RED, and Douyin as part of Mistine’s integrated marketing campaigns, aligning creator content with campaign positioning and messaging across social platforms.',
    images: [
      '/work/influencer-marketing/activation/mistine/01-single-product-seeding.png',
      '/work/influencer-marketing/activation/mistine/02-makeup-brief.png',
      '/work/influencer-marketing/activation/mistine/03-material-guidance.png',
      '/work/influencer-marketing/activation/mistine/04-giftbox-mechanisms.png',
      '/work/influencer-marketing/activation/mistine/05-kol-tracker.png',
    ],
  },
] as const;

function ImageGallery({ label, number, images }: { label: string; number: string; images: readonly string[] }) {
  return (
    <div className="case-media-wrap influencer-media-wrap">
      <p className="case-media-hint">Swipe / scroll to explore →</p>
      <div className="case-media-track" tabIndex={0} aria-label={`${label} image gallery`}>
        {images.map((src, index) => (
          <figure className="case-media-slide" key={src}>
            <span>{number}.{(index + 1).toString().padStart(2, '0')}</span>
            <img src={src} alt={`${label} campaign material ${index + 1}`} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function InfluencerMarketingPage() {
  return (
    <main className="product-marketing-page influencer-marketing-page">
      <header className="case-header">
        <a href="/#work">Lingling Yang</a>
        <span>(02) Influencer Marketing</span>
        <a className="case-back" href="/#work">← Back to work</a>
      </header>

      <section className="case-hero influencer-hero" aria-labelledby="influencer-marketing-title">
        <p className="case-number">(02)</p>
        <h1 id="influencer-marketing-title">Influencer Marketing</h1>
        <div className="case-hero-meta influencer-hero-meta">
          <p>From creator strategy to campaign activation.</p>
          <p>Developed and executed influencer campaigns across beauty and FMCG brands, translating campaign objectives into creator strategies, content briefs, and multi-platform activations across Weibo, RED, Douyin, and WeChat.</p>
          <p className="case-results"><strong>130+ Creator Collaborations · Beauty &amp; FMCG · Multi-platform Campaigns</strong></p>
        </div>
      </section>

      <div className="influencer-sections">
        <section className="influencer-section" aria-labelledby="creator-strategy-title">
          <header className="influencer-section-header">
            <p>01</p>
            <div>
              <p className="influencer-section-kicker">Creator Strategy &amp; Content Direction</p>
              <h2 id="creator-strategy-title">Creator Strategy &amp;<br />Content Direction</h2>
              <h3>COCA-COLA CHINA</h3>
              <p className="influencer-section-intro">Developed influencer briefs for Coca-Cola campaigns by translating campaign objectives and brand messaging into creator selection criteria, content angles, key messages, and platform-specific execution guidelines.</p>
            </div>
          </header>

          <div className="influencer-projects">
            {strategyProjects.map((project, index) => (
              <article className="influencer-project" key={project.title}>
                <div className="influencer-project-copy">
                  <p className="influencer-project-number">01.{(index + 1).toString().padStart(2, '0')}</p>
                  <h3>{project.title}</h3>
                </div>
                <ImageGallery label={project.title} number={`01.${(index + 1).toString().padStart(2, '0')}`} images={project.images} />
              </article>
            ))}
          </div>
        </section>

        <section className="influencer-section" aria-labelledby="campaign-activation-title">
          <header className="influencer-section-header">
            <p>02</p>
            <div>
              <p className="influencer-section-kicker">Campaign Activation &amp; Execution</p>
              <h2 id="campaign-activation-title">Campaign Activation &amp;<br />Execution</h2>
              <p className="influencer-section-intro">Coordinated creator activations across social platforms and regional campaigns, managing creator communication, content delivery, quality control, publishing schedules, and campaign rollout.</p>
            </div>
          </header>

          <div className="influencer-projects">
            {activationProjects.map((project, index) => (
              <article className="influencer-project" key={project.title}>
                <div className="influencer-project-copy">
                  <p className="influencer-project-number">02.{(index + 1).toString().padStart(2, '0')}</p>
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                </div>
                <ImageGallery label={project.title} number={`02.${(index + 1).toString().padStart(2, '0')}`} images={project.images} />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
