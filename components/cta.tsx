import { Rowdies } from 'next/font/google';
import Image from 'next/image';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Cta() {
  return (
    <div className="page">
      <div className="flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[8.055555556vw] text-center lg:text-start cta rounded-[10px] py-24 mb-[174px] md:py-14 md:px-[6.944444444vw]">
        <div className="relative w-full px-9 lg:px-0 max-w-[250px] md:max-w-[282px]">
          <Image
            src={'/images/pngs/cta.png'}
            alt="cta"
            layout="responsive"
            width={518}
            height={1076}
          />
        </div>

        <div className="flex flex-col items-center lg:items-start px-3">
          <h3
            className={`${rowdies.className} text-3xl md:text-5xl md:text-[3vw] lg:text-[3.75vw] min-[1440px]:text-[54px] leading-[1.285185185] text-white uppercase`}
          >
            Let the <span className="title">Learning</span> Adventure Begin
          </h3>
          <p className="text-lg lg:text-xl leading-[33.32px] lg:leading-[37.02px] mt-8 sm:mt-7 lg:mt-10 mb-5 lg:mb-[37px] max-w-[600px]">
            Welcome to the ultimate learning playground, where kids can
            recognize colors, identify shapes, count numbers, and trace
            alphabets—all through interactive games that make learning fun and
            exciting!
          </p>

          <div className="bg-black text-white flex items-center gap-2.5 rounded-[10px] py-2 px-3 border border-[#A6A6A6]">
            <Image
              src="/images/svgs/apple-white.svg"
              alt="apple"
              width={29}
              height={35}
            />

            <div className="pr-2 text-start">
              <p className="text-xs">Download on the</p>
              <p className="text-[22px] leading-[26px] font-bold">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
