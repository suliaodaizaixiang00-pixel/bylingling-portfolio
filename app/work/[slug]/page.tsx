import { notFound } from 'next/navigation';

const categories = {
  'product-development': ['01', 'Product Development'],
  'product-marketing': ['02', 'Product Marketing'],
  'creative-planning': ['03', 'Creative Planning'],
  'influencer-marketing': ['04', 'Influencer Marketing'],
  'content-marketing': ['05', 'Content Marketing'],
  competitions: ['06', 'Competitions'],
  others: ['07', 'Others'],
} as const;

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories[slug as keyof typeof categories];
  if (!category) notFound();

  return (
    <main className="work-detail-page">
      <header className="work-detail-top">
        <a href="/#work">Lingling Yang</a>
        <a className="work-detail-back" href="/#work">← Back to work</a>
      </header>
      <section className="work-detail-content">
        <p className="work-detail-number">({category[0]})</p>
        <h1>{category[1]}</h1>
        <p className="work-detail-status">Project details coming soon</p>
      </section>
    </main>
  );
}
