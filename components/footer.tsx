import { Rowdies } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

type Item = {
  name: string;
  link: string;
};

type SocialMedia = {
  icon: string;
  link: string;
};

const games: Item[] = [
  {
    name: 'Counting game',
    link: '',
  },
  {
    name: 'Color identification',
    link: '',
  },
  {
    name: 'Shape Identification',
    link: '',
  },
  {
    name: 'Alphabet Tracing',
    link: '',
  },
];

const routes: Item[] = [
  {
    name: 'FAQ',
    link: 'faq',
  },
  {
    name: 'Contact',
    link: 'contact',
  },
  {
    name: 'Privacy Policy',
    link: 'privacy-policy',
  },
  {
    name: 'Terms of Service',
    link: 'terms-of-service',
  },
];

const socialMedias: SocialMedia[] = [
  {
    icon: '/images/svgs/kick.svg',
    link: '',
  },
  {
    icon: '/images/svgs/instagram.svg',
    link: '',
  },
  {
    icon: '/images/svgs/youtube.svg',
    link: '',
  },
  {
    icon: '/images/svgs/facebook.svg',
    link: '',
  },
  {
    icon: '/images/svgs/twitter.svg',
    link: '',
  },
];

export default function Footer() {
  return (
    <div className="page flex flex-col gap-6 lg:gap-[62px] pt-8 pb-3 sm:py-9 lg:py-10 w-full">
      <div className="lg:flex lg:justify-between">
        <div className="flex flex-col gap-1">
          <h3 className={`${rowdies.className} title text-2xl`}>
            TouchTap Adventure
          </h3>
          <p className="text-sm lg:text-base lg:leading-[29px] leading-[24px] max-w-[450px] lg:max-w-[360px]">
            Welcome to the ultimate learning playground, where kids can
            interactive games that make learning fun and exciting!
          </p>
        </div>

        <div className="mt-12 mb-10 lg:my-0 flex flex-col lg:flex-row justify-center gap-6 sm:gap-10 lg:grow lg:gap-16 min-[1080px]:gap-20 min-[1200px]:gap-32 min-[1300px]:gap-40">
          <div className="flex flex-col gap-1 lg:gap-3">
            {games.map((game) => (
              <Link className="font-medium" href={game.link} key={game.name}>
                {game.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-1 lg:gap-3">
            {routes.map((route) => (
              <Link className="font-medium" href={route.link} key={route.name}>
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-[26px]">
          <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2">
            {socialMedias.map((socialMedia) => (
              <Link href={socialMedia.link} key={socialMedia.link}>
                <Image
                  src={socialMedia.icon}
                  alt="social media"
                  width={24}
                  height={24}
                  className="md:hidden"
                />
                <Image
                  src={socialMedia.icon}
                  alt="social media"
                  width={32}
                  height={32}
                  className="hidden md:block lg:hidden"
                />
                <Image
                  src={socialMedia.icon}
                  alt="social media"
                  width={40}
                  height={40}
                  className="hidden lg:block"
                />
              </Link>
            ))}
          </div>
          <p className="text-[#BBBBBBBB] text-sm font-bold lg:text-center">
            © All rights reserved.
          </p>
        </div>
      </div>

      <div
        className={`${rowdies.className} text-[#BBBBBBBB] text-xs leading-[24px] flex flex-col gap-2 lg:gap-1`}
      >
        <p>
          Our games are thoughtfully designed to combine education with fun,
          helping kids: Match and explore vibrant shades in playful challenges.
        </p>
        <p>
          Learn geometry basics with engaging puzzles, Strengthen math skills
          through interactive counting adventures and Master letters and writing
          through fun tracing activities.
        </p>
      </div>
    </div>
  );
}
