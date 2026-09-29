const sections = [
  {
    number: '01',
    eyebrow: 'Market & Competitive Insights',
    title: 'Market & Competitive Insights',
    lead: 'Researching the competitive landscape to inform product positioning and marketing strategy.',
    body: 'Conducted competitive benchmarking across four major beauty brands — INTOYOU, 3CE, Perfect Diary, and Winona — analyzing product portfolios, consumer profiles, positioning, sales performance, influencer strategies, and campaign activities to identify category trends and inform Mistine’s product and marketing strategy.',
  },
  {
    number: '02',
    eyebrow: 'Case 01',
    title: 'MISTINE × FOX SPIRIT MATCHMAKER',
    subtitle: '— IP Co-branding Product Marketing Strategy',
    body: 'Developed an integrated product marketing strategy for Mistine’s collaboration with Fox Spirit Matchmaker, connecting product features and character identities to shape the collaboration concept, key selling points, limited-edition product experience, and campaign communication. Extended the strategy into go-to-market activation through creator seeding and social content planning, including a cosplay-focused influencer approach aligned with the IP audience and campaign narrative.',
  },
  {
    number: '03',
    eyebrow: 'Case 02',
    title: 'MISTINE MILK COFFEE LIP GLAZE',
    subtitle: '— 2024 Fall/Winter Limited Edition Product Marketing',
    body: 'Developed a seasonal product marketing strategy for Mistine’s Milk Coffee Lip Glaze Fall/Winter limited edition, translating beauty and lifestyle trends into product storytelling, visual direction, and campaign communication. Built the launch concept around the product’s shades, texture, and “Milk Coffee” associations, and extended the positioning across creator content, social communication, and promotional activation.',
  },
] as const;

export default function ProductMarketingPage() {
  return (
    <main className="product-marketing-page">
      <header className="case-header">
        <a href="/#work">Lingling Yang</a>
        <span>(01) Product Marketing</span>
        <a className="case-back" href="/#work">← Back to work</a>
      </header>

      <section className="case-hero" aria-labelledby="product-marketing-title">
        <p className="case-number">(01)</p>
        <h1 id="product-marketing-title">Product Marketing</h1>
        <div className="case-hero-meta">
          <p>From market insight to product positioning and go-to-market activation.</p>
          <p className="case-results"><strong>Commercial Results:</strong> 66 KOL Collaborations · 4.55M Social Impressions · RMB 3.60M GMV</p>
        </div>
      </section>

      <div className="case-sections">
        {sections.map((section) => (
          <section className="case-section" key={section.number}>
            <header className="case-section-heading">
              <p className="case-section-number">{section.number}</p>
              <p className="case-section-eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              {'subtitle' in section && <p className="case-section-subtitle">{section.subtitle}</p>}
              {'lead' in section && <p className="case-section-lead">{section.lead}</p>}
            </header>

            <div className="case-media-wrap">
              <p className="case-media-hint">Swipe / scroll to explore →</p>
              <div className="case-media-track" tabIndex={0} aria-label={`${section.title} image gallery; images coming soon`}>
                {[1, 2, 3].map((slot) => (
                  <div className="case-media-placeholder" key={slot}>
                    <span>{section.number}.{slot.toString().padStart(2, '0')}</span>
                    <p>Image coming soon</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="case-section-body">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
