import Image from 'next/image';
import { games } from '../games';
import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({
  weight: ['700'],
  subsets: ['latin'],
});

export default function Features() {
  return (
    <div className="page flex flex-col gap-[42px] sm:gap-[12.291666667vw]">
      <div className="flex flex-col gap-[18px] text-center">
        <h3 className={`${rowdies.className} text-3xl font-bold uppercase`}>
          Features
        </h3>
        <p className="md:text-lg lg:text-xl leading-[28px] max-w-[650px] lg:max-w-[950px] mx-auto">
          Welcome to the ultimate learning playground, where kids can recognize
          colors, identify shapes, count numbers, and trace alphabets—all
          through interactive games that make learning fun and exciting!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-[250px] sm:gap-24 lg:gap-[8.055555556vw] text-center lg:text-start">
        <div className="relative w-full px-4 lg:px-0 max-w-[400px] md:max-w-[380px] lg:max-w-[428px]">
          <Image
            src={'/images/pngs/showcase-four.png'}
            alt="cta"
            layout="responsive"
            width={701}
            height={940}
          />
        </div>

        <div className="flex flex-col gap-[54px] lg:gap-[40px] max-w-[400px]">
          {games.map((game) => (
            <div
              className={`flex justify-start gap-7 lg:gap-8`}
              key={game.title}
            >
              <div className="shrink-0 mt-1">
                <Image
                  src={'/images/svgs/category.svg'}
                  alt="game"
                  width={38}
                  height={39}
                  className="lg:hidden"
                />
                <Image
                  src={'/images/svgs/category.svg'}
                  alt="game"
                  width={40}
                  height={40}
                  className="hidden lg:block"
                />
              </div>

              <div className="flex flex-col gap-2 text-start">
                <h3
                  className={`${rowdies.className} sm:text-lg md:text-xl lg:text-2xl font-bold capitalize`}
                >
                  {game.title}
                </h3>
                <p className="">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
