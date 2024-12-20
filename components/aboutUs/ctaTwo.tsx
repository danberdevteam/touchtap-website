import { Rowdies } from 'next/font/google';
import Image from 'next/image';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

export default function CtaTwo() {
  return (
    <div className="page lg:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[8.055555556vw] text-center lg:text-start cta lg:border-none rounded-[10px] py-[80px] mb-[174px] md:py-14 md:px-[6.944444444vw] lg:rounded-none lg:py-[8.472222222vw] xl:py-[122px] lg:before:hidden">
        <div className="flex flex-col items-center lg:items-start px-3">
          <h3
            className={`${rowdies.className} text-3xl md:text-5xl md:text-[3vw] lg:text-[3.75vw] min-[1440px]:text-[54px] leading-[1.285185185] text-white uppercase`}
          >
            Why <span className="title">Touchtap</span> Adventures
          </h3>
          <div>
            <p className="text-lg lg:text-xl leading-[33.32px] lg:leading-[37.02px] mt-5 sm:mt-7 lg:mt-10 mb-5 lg:mb-[37px] max-w-[650px]">
              Welcome to the ultimate learning playground, where kids can
              recognize colors, identify shapes, count numbers, and trace
              alphabets—all through interactive games that make learning fun and
              exciting!
            </p>
            <p className="text-lg lg:text-xl leading-[33.32px] lg:leading-[37.02px] mt-5 sm:mt-7 lg:mt-10 mb-5 lg:mb-[37px] max-w-[650px]">
              Welcome to the ultimate learning playground, where kids can
              recognize colors, identify shapes, count numbers, and trace
              alphabets—all through interactive games that make learning fun and
              exciting!
            </p>
          </div>
        </div>

        <div className="relative w-full px-4 lg:px-0 max-w-[400px] md:max-w-[360px] lg:max-w-[425px]">
          <Image
            src={'/images/pngs/cta-two.png'}
            alt="cta"
            layout="responsive"
            width={850}
            height={864}
          />
        </div>
      </div>
    </div>
  );
}
