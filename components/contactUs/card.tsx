import { Rowdies } from 'next/font/google';
import Image from 'next/image';

const rowdies = Rowdies({
  weight: ['700'],
  subsets: ['latin'],
});

const contacts = [
  // {
  //   text: '+1012 3456 789',
  //   icon: '/images/svgs/phone.svg',
  // },
  {
    text: 'support@touchtapgame.com',
    icon: '/images/svgs/mail.svg',
  },
  // {
  //   text: '132 Dartmouth Street Boston, Massachusetts 02156 United States',
  //   icon: '/images/svgs/location.svg',
  // },
];

export default function Card() {
  return (
    <div className="bg-[#030201] py-5 sm:py-6 md:py-7 lg:py-10 px-4 sm:px-6 md:px-7 lg:px-9 rounded-[10px] pb-[162px] relative overflow-hidden flex-1">
      <div className="absolute w-[184px] aspect-square -bottom-[87px] -right-[56px] lg:w-[240px] lg:-right-[71.871657754px] xl:-right-[80.556149733px] lg:-bottom-[113.47826087px] xl:-bottom-[127.190217391] xl:w-[269px] bg-[#1A1A1A] rounded-full" />

      <div className="relative z-[2] flex flex-col gap-[74px] md:gap-24 lg:gap-28">
        <div className="flex flex-col gap-3">
          <h2
            className={`${rowdies.className} text-2xl md:text-3xl lg:text-[32px] font-bold`}
          >
            Contact Information
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {contacts.map((contact, index) => (
            <div className="flex gap-6 flex-wrap">
              <Image
                src={contact.icon}
                alt="contact"
                width={24}
                height={24}
                className={`${
                  index === 2 ? '-mt-8 lg:-mt-4' : 'mt-0.5 sm:mt-1'
                }`}
              />
              <p className="sm:text-lg break-all">{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
