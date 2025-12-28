import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import Testimonials from '../components/home/Testimonials';
import PricingPreview from '../components/home/PricingPreview';

const Home = () => {
  return (
    <div className="home-page overflow-x-hidden">
      <Hero />
      <Benefits />
      <Testimonials />
      <PricingPreview />

      {/* Call to Action Footer Section */}
      <section className="py-32 bg-gradient-to-br from-bg-dark to-[#1a1f35] text-white text-center relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(105,152,171,0.1)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-white animate-fade-in-up">Ready to Scale?</h2>
          <p className="text-light mb-10 text-xl max-w-xl mx-auto animation-delay-100 animate-fade-in-up">
            Join thousands of businesses growing with ScaleMaster today.
          </p>
          <a href="/register" className="btn btn-primary px-12 py-4 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-200 inline-flex">
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
