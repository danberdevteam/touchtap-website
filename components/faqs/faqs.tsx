'use client';
import { Rowdies } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

const faqs = [
  {
    type: 'GENERAL QUESTIONS',
    faqs: [
      {
        no: 'Q1',
        question: 'What is TouchTapAdventures?',
        answer:
          'TouchTapAdventures is an educational game designed for kids to learn colors, shapes, numbers, and alphabets through interactive gameplay and mini-games in a fun and engaging way.',
      },
      {
        no: 'Q2',
        question: 'Which platforms is the game available on?',
        answer:
          'The game is currently available for iOS devices and can be downloaded from the App Store.',
      },
      {
        no: 'Q3',
        question: 'What age group is this game suitable for?',
        answer:
          'TouchTapAdventures is suitable for children aged 4 to 12 years old.',
      },
    ],
  },
  {
    no: 'Q4',
    type: 'GAMEPLAY QUESTIONS',
    faqs: [
      {
        no: 'Q',
        question: 'What kind of gameplay does TouchTapAdventures offer?',
        answer:
          'It offers an endless runner experience with collectibles and obstacles, along with mini-games that help kids develop motor skills and learn foundational concepts like counting, colors, shapes, and alphabets.',
      },
      {
        no: 'Q5',
        question: 'What mini-games are included in the game?',
        answer: [
          'Star Counting: Helps kids learn to count.',
          'Color Selection: Teaches basic colors.',
          'Shape Selection: Introduces basic 3D shapes.',
          'Alphabet Tracing: Teaches kids to trace and write alphabets.',
        ],
      },
      {
        no: 'Q6',
        question: 'Is there a leaderboard in the game?',
        answer:
          'Yes, a leaderboard keeps the games competitive and encourages kids to improve their performance.',
      },
      {
        no: 'Q7',
        question: 'Does the game track progress?',
        answer:
          "Yes, data from all mini-games is collected and displayed on a parental dashboard to track the child's progress.",
      },
    ],
  },
  {
    no: 'Q8',
    type: 'TECHNICAL QUESTIONS',
    faqs: [
      {
        no: 'Q',
        question: 'What Unity version was used to develop TouchTapAdventures?',
        answer: 'The game was developed using Unity 2022.3.53f1.',
      },
      {
        no: 'Q9',
        question: 'What plugins and assets are used in the game?',
        answer: [
          'XCharts: For graphical representation on the parental dashboard.',
          'In-App Purchasing (IAP): For managing in-app purchases.',
          'Splines (In-Built): For smooth game design.',
          'Cat Assets: For character and game design.',
          'PlayFab: For sign-in, login, and data storage.',
        ],
      },
      {
        no: 'Q10',
        question: 'Does the game support in-app purchases?',
        answer:
          'Yes, in-app purchases are available for additional features or content.',
      },
    ],
  },
  {
    type: 'PARENTAL CONTROLS AND FEATURES',
    faqs: [
      {
        no: 'Q11',
        question: 'What is the parental dashboard?',
        answer:
          "The parental dashboard provides insights into the child's progress by displaying data collected from mini-games like scores and achievements.",
      },
      {
        no: 'Q12',
        question: 'Is the game safe for children?',
        answer:
          'Yes, the game adheres to safety guidelines and is designed specifically for young learners.',
      },
    ],
  },
  {
    no: 'Q13',
    type: 'ACCOUNT AND DATA QUESTIONS',
    faqs: [
      {
        no: 'Q',
        question: 'Do I need to create an account to play the game?',
        answer:
          'Yes, the game requires a sign-in/login through PlayFab to save progress and access the leaderboard.',
      },
      {
        no: 'Q14',
        question: 'What data is collected from the game?',
        answer:
          'The game collects data like game scores, progress in mini-games, and other metrics for display on the parental dashboard.',
      },
      {
        no: 'Q15',
        question: "Can I reset my child's progress?",
        answer: 'No, but if you want you can connect to developer.',
      },
    ],
  },
  {
    type: 'SUPPORT AND UPDATES',
    faqs: [
      {
        no: 'Q16',
        question: 'Who can I contact for support?',
        answer:
          'For support, you can reach out to us through the contact form on the website or email support@touchtapadventure.com.',
      },
      {
        no: 'Q17',
        question: 'Will there be updates with new mini-games?',
        answer:
          'Yes, we plan to release regular updates with new mini-games and features to keep the experience fresh and engaging.',
      },
      {
        no: 'Q18',
        question: 'Is the game available in multiple languages?',
        answer:
          'Currently, the game is available in English. Additional languages may be added in future updates.',
      },
    ],
  },
];

export default function Faqs() {
  const [openedFaq, setOpenedFaq] = useState<string>();

  const toggleFaq = (question: string) =>
    setOpenedFaq((prev) => (prev === question ? undefined : question));

  return (
    <div className="page flex flex-col gap-[60px]">
      {faqs.map((faq) => (
        <div key={faq.type} className="flex flex-col gap-5">
          <h2 className={`${rowdies.className} text-2xl`}>{faq.type}</h2>
          <div className="flex flex-col gap-2.5">
            {faq.faqs.map((item) => (
              <div key={item.question} className="cta py-3 px-4 rounded-[10px]">
                <div
                  onClick={() => toggleFaq(item.question)}
                  className="bg-[#030201] py-5 px-2.5 rounded-t-[10px] flex justify-between items-center gap-2 cursor-pointer transition-transform"
                >
                  <p className={`${rowdies.className}`}>{`${item.no}:`}</p>
                  <p className={`${rowdies.className}`}>{item.question}</p>
                  <Image
                    src={
                      openedFaq === item.question
                        ? '/images/svgs/less.svg'
                        : '/images/svgs/more.svg'
                    }
                    alt="toggle icon"
                    width={20}
                    height={20}
                    className={`transition-transform ${
                      openedFaq === item.question ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <div
                  className={`bg-[#030201] rounded-b-[10px] overflow-hidden transition-max-height duration-500 ease-in-out ${
                    openedFaq === item.question ? 'max-h-[200px]' : 'max-h-0'
                  }`}
                >
                  <p className="py-3 px-4 text-sm">
                    {Array.isArray(item.answer)
                      ? item.answer.map((line, index) => (
                          <span key={index} className="block">
                            {line}
                          </span>
                        ))
                      : item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
