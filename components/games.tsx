import { Rowdies } from 'next/font/google';
import Image from 'next/image';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

export const games = [
  {
    title: 'Color Identification',
    description:
      'Users click matching colors as the game tracks time, accuracy, and errors',
    image: '/images/pngs/game-one.png',
  },
  {
    title: 'Counting game',
    description:
      'Users count 10 stars by holding clicks, while the game tracks time, accuracy, and errors.',
    image: '/images/pngs/game-two.png',
  },
  {
    title: 'Shape Identification',
    description:
      'Users match shapes to prompts, clearing the screen as the game tracks time, accuracy, and errors.',
    image: '/images/pngs/game-three.png',
  },
  {
    title: 'Alphabet Tracing',
    description:
      'Users trace alphabets on-screen as the game tracks time, completions, and incomplete traces.',
    image: '/images/pngs/game-four.png',
  },
];

export default function Games() {
  return (
    <div className="text-center flex flex-col gap-[100px] mb-40 page">
      <div className="flex flex-col gap-[18px] md:max-w-[590px] mx-auto">
        <h3
          className={`${rowdies.className} text-3xl md:text-5xl md:text-[3vw] lg:text-[3.75vw] min-[1440px]:text-[54px] leading-[1.285185185] text-white uppercase`}
        >
          See our <span className="title">awesome</span> games
        </h3>
        <p className="leading-[29px] px-5 lg:text-lg">
          Offer sneak peeks and previews of upcoming games, including trailers,
          screenshots, and information about release.
        </p>
      </div>

      <div
        className="grid gap-4 text-center"
        style={{
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(16.5em, 100%), 1fr))',
        }}
      >
        {games.map((game) => (
          <div className={`flex items-center flex-col`} key={game.title}>
            <div className="relative z-[1] w-full max-w-[186px]">
              <Image
                src={game.image}
                alt={game.title}
                layout="responsive"
                width={701}
                height={939}
              />
            </div>

            <div
              className="relative flex flex-col game -mt-[102.58px] pt-[109.78px] rounded-bl-[2.79px] rounded-br-[2.79px] grow max-w-[450px] overflow-hidden"
              style={{
                clipPath:
                  'polygon(6% 0, 94% 0, 100% 6%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 6%)',
              }}
            >
              <h3
                className={`${rowdies.className} text-2xl text-white uppercase px-7 py-1.5 bg-[#161616] min-h-[66px] lg:min-h-[76px] flex justify-center items-center`}
              >
                {game.title}
              </h3>
              <p className="text-[#2DFCFB] text-sm px-6 py-4">
                {game.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
