'use client';
import { Rowdies } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="shadow-[0_2px_4px_rgba(0,0,0,0.7)] sticky top-0 left-0 right-0 z-10 flex justify-between items-center pt-9 md:pt-[39px] pb-6 mb-[34px] sm:mb-[7.263888889vw] bg-[#030201] w-full page">
      <Link
        href={'/'}
        className={`${rowdies.className} title text-xl md:text-2xl text-[26px] shrink-0`}
      >
        TouchTap Adventure
      </Link>

      <div className="hidden md:flex gap-10">
        <Link
          className={`text-base text-[17px] uppercase ${
            pathname === '/about-us' ? 'gradientText' : ''
          }`}
          href={'/about-us'}
        >
          About us
        </Link>
        <Link
          className={`text-base text-[17px] uppercase ${
            pathname === '/features' ? 'gradientText' : ''
          }`}
          href={'/features'}
        >
          Features
        </Link>
        <Link
          className={`text-base text-[17px] uppercase ${
            pathname === '/faq' ? 'gradientText' : ''
          }`}
          href={'/faq'}
        >
          Faq
        </Link>
      </div>

      <div className="w-7 h-7 flex justify-end items-center md:hidden">
        <Image
          src={'/images/svgs/hamburger.svg'}
          alt="hamburger menu"
          width={24}
          height={15}
        />
      </div>
    </header>
  );
}