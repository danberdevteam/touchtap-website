import Cta from '@/components/features/cta';
import SecondaryHero from '@/components/secondaryHero';
import Showcase from '@/components/showcase';

export default function Features() {
  return (
    <div>
      <SecondaryHero
        startText="Our"
        accentText="Awesome"
        endText="Games"
        body="Jump into a world of fun and adventure with our super cool games! From learning new things to playing exciting challenges, our games are made just for kids. Explore, play, and have the best time ever while learning and growing along the way"
        showExplore
      />
      <Cta />
      <Showcase />
    </div>
  );
}
