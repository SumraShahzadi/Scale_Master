const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "COO, TechFlow",
      content: "ScaleMaster transformed how we handle operations. The automation features alone saved us 20 hours a week.",
      avatar: "SJ",
      delay: "0.1s"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, StartUp Inc",
      content: "Incredible platform. The UI is intuitive and the customer support is top-notch. Highly recommended!",
      avatar: "MC",
      delay: "0.2s"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Director, Enterprise Solutions",
      content: "We needed a scalable solution that could grow with us. ScaleMaster delivered exactly that and more.",
      avatar: "ER",
      delay: "0.3s"
    }
  ];

  return (
    <section className="py-32 bg-bg-light relative overflow-hidden" id="testimonials">
      {/* Background Blob */}
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full top-[10%] -left-[5%] blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-dark animate-fade-in-up">Trusted by Industry Leaders</h2>
          <p className="text-medium text-lg animate-fade-in-up animation-delay-100">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <div
              className="bg-white/80 backdrop-blur-md p-10 rounded-xl shadow-sm border border-white relative transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-in-up"
              key={item.id}
              style={{ animationDelay: item.delay }}
            >
              <div className="text-6xl text-primary/15 absolute top-6 left-8 font-serif leading-none select-none">❝</div>
              <p className="mb-8 italic text-dark z-10 relative text-lg leading-relaxed">{item.content}</p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary to-primary-hover text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {item.avatar}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-dark">{item.name}</span>
                  <span className="text-sm text-light">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
