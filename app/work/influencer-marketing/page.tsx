const strategyProjects = [
  'CWM Campaigns OCP Marketing — Influencer Brief & Review',
  'Lemon Coke × McDonald’s Social Campaign Review',
  'Coke FWWC Social Campaign — Influencer Brief & Review',
  'Coke MAF Campaign — Influencer Brief',
  'CWM O2O Campaigns — Influencer Brief',
] as const;

const activationProjects = [
  {
    title: 'COCA-COLA CHINA — CWM O2O Campaigns',
    body: 'Coordinated 64 KOLs across 11 cities, extending campaign engagement from social media to offline retail through store-visit content etc. while maintaining consistent brand messaging across local executions.',
  },
  {
    title: 'MISTINE CHINA — Multi-platform Creator Activation',
    body: 'Coordinated 66 KOL collaborations across Weibo, RED, and Douyin as part of Mistine’s integrated marketing campaigns, aligning creator content with campaign positioning and messaging across social platforms.',
  },
] as const;

function PlaceholderGallery({ label, number }: { label: string; number: string }) {
  return (
    <div className="case-media-wrap influencer-media-wrap">
      <p className="case-media-hint">Swipe / scroll to explore →</p>
      <div className="case-media-track" tabIndex={0} aria-label={`${label} image gallery; images coming soon`}>
        {[1, 2, 3].map((slot) => (
          <div className="case-media-placeholder" key={slot}>
            <span>{number}.{slot.toString().padStart(2, '0')}</span>
            <p>Image coming soon</p>
          </div>
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
            {strategyProjects.map((title, index) => (
              <article className="influencer-project" key={title}>
                <div className="influencer-project-copy">
                  <p className="influencer-project-number">01.{(index + 1).toString().padStart(2, '0')}</p>
                  <h3>{title}</h3>
                </div>
                <PlaceholderGallery label={title} number={`01.${(index + 1).toString().padStart(2, '0')}`} />
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
                <PlaceholderGallery label={project.title} number={`02.${(index + 1).toString().padStart(2, '0')}`} />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
