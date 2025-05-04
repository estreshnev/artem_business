"use client";

const Services = () => {
  const services = [
    {
      title: 'Копка колодцев и септиков',
      description: 'Копка колодцев и септиков из ЖБ колец',
      icon: '⛏️'
    },
    {
      title: 'Станции биологической очистки',
      description: 'Монтаж станций биологической очистки (СБО)',
      icon: '♻️'
    },
    {
      title: 'Прокладка коммуникаций',
      description: 'Прокладка труб и траншейные работы с утеплением',
      icon: '🏗️'
    },
    {
      title: 'Ввод коммуникаций',
      description: 'Ввод коммуникаций в дом (вода, канализация, газ*, электричество)',
      icon: '🔌'
    },
    {
      title: 'Сантехнические работы',
      description: 'Сантехнические работы: разводка труб, установка сантехники',
      icon: '🚰'
    },
    {
      title: 'Автономное водоснабжение',
      description: 'Автономное водоснабжение с автоматикой подачи воды',
      icon: '💧'
    },
    {
      title: 'Отопление дома',
      description: 'Отопление дома: проект, котельная, теплый пол, радиаторы, управление с телефона',
      icon: '🔥'
    },
    {
      title: 'Дренаж участка',
      description: 'Дренаж участка и осушение',
      icon: '🌊'
    },
    {
      title: 'Ремонт водопровода',
      description: 'Ремонт и разморозка водопровода зимой',
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