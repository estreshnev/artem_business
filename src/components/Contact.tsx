"use client";

import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Контактная информация</h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Руководитель</p>
                  <p className="font-semibold">Михайлов Артем Александрович</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <a href="tel:+79115012376" className="font-semibold hover:text-blue-500 transition-colors">+7 (911) 501-23-76</a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:art900215@mail.ru" className="font-semibold hover:text-blue-500 transition-colors">art900215@mail.ru</a>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-4">Социальные сети</p>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://vk.com/vologdaproectmontage" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center bg-[#4C75A3] text-white px-6 py-3 rounded-lg hover:bg-[#3B5998] transition-all transform hover:scale-[1.02] hover:shadow-lg"
                  >
                    <div className="relative w-6 h-6 mr-2">
                      <Image
                        src="/icons/vk_icon.png"
                        alt="VK"
                        fill
                        className="object-contain"
                      />
                    </div>
                    ВКонтакте
                  </a>
                  <a 
                    href="https://www.avito.ru/vologda/predlozheniya_uslug/santehnik_vodosnabzhenie_kanalizatsiya_2142597833" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center bg-[#2566E8] text-white px-6 py-3 rounded-lg hover:bg-[#1E56D0] transition-all transform hover:scale-[1.02] hover:shadow-lg"
                  >
                    <div className="relative w-6 h-6 mr-2">
                      <Image
                        src="/icons/avito_icon.png"
                        alt="Avito"
                        fill
                        className="object-contain"
                      />
                    </div>
                    Авито
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 