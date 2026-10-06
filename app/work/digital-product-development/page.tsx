function PlaceholderGallery() {
  return (
    <div className="case-media-wrap">
      <p className="case-media-hint">Swipe / scroll to explore →</p>
      <div className="case-media-track" tabIndex={0} aria-label="Under Tide movie screening mini program image gallery; images coming soon">
        {[1, 2, 3].map((slot) => (
          <div className="case-media-placeholder" key={slot}>
            <span>01.{slot.toString().padStart(2, '0')}</span>
            <p>Image coming soon</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DigitalProductDevelopmentPage() {
  return (
    <main className="product-marketing-page digital-product-page">
      <header className="case-header">
        <a href="/#work">Lingling Yang</a>
        <span>(05) Digital Product Development</span>
        <a className="case-back" href="/#work">← Back to work</a>
      </header>

      <section className="case-hero digital-product-hero" aria-labelledby="digital-product-title">
        <p className="case-number">(05)</p>
        <h1 id="digital-product-title">Digital Product Development</h1>
      </section>

      <div className="case-sections">
        <section className="case-section" aria-labelledby="under-tide-title">
          <header className="case-section-heading">
            <p className="case-section-number">01</p>
            <p className="case-section-eyebrow">WeChat Mini Program</p>
            <h2 id="under-tide-title">“Under Tide” Movie Screening WeChat Mini Program</h2>
          </header>

          <PlaceholderGallery />

          <div className="case-section-body digital-product-body">
            <p>Co-led the 0-to-1 development and launch of a movie-screening WeChat Mini Program, covering product planning, feature design, front-/back-end development, and post-launch maintenance; built core functions including screening discovery, event registration, attendee management, and a film discussion forum.</p>
            <p>Scaled the platform from 1 to 5 universities and partnered with 8 film-screening organizations, growing the user base to 5,000+ by Sep 2024 through continuous content operations, feature optimization, and technical troubleshooting.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
