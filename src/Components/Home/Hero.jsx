import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "BIG B — Trusted NRI Services",
      description: "We help NRIs with trusted immigration, investment and family services. Expert guidance for your journey abroad.",
      imagePlaceholder: "Immigration Services Image"
    },
    {
      title: "Investment Solutions for NRIs",
      description: "Maximize your returns with our specialized investment advisory services tailored for Non-Resident Indians.",
      imagePlaceholder: "Investment Advisory Image"
    },
    {
      title: "Family Support & Documentation",
      description: "Comprehensive family services including visa processing, legal documentation, and relocation support.",
      imagePlaceholder: "Family Services Image"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden w-full" style={{ background: 'linear-gradient(180deg,#071020 0%, #081826 100%)' }}>
      {/* Carousel Container */}
      <div className="relative h-[550px] md:h-[620px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              transform: currentSlide === index ? 'translateX(0)' : currentSlide < index ? 'translateX(100%)' : 'translateX(-100%)',
              pointerEvents: currentSlide === index ? 'auto' : 'none'
            }}
          >
            <div className="max-w-full mx-auto px-8 md:px-12 lg:px-16 h-full flex items-center w-full">
              <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="z-10">
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: '#d4af37', letterSpacing: '2px' }}>
                    {slide.title}
                  </h1>
                  <p className="mb-6 text-lg" style={{ color: '#cfc7a0' }}>
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="px-6 py-3 rounded-md shadow transition-transform hover:scale-105" style={{ background: 'linear-gradient(90deg,#d4af37,#ffd86b)', color: '#071020', fontWeight: 700 }}>
                      Get Started
                    </a>
                    <a href="#" className="px-6 py-3 rounded-md border transition-all hover:border-opacity-100" style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#e6c56a' }}>
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="flex justify-center items-center">
                  <div 
                    role="img" 
                    aria-label={slide.imagePlaceholder}
                    className="w-full max-w-xl h-72 md:h-96 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(180deg, rgba(7,16,32,0.6), rgba(7,25,38,0.6))',
                      border: '2px dashed rgba(212,175,55,0.5)'
                    }}
                  >
                    <div className="text-center px-4">
                      <div style={{ color: '#d4af37', fontWeight: 700, marginBottom: 6, fontSize: '1.25rem' }}>
                        {slide.imagePlaceholder}
                      </div>
                      <div style={{ color: '#bfb38a' }}>Replace with actual image</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110 z-20"
          style={{ background: 'rgba(212,175,55,0.3)', border: '1px solid rgba(212,175,55,0.6)' }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} style={{ color: '#d4af37' }} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110 z-20"
          style={{ background: 'rgba(212,175,55,0.3)', border: '1px solid rgba(212,175,55,0.6)' }}
          aria-label="Next slide"
        >
          <ChevronRight size={28} style={{ color: '#d4af37' }} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="transition-all duration-300"
              style={{
                width: currentSlide === index ? '40px' : '12px',
                height: '12px',
                borderRadius: '6px',
                background: currentSlide === index ? '#d4af37' : 'rgba(212,175,55,0.3)',
                border: 'none',
                cursor: 'pointer'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}