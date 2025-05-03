import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-blue-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">PlumbPro</div>
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-blue-300">О нас</Link>
            <Link href="#services" className="hover:text-blue-300">Услуги</Link>
            <Link href="#faq" className="hover:text-blue-300">FAQ</Link>
            <Link href="#contact" className="hover:text-blue-300">Контакты</Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - to be implemented */}
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Профессиональные сантехнические услуги для вашего загородного дома
          </h1>
          <p className="text-xl mb-8">
            Качественный монтаж водоснабжения, бурение скважин и установка канализационных систем с гарантией качества
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header; 