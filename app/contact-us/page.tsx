import SecondaryHero from '@/components/secondaryHero';
import ContactUsWrapper from '@/components/contactUs/wrapper';

export default function ContactUs() {
  return (
    <div>
      <div className="px-6">
        <SecondaryHero
          startText=""
          accentText="CONTACT"
          endText="US"
          body="Any question or remarks? Send us a message!"
        />
      </div>
      <ContactUsWrapper />
    </div>
  );
}
