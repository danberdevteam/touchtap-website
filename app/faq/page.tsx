import SecondaryHero from '@/components/secondaryHero';
import Faqs from '@/components/faqs/faqs';

export default function FAQ() {
  return (
    <div>
      <SecondaryHero
        startText="FREQUENTLY"
        accentText="ASKED"
        endText="QUESTIONS"
        body="Do you have any kind of questions? We're here to help."
      />
      <Faqs />
    </div>
  );
}
