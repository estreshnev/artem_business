"use client";

import { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Какие гарантии вы предоставляете на выполненные работы?',
      answer: 'Мы предоставляем гарантию на все виды работ. Гарантия включает бесплатное устранение любых неисправностей, возникших по нашей вине.'
    },
    {
      question: 'Можете сделать "под ключ"?',
      answer: 'Да, мы делаем всё: от копки колодца до разводки труб внутри дома'
    },
    {
      question: 'Что делать, если замёрз водопровод?',
      answer: 'Звоните — приедем, найдём место заморозки, аккуратно прогреем, восстановим подачу воды'
    },
    {
      question: 'Выполняете ли вы работы в зимнее время?',
      answer: 'Да, мы работаем круглый год. Однако некоторые виды работ могут быть ограничены при сильных морозах. В таких случаях мы предложим альтернативные решения или перенесем работы на более подходящее время.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 