export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="portfolio-header contact-header">
        <a className="portfolio-brand nav-hover" href="/#lingling">LINGLING YANG</a>
        <nav className="portfolio-nav" aria-label="Portfolio sections">
          <a className="nav-item nav-hover" href="/#experience"><span>(A)</span> Experience</a>
          <a className="nav-item nav-hover" href="/#work"><span>(B)</span> Work</a>
          <a className="nav-item nav-hover is-active" href="/contact"><span>(C)</span> Contact</a>
        </nav>
      </header>
      <section className="contact-copy" aria-labelledby="contact-title">
        <h1 id="contact-title">Contact</h1>
        <p>E-mail: <a href="mailto:suliaodaizaixiang00@gmail.com">suliaodaizaixiang00@gmail.com</a></p>
        <p>Tel / WhatsApp: <a href="tel:+85284972629">+852 84972629</a></p>
        <p className="contact-thanks">Thank you</p>
      </section>
    </main>
  );
}
