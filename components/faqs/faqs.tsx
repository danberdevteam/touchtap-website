'use client';
import { Rowdies } from 'next/font/google';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
    type: 'GAMEPLAY QUESTIONS',
    faqs: [
      {
        no: 'Q4',
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
    type: 'TECHNICAL QUESTIONS',
    faqs: [
      {
        no: 'Q8',
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
    type: 'ACCOUNT AND DATA QUESTIONS',
    faqs: [
      {
        no: 'Q13',
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
          'For support, you can reach out to us through the contact form on the website or email support@touchtapgame.com.',
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
  return (
    <div className="page flex flex-col gap-[60px] md:gap-16 lg:gap-20">
      {faqs.map((faq) => (
        <div
          key={faq.type}
          className="flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8"
        >
          <h2
            className={`${rowdies.className} text-2xl md:text-3xl lg:text-[32px]`}
          >
            {faq.type}
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-2.5"
          >
            {faq.faqs.map((faq, index) => (
              <div
                key={index}
                className="cta py-3 lg:py-4 px-4 md:px-5 lg:px-6 rounded-[10px]"
              >
                <div className="bg-[#030201] py-5 px-2.5 md:px-4 lg:px-5 rounded-[10px] lg:rounded-[20px]">
                  <AccordionItem key={faq.question} value={index.toString()}>
                    <AccordionTrigger className="text-white font-semibold text-base md:text-lg text-start">
                      <div className="flex justify-between gap-2 mr-2">
                        <p
                          className={`${rowdies.className} md:text-lg lg:text-xl xl:text-2xl`}
                        >{`${faq.no}:`}</p>
                        <p
                          className={`${rowdies.className} md:text-lg lg:text-xl xl:text-2xl`}
                        >
                          {faq.question}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base lg:text-lg">
                      {Array.isArray(faq.answer) ? (
                        <ul className="flex flex-col gap-2 list-disc list-inside">
                          {faq.answer.map((answer, index) => (
                            <li key={index} className="text-base md:text-lg">
                              {answer}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}
