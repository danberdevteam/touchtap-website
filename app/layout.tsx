import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Advertisement from '@/components/advertisement';
import FooterCta from '@/components/footerCta';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TouchTap Adventure',
  description: 'interactive games for young learners',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} relative antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <div className="grow">{children}</div>
        <FooterCta />
        <Advertisement />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
