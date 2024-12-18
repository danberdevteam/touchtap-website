'use client'; // Add this only if using the app directory
import { Rowdies } from 'next/font/google';
import { useState } from 'react';

const rowdies = Rowdies({
  weight: ['400'],
  subsets: ['latin'],
});

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is TouchTap Adventure?',
      answer: 'TouchTap Adventure is a game website that provides an immersive adventure gaming experience.',
    },
    {
      question: 'How can I play the game?',
      answer: 'You can start playing by signing up and choosing an adventure from the available options.',
    },
    {
      question: 'Is TouchTap Adventure free to play?',
      answer: 'Yes, the game is free to play, with optional premium features available.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact support by emailing us at support@touchtap.com.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h1
        className={`${rowdies.className} text-3xl md:text-4xl font-bold text-center mb-8`}
      >
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <span className="text-xl">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
