import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  showButton?: boolean;
}

export default function Hero({ title, subtitle, showButton = true }: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">{subtitle}</p>
        {showButton && (
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        )}
      </div>
    </section>
  );
}