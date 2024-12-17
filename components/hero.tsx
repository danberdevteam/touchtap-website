import { Rowdies } from 'next/font/google';
import Image from 'next/image';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <div className="page flex flex-col lg:flex-row items-center gap-[50px] md:gap-[70px] xl:gap-[50px] md:justify-between text-center lg:text-start">
      <div className="flex flex-col items-center lg:items-start">
        <h3
          className={`${rowdies.className} text-4xl md:text-5xl lg:text-6xl lg:text-[4.444444444vw] max-w-[500px] md:max-w-[650px] text-white uppercase`}
        >
          Interactive <span className="title">games</span> for Young Learners!
        </h3>
        <p className="leading-[29.62px] mt-[26px] mb-[38px] md:text-lg lg:text-xl md:max-w-[550px]">
          Welcome to the ultimate learning playground, where kids can recognize
          colors, identify shapes, count numbers, and trace alphabets—all
          through interactive games that make learning fun exciting!
        </p>

        <div className="w-full">
          <div className="px-4">
            <div className="text-white gradient text-center uppercase p-4 inline-block transform -skew-x-[20deg] w-full max-w-[400px] lg:max-w-[263px]">
              <span
                className={`${rowdies.className} inline-block transform skew-x-[20deg] text-lg w-full`}
              >
                Download App
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-[490px] lg:max-w-[30vw]">
        <Image
          src={'/images/pngs/hero.png'}
          alt="hero"
          layout="responsive"
          width={721}
          height={724}
        />
      </div>
    </div>
  );
}
