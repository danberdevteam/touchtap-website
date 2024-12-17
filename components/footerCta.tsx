import { Rowdies } from 'next/font/google';
import Image from 'next/image';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

export default function FooterCta() {
  return (
    <div className="relative bg-[url('/images/pngs/footer-cta.png')] bg-cover bg-no-repeat bg-left-top w-full px-6 py-24 mt-40 lg:mt-[10.416666667vw] lg:mb-0 lg:pt-[10.902777778vw] lg:pb-[11.944444444vw] mb-32">
      <div className="absolute inset-0 bg-[#030201]/10"></div>
      <div className="relative flex flex-col items-center justify-center text-center">
        <p
          className={`${rowdies.className} text-3xl md:text-[3.75vw] max-w-[500px] lg:max-w-[800px] min-[1440px]:text-[54px] leading-[1.285185185] text-white uppercase`}
        >
          Discover the <span className="title">Learning</span> Adventure
        </p>

        <p className="pt-10 lg:pt-[43px] pb-9 lg:pb-[37px] leading-[29px] max-w-[600px] lg:max-w-[800px] md:text-lg lg:text-xl">
          Welcome to the ultimate learning playground, where kids can recognize
          colors, identify shapes, count numbers, and trace alphabets—all
          through interactive games that make learning fun and exciting!
        </p>
        <div className="bg-white text-black flex items-center gap-2.5 rounded-[10px] py-2 px-3 border border-[#A6A6A6]">
          <Image
            src="/images/svgs/apple-dark.svg"
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
  );
}
