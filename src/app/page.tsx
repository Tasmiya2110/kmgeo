import Hero from '@/src/components/Hero';
import Link from 'next/link';

export default function Home() {
  const features = [
    { title: 'Innovation', desc: 'Cutting-edge technology solutions for modern businesses.' },
    { title: 'Reliability', desc: 'Trusted by hundreds of companies worldwide.' },
    { title: 'Support', desc: '24/7 customer support to keep you running.' },
  ];

  return (
    <>
      <Hero
        title="Welcome to AcmeCorp"
        subtitle="We build innovative solutions that help your business grow."
      />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}