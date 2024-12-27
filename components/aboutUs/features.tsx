import Image from 'next/image';
import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({
  weight: ['700'],
  subsets: ['latin'],
});

const features = [
  {
    title: 'SMART PLAY',
    body: 'Identify and click the correct colors as prompted, avoiding repeats, until all matches are found; the game tracks your time, correct, and incorrect clicks.',
  },
  {
    title: 'GROWING BRAINS',
    body: 'Count 10 randomly appearing stars by clicking and holding, with the game tracking your time, accuracy, and errors.',
  },
  {
    title: 'LITTLE MINDS',
    body: 'Players identify and click the correct shapes prompted by text; correct selections vanish until all shapes are gone, with time, accuracy, and errors tracked.',
  },
  {
    title: 'LEARNABLE TRACE',
    body: 'Players identify and click the correct shapes prompted by text; correct selections vanish until all shapes are gone, with time, accuracy, and errors tracked.',
  },
];

export default function Features() {
  return (
    <div className="page flex flex-col gap-[42px] sm:gap-[12.291666667vw]">
      <div className="flex flex-col gap-[18px] text-center">
        <h3
          className={`${rowdies.className} text-3xl md:text-5xl md:text-[3vw] lg:text-[3.75vw] min-[1440px]:text-[54px] leading-[1.285185185] text-white uppercase`}
        >
          Features
        </h3>
        <p className="md:text-lg lg:text-xl leading-[28px] max-w-[650px] lg:max-w-[950px] mx-auto">
          Welcome to the ultimate learning playground, where kids can recognize
          colors, identify shapes, count numbers, and trace alphabets—all
          through interactive games that make learning fun and exciting!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-[250px] sm:gap-24 lg:gap-[7vw] xl:gap-[8.055555556vw] text-center lg:text-start">
        <div className="relative w-full px-4 lg:px-0 max-w-[400px] md:max-w-[380px] lg:max-w-[428px]">
          <Image
            src={'/images/pngs/showcase-four.png'}
            alt="cta"
            layout="responsive"
            width={745}
            height={1001}
          />
        </div>

        <div className="flex flex-col gap-[54px] lg:gap-[40px] max-w-[400px]">
          {features.map((feature) => (
            <div
              className={`flex justify-start gap-7 lg:gap-8`}
              key={feature.title}
            >
              <div className="shrink-0 mt-1">
                <Image
                  src={'/images/svgs/category.svg'}
                  alt="feature"
                  width={38}
                  height={39}
                  className="lg:hidden"
                />
                <Image
                  src={'/images/svgs/category.svg'}
                  alt="feature"
                  width={40}
                  height={40}
                  className="hidden lg:block"
                />
              </div>

              <div className="flex flex-col gap-2 text-start">
                <h3
                  className={`${rowdies.className} sm:text-lg md:text-xl lg:text-2xl capitalize`}
                >
                  {feature.title}
                </h3>
                <p className="text-[#DAD7D7]">{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
