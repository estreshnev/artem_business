import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">О нашей компании</h2>
            <p className="text-gray-600 mb-6">
              Мы - команда профессиональных сантехников с более чем 10-летним опытом работы в сфере водоснабжения и канализации загородных домов. Наша миссия - обеспечить каждый дом качественными инженерными системами, которые прослужат долгие годы.
            </p>
            <p className="text-gray-600 mb-6">
              Работаем по Вологде и области. Выезд на участок, оценка, помощь в закупке и доставке материалов. Качество, надёжность, гарантия.
            </p>
            <p className="text-gray-600 mb-6 italic">
              *Газ — в сотрудничестве с лицензированной подрядной организацией.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Более 500 успешно реализованных проектов</p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Гарантия на все виды работ</p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Сертифицированные специалисты</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64">
              <Image
                src="/about/about-1.jpg"
                alt="Наша команда за работой"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="relative h-64 mt-8">
              <Image
                src="/about/about-2.jpg"
                alt="Установка оборудования"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 