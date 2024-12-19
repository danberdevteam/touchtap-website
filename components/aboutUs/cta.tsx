import Image from 'next/image';

export default function Cta() {
  return (
    <div className="page">
      <div className="flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[8.055555556vw] text-center lg:text-start cta rounded-[10px] py-24 mb-[69px] md:py-14 md:px-[6.944444444vw] md:mb-28 lg:mb-36 xl:mb-44">
        <div className="relative w-full px-9 lg:px-0 max-w-[265px] md:max-w-[258px] mx-auto">
          <Image
            src={'/images/pngs/cta.png'}
            alt="cta"
            layout="responsive"
            width={258}
            height={538}
          />
        </div>
      </div>
    </div>
  );
}
