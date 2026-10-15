const contentPlanningImages = [
  '/work/content-social-media/content-planning/01-mistine-campaign-roadmap.png',
  '/work/content-social-media/content-planning/02-coca-cola-calendar-week-01-02.png',
  '/work/content-social-media/content-planning/03-coca-cola-calendar-week-03-05.png',
  '/work/content-social-media/content-planning/04-coca-cola-weibo.png',
  '/work/content-social-media/content-planning/05-coca-cola-wechat.png',
] as const;

type Project = {
  title: string;
  images: readonly string[];
  description?: readonly string[];
};

const editorialProjects: readonly Project[] = [
  {
    title: 'XIHU MUSIC FESTIVAL: Featured Editorial Content',
    description: [
      'Contributed to the production of featured columns on the official XIHU Music Festival WeChat account, including “Fifteen Years of West Lake” and “WEWS.” Articles written and formatted by me received over 4,000 views in total.',
    ],
    images: [
      '/work/content-social-media/editorial/music-festival-01.png',
      '/work/content-social-media/editorial/music-festival-02.png',
      '/work/content-social-media/editorial/music-festival-03.png',
      '/work/content-social-media/editorial/music-festival-04.png',
    ],
  },
  {
    title: 'XIHU TEA ROOM: Recurring Editorial Column',
    description: [
      'As the lead planner, conceptualized and launched “XIHU Tea Room,” a new recurring daily column on the official West Lake Music Festival WeChat account from July to October 2022, with an average of over 500 views per post.',
    ],
    images: [
      '/work/content-social-media/editorial/tea-room-01.png',
      '/work/content-social-media/editorial/tea-room-02.png',
      '/work/content-social-media/editorial/tea-room-03.png',
      '/work/content-social-media/editorial/tea-room-04.png',
      '/work/content-social-media/editorial/tea-room-05.png',
    ],
  },
  {
    title: 'Personal WeChat Editorial Design & Editing',
    images: [
      '/work/content-social-media/editorial/personal-wechat/01-2022-hit.png',
      '/work/content-social-media/editorial/personal-wechat/02-albums.png',
      '/work/content-social-media/editorial/personal-wechat/03-albums-detail.png',
      '/work/content-social-media/editorial/personal-wechat/04-movies.png',
    ],
  },
] as const;

const shortFormProjects: readonly Project[] = [
  {
    title: 'NEED! MARKET — Event Video Planning & Production',
    description: [
      '- Planned and managed the filming of a series of market event videos for the Chengdu pop-up from February 2 to February 5, 2024. The “On-site Series” videos received over 1,500 likes on Xiaohongshu and over 10,000 likes on WeChat Channels in total.',
      '- Planned and hosted the “NEED! TV Series” interviews at the Chengdu pop-up from February 2 to February 5. Some of the interview videos received over 3,000 likes on Xiaohongshu, while the highest-performing single video reached over 6,000 likes on WeChat Channels.',
    ],
    images: [
      '/work/content-social-media/short-form/need-market-01.png',
      '/work/content-social-media/short-form/need-market-02.png',
      '/work/content-social-media/short-form/need-market-03.png',
      '/work/content-social-media/short-form/need-market-04.png',
    ],
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
                  {project.description?.map((paragraph) => (
                    <p className="influencer-project-description" key={paragraph}>{paragraph}</p>
                  ))}
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
                  {project.description?.map((paragraph) => (
                    <p className="influencer-project-description" key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ImageGallery label={project.title} number={`03.${(index + 1).toString().padStart(2, '0')}`} images={project.images} />
              </article>
            ))}
          </div>
        </section>
      </div>
      <footer className="case-footer"><a href="/#work">← Back to work</a></footer>
    </main>
  );
}
