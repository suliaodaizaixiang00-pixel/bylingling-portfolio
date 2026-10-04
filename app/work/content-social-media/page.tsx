const contentPlanningImages = [
  '/work/content-social-media/content-planning/01-mistine-campaign-roadmap.png',
  '/work/content-social-media/content-planning/02-coca-cola-social-operations.png',
] as const;

const editorialProjects = [
  {
    title: 'XIHU MUSIC FESTIVAL: Featured Editorial Content',
    images: ['/work/content-social-media/editorial/01-xihu-music-festival.png'],
  },
  {
    title: 'XIHU TEA ROOM: Recurring Editorial Column',
    images: ['/work/content-social-media/editorial/02-xihu-tea-room.png'],
  },
  {
    title: 'Personal WeChat Editorial Design & Editing',
    images: ['/work/content-social-media/editorial/03-personal-wechat-design.png'],
  },
] as const;

const shortFormProjects = [
  {
    title: 'NEED! MARKET — Event Video Planning & Production',
    images: ['/work/content-social-media/short-form/01-need-market-video.png'],
  },
] as const;

function ImageGallery({
  label,
  number,
  images,
}: {
  label: string;
  number: string;
  images: readonly string[];
}) {
  return (
    <div className="case-media-wrap influencer-media-wrap">
      <p className="case-media-hint">Swipe / scroll to explore →</p>
      <div className="case-media-track" tabIndex={0} aria-label={`${label} image gallery`}>
        {images.map((src, index) => (
          <figure className="case-media-slide" key={src}>
            <span>{number}.{(index + 1).toString().padStart(2, '0')}</span>
            <img src={src} alt={`${label} project material ${index + 1}`} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function ContentSocialMediaPage() {
  return (
    <main className="product-marketing-page content-social-page">
      <header className="case-header">
        <a href="/#work">Lingling Yang</a>
        <span>(04) Content &amp; Social Media</span>
        <a className="case-back" href="/#work">← Back to work</a>
      </header>

      <section className="case-hero content-social-hero" aria-labelledby="content-social-title">
        <p className="case-number">(04)</p>
        <h1 id="content-social-title">Content &amp; Social Media</h1>
      </section>

      <div className="influencer-sections content-social-sections">
        <section className="case-section content-planning-section" aria-labelledby="content-planning-title">
          <header className="case-section-heading">
            <p className="case-section-number">01</p>
            <p className="case-section-eyebrow">Content Planning &amp; Social Operations</p>
            <h2 id="content-planning-title">Content Planning &amp;<br />Social Operations</h2>
            <p className="case-section-lead content-planning-intro">
              Planned and coordinated brand-owned social content across campaign and always-on communications for Coca-Cola China and Mistine China. Managed content calendars, publishing schedules, execution, and quality control for Coca-Cola China’s official Weibo and WeChat accounts, contributing to <strong>90K+ follower growth, 4.49M engagements, and 174M impressions</strong>. For Mistine China, developed and managed an integrated campaign roadmap spanning product communication, gift-box promotion, creator content, social media, and campaign materials, coordinating cross-functional workstreams to ensure consistent and timely delivery.
            </p>
          </header>
          <ImageGallery label="Content Planning & Social Operations" number="01" images={contentPlanningImages} />
        </section>

        <section className="influencer-section" aria-labelledby="editorial-content-title">
          <header className="influencer-section-header">
            <p>02</p>
            <div>
              <p className="influencer-section-kicker">Editorial Content &amp; Storytelling</p>
              <h2 id="editorial-content-title">Editorial Content &amp;<br />Storytelling</h2>
            </div>
          </header>

          <div className="influencer-projects">
            {editorialProjects.map((project, index) => (
              <article className="influencer-project" key={project.title}>
                <div className="influencer-project-copy">
                  <p className="influencer-project-number">02.{(index + 1).toString().padStart(2, '0')}</p>
                  <h3>{project.title}</h3>
                </div>
                <ImageGallery label={project.title} number={`02.${(index + 1).toString().padStart(2, '0')}`} images={project.images} />
              </article>
            ))}
          </div>
        </section>

        <section className="influencer-section" aria-labelledby="short-form-title">
          <header className="influencer-section-header">
            <p>03</p>
            <div>
              <p className="influencer-section-kicker">Short-form Video &amp; On-site Content</p>
              <h2 id="short-form-title">Short-form Video &amp;<br />On-site Content</h2>
            </div>
          </header>

          <div className="influencer-projects">
            {shortFormProjects.map((project, index) => (
              <article className="influencer-project" key={project.title}>
                <div className="influencer-project-copy">
                  <p className="influencer-project-number">03.{(index + 1).toString().padStart(2, '0')}</p>
                  <h3>{project.title}</h3>
                </div>
                <ImageGallery label={project.title} number={`03.${(index + 1).toString().padStart(2, '0')}`} images={project.images} />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
