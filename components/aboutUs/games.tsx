import Image from 'next/image';
import { games } from '../games';
import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({
  weight: ['700'],
  subsets: ['latin'],
});

export default function Games() {
  return (
    <div className="page flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-[100px] mb-[205px]">
      <div className="flex flex-col gap-[18px] text-center">
        <h3
          className={`${rowdies.className} text-3xl md:text-5xl md:text-[3vw] lg:text-[3.75vw] min-[1440px]:text-[54px] leading-[1.285185185] text-white uppercase`}
        >
          <span className="gradientText">INCREDIBLE</span> GAMES
        </h3>
        <p className="md:text-lg lg:text-xl leading-[28px] max-w-[600px] mx-auto">
          Offer sneak peeks and previews of upcoming games, including trailers,
          screenshots, and information about release.
        </p>
      </div>

      <div className="flex flex-col gap-[54px] md:gap-16 lg:gap-20 xl:gap-[100px] md:flex-row md:justify-start md:items-start">
        <div
          className="flex flex-col gap-[54px] md:gap-16 lg:gap-20 xl:gap-[100px]"
          style={{
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(13.5em, 100%), 1fr))',
          }}
        >
          {games.slice(0, 2).map((game) => (
            <div
              className={`flex flex-col gap-2.5 cta rounded-[10px] px-[30px] py-[44px] flex-1`}
              key={game.title}
            >
              <div className="relative z-[2] w-full max-w-[186px]">
                <Image
                  src={'/images/svgs/category.svg'}
                  alt="game"
                  width={38}
                  height={38}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <h3
                  className={`${rowdies.className} text-xl lg:text-2xl font-bold capitalize`}
                >
                  {game.title}
                </h3>
                <p className="leading-[26px] lg:text-lg">{game.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col gap-[54px] md:gap-16 lg:gap-20 xl:gap-[100px] md:mt-16 lg:mt-[80px] xl:mt-[102px]"
          style={{
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(13.5em, 100%), 1fr))',
          }}
        >
          {games.slice(2).map((game) => (
            <div
              className={`flex flex-col gap-2.5 cta rounded-[10px] px-[30px] py-[44px] flex-1`}
              key={game.title}
            >
              <div className="relative z-[2] w-full max-w-[186px]">
                <Image
                  src={'/images/svgs/category.svg'}
                  alt="game"
                  width={38}
                  height={38}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <h3
                  className={`${rowdies.className} text-xl font-bold capitalize`}
                >
                  {game.title}
                </h3>
                <p className="leading-[26px]">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
