import Advertisement from '@/components/advertisement';
import Cta from '@/components/cta';
import Games from '@/components/games';
import Hero from '@/components/hero';
import Showcase from '@/components/showcase';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-20 md:mt-36 mb-28 md:mb-36 -rotate-[1.98deg]">
        <Advertisement />
      </div>
      <Cta />
      <Games />
      <Showcase />
    </div>
  );
}
