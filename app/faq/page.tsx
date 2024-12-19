import Faqs from '@/components/faqs/faqs';
import SecondaryHero from '@/components/secondaryHero';

export default function FAQ() {
  return (
    <div>
      <SecondaryHero
        startText="FREQUENTLY"
        accentText="ASKED"
        endText="QUESTIONS"
        body="Do you have any kind Of questions? We're here to help."
      />
      <Faqs />
    </div>
  );
}
