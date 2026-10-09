const cases = [
  {
    title: 'Coke With Meals — Integrated Social Communications Plan',
    images: [
      '/work/creative-campaign-strategy/case-01/01-cwm-social-connection.png',
      '/work/creative-campaign-strategy/case-01/02-campaign-calendar.png',
      '/work/creative-campaign-strategy/case-01/03-catering-market.png',
      '/work/creative-campaign-strategy/case-01/04-creative-activation.png',
    ],
  },
  {
    title: 'Coke With Meals — Integrated Marketing Strategy',
    images: [
      '/work/creative-campaign-strategy/case-02/01-cwm-proposal.png',
      '/work/creative-campaign-strategy/case-02/02-cwm-content-calendar.png',
      '/work/creative-campaign-strategy/case-02/03-cwm-event-content.png',
    ],
  },
  {
    title: 'Lemon Coke × McDonald’s Social Campaign Strategy',
    images: [
      '/work/creative-campaign-strategy/case-03/01-lemon-coke-overview.png',
      '/work/creative-campaign-strategy/case-03/02-lemon-coke-kol.png',
      '/work/creative-campaign-strategy/case-03/03-lemon-coke-performance.png',
      '/work/creative-campaign-strategy/case-03/04-lemon-coke-listening.png',
    ],
  },
  {
    title: 'MISTINE Sports Series — Co-Branding Partnership Proposal',
    images: [
      '/work/creative-campaign-strategy/case-04/01-mistine-partnership.png',
      '/work/creative-campaign-strategy/case-04/02-mistine-product-strategy.png',
    ],
  },
] as const;

function ImageGallery({ label, number, images }: { label: string; number: string; images: readonly string[] }) {
  return (
    <div className="case-media-wrap creative-case-media">
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

export default function CreativeCampaignStrategyPage() {
  return (
    <main className="product-marketing-page creative-strategy-page">
      <header className="case-header">
        <a href="/#work">Lingling Yang</a>
        <span>(03) Creative &amp; Campaign Strategy</span>
        <a className="case-back" href="/#work">← Back to work</a>
      </header>

      <section className="case-hero creative-strategy-hero" aria-labelledby="creative-strategy-title">
        <p className="case-number">(03)</p>
        <h1 id="creative-strategy-title">Creative &amp;<br />Campaign Strategy</h1>
        <div className="case-hero-meta">
          <p>Developed campaign strategies and creative proposals for Coca-Cola and Mistine, translating brand objectives, consumer insights, and cultural trends into communication concepts, content frameworks, and integrated activation plans across social, digital, partnership, and offline touchpoints.</p>
        </div>
      </section>

      <div className="case-sections creative-case-sections">
        {cases.map((entry, index) => {
          const caseNumber = (index + 1).toString().padStart(2, '0');
          return (
            <section className="case-section creative-case" key={entry.title}>
              <header className="case-section-heading">
                <p className="case-section-number">{caseNumber}</p>
                <p className="case-section-eyebrow">Case {caseNumber}</p>
                <h2>{entry.title}</h2>
              </header>
              <ImageGallery label={entry.title} number={`03.${caseNumber}`} images={entry.images} />
            </section>
          );
        })}
      </div>
      <footer className="case-footer"><a href="/#work">← Back to work</a></footer>
    </main>
  );
}
