"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/header-bg.jpg"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left md:object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/50 to-blue-600/50">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-2 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-white">Вологдапроектмонтаж</div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-white hover:text-blue-300 transition-colors">О нас</Link>
            <Link href="#services" className="text-white hover:text-blue-300 transition-colors">Услуги</Link>
            <Link href="#gallery" className="text-white hover:text-blue-300 transition-colors">Галерея</Link>
            <Link href="#faq" className="text-white hover:text-blue-300 transition-colors">FAQ</Link>
            <Link href="#contact" className="text-white hover:text-blue-300 transition-colors">Контакты</Link>
            <a
              href="https://vk.com/volproektmontazh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors flex items-center"
            >
              <svg className="w-6 h-6 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.97 14.86 14.94C13.86 14 13.47 13.74 13.18 13.74C12.88 13.74 12.75 13.88 12.75 14.26V15.69C12.75 16.04 12.59 16.27 11.73 16.27C10.29 16.27 8.61 15.31 7.39 13.59C5.45 10.77 4.86 9.39 4.86 9.11C4.86 9 4.96 8.83 5.21 8.83H6.69C7.04 8.83 7.2 9.01 7.38 9.39C8.05 10.87 9.04 12.3 9.55 12.3C9.84 12.3 9.95 12.16 9.95 11.67V10.08C9.9 8.95 9.27 8.9 9.27 8.6C9.27 8.45 9.4 8.27 9.65 8.27H12.1C12.45 8.27 12.6 8.45 12.6 8.83V10.77C12.6 11.17 12.78 11.34 12.84 11.34C13.13 11.34 13.47 11.17 14.04 10.61C15.13 9.39 15.75 8.11 15.75 7.77C15.75 7.67 15.85 7.5 16.1 7.5H17.58C17.93 7.5 18.09 7.68 17.99 8.02C17.73 8.95 15.94 11.24 15.94 11.24C15.76 11.5 15.7 11.67 15.94 11.97C16.04 12.1 16.49 12.55 16.89 12.97C17.91 14.04 18.75 14.94 18.9 15.27C19.05 15.59 18.9 15.77 18.55 15.77L18.15 16.27Z"/>
              </svg>
              ВКонтакте
            </a>
            <a
              href="tel:+79115012376"
              className="text-white hover:text-blue-300 transition-colors flex items-center"
            >
              <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (911) 501-23-76
            </a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button 
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 text-white"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link 
              href="#about" 
              className="text-white text-xl hover:text-blue-300 transition-colors"
              onClick={toggleMenu}
            >
              О нас
            </Link>
            <Link 
              href="#services" 
              className="text-white text-xl hover:text-blue-300 transition-colors"
              onClick={toggleMenu}
            >
              Услуги
            </Link>
            <Link 
              href="#gallery" 
              className="text-white text-xl hover:text-blue-300 transition-colors"
              onClick={toggleMenu}
            >
              Галерея
            </Link>
            <Link 
              href="#faq" 
              className="text-white text-xl hover:text-blue-300 transition-colors"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link 
              href="#contact" 
              className="text-white text-xl hover:text-blue-300 transition-colors"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
            <a
              href="https://vk.com/volproektmontazh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-blue-300 transition-colors flex items-center"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.97 14.86 14.94C13.86 14 13.47 13.74 13.18 13.74C12.88 13.74 12.75 13.88 12.75 14.26V15.69C12.75 16.04 12.59 16.27 11.73 16.27C10.29 16.27 8.61 15.31 7.39 13.59C5.45 10.77 4.86 9.39 4.86 9.11C4.86 9 4.96 8.83 5.21 8.83H6.69C7.04 8.83 7.2 9.01 7.38 9.39C8.05 10.87 9.04 12.3 9.55 12.3C9.84 12.3 9.95 12.16 9.95 11.67V10.08C9.9 8.95 9.27 8.9 9.27 8.6C9.27 8.45 9.4 8.27 9.65 8.27H12.1C12.45 8.27 12.6 8.45 12.6 8.83V10.77C12.6 11.17 12.78 11.34 12.84 11.34C13.13 11.34 13.47 11.17 14.04 10.61C15.13 9.39 15.75 8.11 15.75 7.77C15.75 7.67 15.85 7.5 16.1 7.5H17.58C17.93 7.5 18.09 7.68 17.99 8.02C17.73 8.95 15.94 11.24 15.94 11.24C15.76 11.5 15.7 11.67 15.94 11.97C16.04 12.1 16.49 12.55 16.89 12.97C17.91 14.04 18.75 14.94 18.9 15.27C19.05 15.59 18.9 15.77 18.55 15.77L18.15 16.27Z"/>
              </svg>
              ВКонтакте
            </a>
            <a
              href="tel:+79115012376"
              className="text-white text-xl hover:text-blue-300 transition-colors flex items-center"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (911) 501-23-76
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Водоснабжение, канализация и отопление для загородного дома
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200">
            Оказываем комплексные услуги по инженерным коммуникациям в частных домах, коттеджах и на участках
          </p>
          <a
            href="tel:+79115012376" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300 transform hover:scale-[1.02]"
          >
            Получить консультацию
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header; 