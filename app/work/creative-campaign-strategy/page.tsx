const cases = [
  'Coke With Meals — Integrated Social Communications Plan',
  'Coke With Meals — Integrated Marketing Strategy',
  'Lemon Coke × McDonald’s Social Campaign Strategy',
  'MISTINE Sports Series — Co-Branding Partnership Proposal',
] as const;

function PlaceholderGallery({ label, number }: { label: string; number: string }) {
  return (
    <div className="case-media-wrap creative-case-media">
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
        {cases.map((title, index) => {
          const caseNumber = (index + 1).toString().padStart(2, '0');
          return (
            <section className="case-section creative-case" key={title}>
              <header className="case-section-heading">
                <p className="case-section-number">{caseNumber}</p>
                <p className="case-section-eyebrow">Case {caseNumber}</p>
                <h2>{title}</h2>
              </header>
              <PlaceholderGallery label={title} number={`03.${caseNumber}`} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
