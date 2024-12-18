
'use client';
import React, { useState } from 'react';
import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleQuestionClick = (questionNumber: number) => {
    setOpenQuestion(openQuestion === questionNumber ? null : questionNumber);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-center mb-6">
        Frequently <span className="gradientText">Asked</span> Questions
      </h1>
      <p className="text-lg text-center text-white-600 mb-14">
        Do you have any kind of questions? We're here to help.
      </p>

      <h1 className="uppercase mb-4 text-2xl font-bold">General Questions</h1>
      {/* Question 1 */}
      <div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 1 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(1)}
            className="flex  text-lg justify-between w-full"
          >
            <span>Q1: What is TouchTapAdventures?</span>
            <span>{openQuestion === 1 ? '+' : '-'}</span>
          </button>
          {openQuestion === 1 && (
            <div className="mt-4 text-white-600 text-base">
              <p>TouchTapAdventures is an educational game designed for kids to learn colors, shapes, numbers, and alphabets through interactive gameplay and mini-games in a fun and engaging way.</p>
            </div>
          )}
        </div>
      </div>

     
     
      {/* Question 2 */}
      <div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 2 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(2)}
            className="flex text-lg justify-between w-full"
          >
            <span> Q2: Which platforms is the game available on?</span>
            <span>{openQuestion === 2 ? '+' : '-'}</span>
          </button>
          {openQuestion === 2 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>The game is currently available for iOS devices and can be downloaded from the App Store.</p>
            </div>
          )}
        </div>
      </div>


 {/* Question 3 */}
 <div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 3 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(3)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q3: What age group is this game suitable for?</span>
            <span>{openQuestion === 3 ? '+' : '-'}</span>
          </button>
          {openQuestion === 3 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>TouchTapAdventures is suitable for children aged 4 to 12 years old.</p>
            </div>
          )}
        </div>
      </div>

{/* Second */}
<h1 className="uppercase space-y-4 my-8 mb-4 text-2xl font-bold">GamePlay Questions</h1>
{/* first question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 4 ? 'bg-g ray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(4)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q4:What kind of gameplay does TouchTapAdventures offer?</span>
            <span>{openQuestion === 4 ? '+' : '-'}</span>
          </button>
          {openQuestion === 4 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>It offers an endless runner experience with collectibles and obstacles, along with mini-games that help kids develop motor skills and learn foundational concepts like counting, colors, shapes, and alphabets.</p>
            </div>
          )}
        </div>
      </div>

{/*five question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 5 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(5)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q5: What mini-games are included in the game?</span>
            <span>{openQuestion === 5 ? '+' : '-'}</span>
          </button>
          {openQuestion === 5 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>○  Star Counting: Helps kids learn to count.
○  Color Selection: Teaches basic colors.
○  Shape Selection: Introduces basic 3D shapes.
○  Alphabet Tracing: Teaches kids to trace and write alphabets.</p>
            </div>
          )}
        </div>
      </div>

      {/*Six question*/}
      <div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 6 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(6)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q6: Is there a leaderboard in the game?</span>
            <span>{openQuestion === 6 ? '+' : '-'}</span>
          </button>
          {openQuestion ===6 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>Yes, a leaderboard keeps the games competitive and encourages kids to improve their performance.</p>
            </div>
          )}
        </div>
      </div>

{/*seven question*/}

<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 7 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(7)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q7: Does the game track progress?</span>
            <span>{openQuestion === 7 ? '+' : '-'}</span>
          </button>
          {openQuestion ===7 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>Yes, data from all mini-games is collected and displayed on a parental dashboard to track the child's progress.</p>
            </div>
          )}
        </div>
      </div>

{/* Third */}
<h1 className="uppercase mb-4 my-8 text-2xl font-bold">Technical Questions</h1>


 {/*eight question*/}
 <div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 8 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(8)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q8: What Unity version was used to develop TouchTapAdventures?</span>
            <span>{openQuestion === 8 ? '+' : '-'}</span>
          </button>
          {openQuestion ===8 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>The game was developed using Unity 2022.3.53f1.</p>
            </div>
          )}
        </div>
      </div>

 {/*Nine question*/}
 <div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 9 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(9)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q9: What plugins and assets are used in the game?</span>
            <span>{openQuestion === 9 ? '+' : '-'}</span>
          </button>
          {openQuestion ===9 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>○  XCharts: For graphical representation on the parental dashboard.
○  In-App Purchasing (IAP): For managing in-app purchases.
○  Splines (In-Built): For smooth game design.
○  Cat Assets: For character and game design.
○  PlayFab: For sign-in, login, and data storage.</p>
            </div>
          )}
        </div>
      </div>

      {/*ten question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 10 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(10)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q10: Does the game support in-app purchases?</span>
            <span>{openQuestion === 10 ? '+' : '-'}</span>
          </button>
          {openQuestion ===10 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>Yes, in-app purchases are available for additional features or content.</p>
            </div>
          )}
        </div>
      </div>

{/* fourth */}
<h1 className="uppercase mb-4 my-8 text-2xl font-bold">Parental controls and features</h1>

{/*elenth question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 11 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(11)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q11: What is the parental dashboard?</span>
            <span>{openQuestion === 11 ? '+' : '-'}</span>
          </button>
          {openQuestion ===11 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>The parental dashboard provides insights into the child's progress by displaying data collected from mini-games like scores and achievements.</p>
            </div>
          )}
        </div>
      </div>

{/* 12 question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 12 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(12)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q12: Is the game safe for children?</span>
            <span>{openQuestion === 12 ? '+' : '-'}</span>
          </button>
          {openQuestion ===12 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>Yes, the game adheres to safety guidelines and is designed specifically for young learners.</p>
            </div>
          )}
        </div>
      </div>

{/* five */}
<h1 className="uppercase mb-4 my-8 text-2xl font-bold">Account and data questions</h1>

{/* 13 question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 13 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(13)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q13: Do I need to create an account to play the game?</span>
            <span>{openQuestion === 13 ? '+' : '-'}</span>
          </button>
          {openQuestion ===13 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>Yes, the game requires a sign-in/login through PlayFab to save progress and access the leaderboard.</p>
            </div>
          )}
        </div>
      </div>


{/* 14 question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 14 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(14)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q14: What data is collected from the game?</span>
            <span>{openQuestion === 14 ? '+' : '-'}</span>
          </button>
          {openQuestion ===14 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>The game collects data like game scores, progress in mini-games, and other metrics for display on the parental dashboard.</p>
            </div>
          )}
        </div>
      </div>

{/* 15 question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 15 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(15)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q15: Can I reset my child’s progress?</span>
            <span>{openQuestion === 15 ? '+' : '-'}</span>
          </button>
          {openQuestion ===15 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>No, but if you want you can connect to developer.</p>
            </div>
          )}
        </div>
      </div>

{/* six */}
<h1 className="uppercase mb-4 my-8  text-2xl font-bold">Support and updates</h1>

{/* 16 question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 16 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(16)}
            className="flex text-xl justify-between w-full"
          >
            <span>Q16: Who can I contact for support?</span>
            <span>{openQuestion === 16 ? '+' : '-'}</span>
          </button>
          {openQuestion ===16 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>For support, you can reach out to us through the contact form on the website or email support@touchtapadventure.com.</p>
            </div>
          )}
        </div>
      </div>

{/* 17 question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 17 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(17)}
            className="flex text-xl justify-between w-full"
          >
            <span>Q17: Will there be updates with new mini-games?</span>
            <span>{openQuestion === 17 ? '+' : '-'}</span>
          </button>
          {openQuestion ===17 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>Yes, we plan to release regular updates with new mini-games and features to keep the experience fresh and engaging.</p>
            </div>
          )}
        </div>
      </div>

{/* 18 question*/}
<div className="py-2">
        <div
          className={`border cta rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
            openQuestion === 18 ? 'bg-gray-100' : ''
          }`}
        >
          <button
            onClick={() => handleQuestionClick(18)}
            className="flex text-lg justify-between w-full"
          >
            <span>Q18: Is the game available in multiple languages?</span>
            <span>{openQuestion === 18 ? '+' : '-'}</span>
          </button>
          {openQuestion ===18 && (
            <div className="mt-4 text-Whit-600 text-base">
              <p>Currently, the game is available in English. Additional languages may be added in future updates.</p>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default FAQ;






// export default function FAQ() {
//   return <div>page</div>;
// }

