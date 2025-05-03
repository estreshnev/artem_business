import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: 'Водоснабжение',
      description: 'Профессиональный монтаж систем водоснабжения для загородных домов с использованием современных материалов',
      icon: '🚰'
    },
    {
      title: 'Бурение скважин',
      description: 'Качественное бурение скважин любой глубины с гарантией чистой воды',
      icon: '⛏️'
    },
    {
      title: 'Канализация',
      description: 'Установка и обслуживание канализационных систем с учетом особенностей вашего участка',
      icon: '🔧'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 