'use client';

export default function Features() {
  const features = [
    {
      icon: '🔍',
      title: 'AI-Powered Matching',
      description: 'Find the perfect clinic for your needs using our intelligent matching system',
    },
    {
      icon: '⭐',
      title: 'Verified Reviews',
      description: 'Read authentic reviews from real patients who have undergone treatments',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'Compare prices across different clinics and get accurate cost estimates',
    },
    {
      icon: '🏥',
      title: 'Verified Clinics',
      description: 'All clinics are verified and meet our quality standards',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Turkey Clinic Finder?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

