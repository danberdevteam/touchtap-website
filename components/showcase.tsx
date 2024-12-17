import { Rowdies } from 'next/font/google';
import Image from 'next/image';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

const showcases = [
  {
    title: 'Color Identification',
    subtitle: 'Game Your Way to Smart Play',
    description:
      'Identify and click the correct colors as prompted, avoiding repeats, until all matches are found; the game tracks your time, correct, and incorrect clicks.',
    image: '/images/pngs/showcase-one.png',
  },
  {
    title: 'Counting games',
    subtitle: 'Smart Games for Growing Brains',
    description:
      'Count 10 randomly appearing stars by clicking and holding, with the game tracking your time, accuracy, and errors.',
    image: '/images/pngs/showcase-two.png',
  },
  {
    title: 'Shape Identification',
    subtitle: 'Fun Games for Little Minds',
    description:
      'Players identify and click the correct shapes prompted by text; correct selections vanish until all shapes are gone, with time, accuracy, and errors tracked.',
    image: '/images/pngs/showcase-three.png',
  },
  {
    title: 'Alphabet Tracing',
    subtitle: 'Learn with Every trace',
    description:
      'Trace the alphabets on screen sequentially, progressing through each until completion, while tracking time, accuracy, and incomplete attempts.',
    image: '/images/pngs/showcase-four.png',
  },
];

export default function Showcase() {
  return (
    <div className="page flex justify-center">
      <div className="flex flex-col gap-[100px] lg:gap-[10.416666667vw] text-center md:text-start max-w-[1020px]">
        {showcases.map((showcases, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2
                ? 'flex-col-reverse md:flex-row-reverse'
                : 'flex-col md:flex-row'
            } gap-[50px] md:gap-[6.944444444vw] items-center lg:justify-between`}
          >
            <div className="relative w-full max-w-[320px] md:max-w-[370px]">
              <Image
                src={showcases.image}
                alt={showcases.title}
                layout="responsive"
                width={701}
                height={939}
              />
            </div>

            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 max-w-[450px] lg:max-w-[551px]">
              <h2 className="text-xl text-[#DAD7D7]">{showcases.title}</h2>
              <h3
                className={`${rowdies.className} text-3xl sm:text-7xl sm:text-[4.861111111vw] text-white uppercase`}
              >
                {showcases.subtitle}
              </h3>
              <p className="text-[#DAD7D7] text-lg lg:text-xl">
                {showcases.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
