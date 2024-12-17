import Image from 'next/image';
import { games } from '../games';

export default function Cta() {
  return (
    <div className="page">
      <div
        className="grid gap-4 text-center cta rounded-[10px] py-[33.5px] mb-[174px] md:py-14 lg:py-12 px-9 md:px-[6.944444444vw] overflow-hidden"
        style={{
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(13.5em, 100%), 1fr))',
        }}
      >
        {games.map((game) => (
          <div className={`flex items-center flex-col`} key={game.title}>
            <div className="relative z-[2] w-full max-w-[186px]">
              <Image
                src={game.image}
                alt={game.title}
                layout="responsive"
                width={701}
                height={939}
              />
            </div>

            <div
              className="relative min-h-[178px] max-w-[280px] -mt-[102.58px] lg:min-h-[150px] w-full game pt-[109.78px] rounded-bl-[2.79px] rounded-br-[2.79px]"
              style={{
                clipPath:
                  'polygon(6% 0, 94% 0, 100% 6%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 6%)',
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
