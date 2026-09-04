import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Lingling Yang. I make people look*.',
  description: 'Lingling Yang. I make people look*. And sometimes click.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
