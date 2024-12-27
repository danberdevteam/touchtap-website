import Cta from '@/components/aboutUs/cta';
import CtaTwo from '@/components/aboutUs/ctaTwo';
import Features from '@/components/aboutUs/features';
import Games from '@/components/aboutUs/games';
import SecondaryHero from '@/components/secondaryHero';

export default function AboutUs() {
  return (
    <div>
      <SecondaryHero
        startText="Let the"
        accentText="Learning"
        endText="Adventure Begin"
        body="Welcome to the ultimate learning playground, where kids can recognize
        colors, identify shapes, count numbers, and trace alphabets—all through
        interactive games that make learning fun and exciting!"
        showFooter
      />
      <Cta />
      <Games />
      <CtaTwo />
      <Features />
    </div>
  );
}
