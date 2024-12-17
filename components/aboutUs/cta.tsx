import Image from 'next/image';

export default function Cta() {
  return (
    <div className="page">
      <div className="flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[8.055555556vw] text-center lg:text-start cta rounded-[10px] py-[33.5px] mb-[69px] md:py-14 lg:py-12 md:px-[6.944444444vw]">
        <div className="relative w-full px-9 lg:px-0 max-w-[300px] md:max-w-[282px] mx-auto">
          <Image
            src={'/images/pngs/cta.png'}
            alt="cta"
            layout="responsive"
            width={565}
            height={1173}
          />
        </div>
      </div>
    </div>
  );
}
