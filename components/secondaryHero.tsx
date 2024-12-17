import { Rowdies } from 'next/font/google';
import Image from 'next/image';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

type SecondaryHero = {
  startText: string;
  accentText: string;
  endText: string;
  body: string;
  showExplore?: boolean;
};

export default function SecondaryHero({
  accentText,
  body,
  endText,
  startText,
  showExplore = false,
}: SecondaryHero) {
  return (
    <div
      className={`page flex flex-col items-center lg:items-start text-center ${
        showExplore ? 'mb-[87px] lg:mb-[120px]' : 'mb-[119px] lg:mb-[107px]'
      }`}
    >
      <p
        className={`${rowdies.className} text-3xl md:text-[3.75vw] min-[1440px]:text-[54px] leading-[1.285185185] text-white uppercase mx-auto`}
      >
        {startText} <span className="title">{accentText}</span> {endText}
      </p>

      <p className="pt-10 lg:pt-[43px] pb-9 lg:pb-[37px] leading-[29px] max-w-[600px] lg:max-w-[800px] md:text-lg lg:text-xl mx-auto">
        {body}
      </p>

      <div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center gap-[22px] sm:gap-9">
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

        {showExplore ? (
          <div className="px-5 sm:px-0 w-full max-w-[300px] sm:max-w-[215px]">
            <div className="text-white gradient text-center uppercase p-4 inline-block transform -skew-x-[20deg] w-full">
              <span
                className={`${rowdies.className} inline-block transform skew-x-[20deg] text-lg w-full`}
              >
                Explore
              </span>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
