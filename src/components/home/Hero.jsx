import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-32 pb-24 bg-gradient-to-br from-bg-light to-white overflow-hidden">
      {/* Background Shape */}
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-[radial-gradient(circle,rgba(105,152,171,0.1)_0%,rgba(255,255,255,0)_70%)] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-16 items-center relative z-10">
        <div className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-dark tracking-tight">
            Scale Your Business <br />
            <span className="text-primary relative z-10 after:content-[''] after:absolute after:bottom-2 after:-left-1 after:w-[105%] after:h-[18px] after:bg-accent/20 after:-z-10 after:-rotate-1 after:rounded">Without Limits</span>
          </h1>
          <p className="text-xl text-medium mb-10 max-w-[540px] leading-relaxed mx-auto lg:mx-0 delay-100">
            The all-in-one platform designed to streamline your operations,
            optimize workflows, and drive growth with intelligent automation.
          </p>
          <div className="flex gap-4 mb-14 justify-center lg:justify-start flex-col sm:flex-row w-full sm:w-auto delay-200">
            <a href="/register" className="btn btn-primary px-8 py-4 text-lg w-full sm:w-auto">Start Free Trial</a>
            <a href="#demo" className="btn btn-outline px-8 py-4 text-lg w-full sm:w-auto">Watch Demo</a>
          </div>
          <div className="text-sm text-light border-t border-gray-200 pt-8 mt-8 lg:mt-0 delay-300">
            <span className="block mb-4 text-xs uppercase tracking-widest font-semibold">Trusted by market leaders:</span>
            <div className="flex gap-8 justify-center lg:justify-start font-bold text-medium opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <span>TechCorp</span>
              <span>InnovateX</span>
              <span>FutureScale</span>
            </div>
          </div>
        </div>

        <div className={`relative h-[400px] lg:h-[500px] flex items-center justify-center perspective-1000 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/90 rounded-xl p-8 w-[85%] z-20 relative glass-panel animate-[float_6s_ease-in-out_infinite]">
            <div className="flex gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="card-body">
              <div className="flex items-end justify-around h-[180px] pb-4 border-b border-gray-200 mb-6">
                <div className="w-[18%] bg-gradient-to-t from-primary to-accent rounded-t opacity-90 h-[40%] animate-[grow_1.5s_ease-out_forwards] shadow-lg delay-75 origin-bottom"></div>
                <div className="w-[18%] bg-gradient-to-t from-primary to-accent rounded-t opacity-90 h-[75%] animate-[grow_1.5s_ease-out_forwards] shadow-lg delay-150 origin-bottom"></div>
                <div className="w-[18%] bg-gradient-to-t from-primary to-accent rounded-t opacity-90 h-full animate-[grow_1.5s_ease-out_forwards] shadow-lg delay-200 origin-bottom"></div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-sm text-light mb-1">Growth</span>
                  <span className="text-2xl font-bold text-dark">+124%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-light mb-1">Revenue</span>
                  <span className="text-2xl font-bold text-dark">$2.4M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Decorations */}
          <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(230,242,255,0.8)_0%,rgba(255,255,255,0)_70%)] -top-[15%] -right-[20%] rounded-full z-10"></div>
          <div className="absolute w-[150px] h-[150px] bg-gradient-to-br from-accent/20 to-primary/10 rounded-full bottom-[10%] -left-[5%] animate-[float_8s_ease-in-out_infinite_reverse] z-10"></div>
          <div className="hidden lg:flex bg-white px-6 py-4 rounded-lg shadow-xl absolute z-30 font-semibold text-primary items-center top-[20%] -left-[10%] animate-[float_5s_ease-in-out_infinite_0.5s]">
            <span>🚀 +45% Efficiency</span>
          </div>
        </div>
      </div>

      {/* We need to define grow keyframes in Tailwind config or global css, using arbitrary values for now if needed or relying on global styles */}
    </section>
  );
};

export default Hero;
