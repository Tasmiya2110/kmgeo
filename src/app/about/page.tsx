import Hero from '@/src/components/Hero';

export default function About() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Learn more about our story and mission."
        showButton={false}
      />

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            KmGeo has been at the forefront of innovation,
            delivering world-class solutions to businesses of all sizes. Our team
            of experts is passionate about solving complex problems.
          </p>
          <p className="text-gray-700 mb-8">
            We believe in building long-lasting relationships with our clients by
            providing exceptional service and value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 mt-2">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600 mt-2">Team Members</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600">15</div>
              <div className="text-gray-600 mt-2">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}