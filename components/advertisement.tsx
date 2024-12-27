'use client';
import { Rowdies } from 'next/font/google';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

const items = [
  {
    name: 'COUNTING',
  },
  {
    name: 'COLOR IDENTIFICATION',
  },
  {
    name: 'SHAPE IDENTIFICATION',
  },
  {
    name: 'ALPHABET TRACING',
  },
];
export default function Advertisement() {
  const pathname = usePathname();

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service')
    return <></>;

  return (
    <div className="w-full overflow-x-hidden advertisement py-5">
      <div
        className="flex items-center gap-10 lg:gap-12 animate-scroll border-[0.78px] border-solid border-white/20 border-x-0"
        style={{ width: 'max-content' }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3.5 lg:gap-4 shrink-0"
          >
            <Image
              src={'/images/svgs/star.svg'}
              alt="star"
              width={36}
              height={36}
              className="shrink-0 hidden lg:block"
            />
            <Image
              src={'/images/svgs/star.svg'}
              alt="star"
              width={32}
              height={32}
              className="shrink-0 hidden md:block lg:hidden"
            />
            <Image
              src={'/images/svgs/star.svg'}
              alt="star"
              width={28}
              height={28}
              className="shrink-0 md:hidden"
            />
            <h3
              className={`${rowdies.className} text-xl lg:text-2xl xl:text-3xl xl:text-[28px] shrink-0`}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
