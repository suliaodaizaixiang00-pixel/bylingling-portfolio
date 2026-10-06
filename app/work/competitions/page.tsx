const competitions = [
  {
    number: '01',
    eyebrow: 'Competition 01',
    title: 'Campaign Proposal for the National Advertising Art Design Competition',
    award: 'National Third Prize, 15th National Advertising Art Design Competition',
    concept: 'A self-portrait represents how we portray, understand, and construct our true selves on the XPPen pen display through the support of X3 technology in the pen held in our hands. It is a journey of self-exploration and reflection, encouraging people to listen to those distinctive inner voices from different stages of their lives.',
  },
  {
    number: '02',
    eyebrow: 'Competition 02',
    title: 'Campaign Proposal for the Advertising Festival of College Students',
    award: 'National Bronze Prize, 2022 Advertising Festival of College Students',
    concept: 'By drawing on the product’s core characteristics, we used the idea of a “trio” as the creative entry point, linking Calleton’s baked cake with the deliciousness, nutrition, and sense of happiness it brings, as well as with its target consumer groups. The message we aimed to convey is that, regardless of people’s identities in the city or whether their goals are the same, Calleton baked products can offer nourishing and delicious baked comfort when people feel tired, accompanying individuals at different stages of life as they continue striving with energy and creating a sense of urban happiness through baking.',
  },
] as const;

function PlaceholderGallery({ number, title }: { number: string; title: string }) {
  return (
    <div className="case-media-wrap">
      <p className="case-media-hint">Swipe / scroll to explore →</p>
      <div className="case-media-track" tabIndex={0} aria-label={`${title} image gallery; images coming soon`}>
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

export default function CompetitionsPage() {
  return (
    <main className="product-marketing-page competitions-page">
      <header className="case-header">
        <a href="/#work">Lingling Yang</a>
        <span>(06) Competitions</span>
        <a className="case-back" href="/#work">← Back to work</a>
      </header>

      <section className="case-hero competitions-hero" aria-labelledby="competitions-title">
        <p className="case-number">(06)</p>
        <h1 id="competitions-title">Competitions</h1>
      </section>

      <div className="case-sections">
        {competitions.map((competition) => (
          <section className="case-section competition-section" key={competition.number}>
            <header className="case-section-heading">
              <p className="case-section-number">{competition.number}</p>
              <p className="case-section-eyebrow">{competition.eyebrow}</p>
              <h2>{competition.title}</h2>
              <p className="case-section-subtitle competition-award"><em>{competition.award}</em></p>
            </header>

            <PlaceholderGallery number={competition.number} title={competition.title} />

            <div className="case-section-body competition-concept">
              <p><strong>Creative Concept:</strong></p>
              <p>{competition.concept}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
