import Hero from '@/src/components/Hero';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: '🌐',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services.',
      icon: '☁️',
    },
    {
      title: 'Consulting',
      description: 'Strategic technology consulting to help your business grow.',
      icon: '💡',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that users love.',
      icon: '🎨',
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights.',
      icon: '📊',
    },
  ];

  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive solutions tailored to your business needs."
        showButton={false}
      />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-blue-600"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}