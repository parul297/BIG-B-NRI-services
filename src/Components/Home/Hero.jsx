import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Image imports
import bankingAssistance from "../../assets/Banking Assistance.jpeg";
import civilWorks from "../../assets/Civil Works.jpeg";
import documents from "../../assets/documents and certificate.jpeg";
import health from "../../assets/health and medical.jpeg";
import online from "../../assets/online services.jpeg";
import property from "../../assets/property management.jpeg";
// import rental from "../../assets/rental Agreement.jpg";
import taxes from "../../assets/taxes and legal.jpeg";
import vitalRecord from "../../assets/vital record.jpeg";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      // title: "Banking Assistance for NRIs",
      // description:
      //   "Hassle-free banking solutions including account management, remittances, and compliance support.",
      image: bankingAssistance,
    },
    {
      title: "Civil Works & Maintenance",
      description:
        "Trusted civil works, repairs, and maintenance services for your property in India.",
      image: civilWorks,
    },
    {
      title: "Documents & Certificates",
      description:
        "Assistance with document procurement, attestation, and certificate services.",
      image: documents,
    },
    {
      title: "Health & Medical Support",
      description:
        "Medical coordination, hospital assistance, and healthcare support for your family.",
      image: health,
    },
    {
      title: "Online Services",
      description:
        "Digital services for NRIs including applications, tracking, and verifications.",
      image: online,
    },
    {
      title: "Property Management",
      description:
        "End-to-end property management including rent, maintenance, and inspections.",
      image: property,
    },
    // {
    //   title: "Rental Agreement Services",
    //   description:
    //     "Drafting and registration of rental agreements made simple.",
    //   image: rental,
    // },
    {
      title: "Taxes & Legal Services",
      description:
        "Professional assistance with taxation, filings, and legal compliance.",
      image: taxes,
    },
    {
      title: "Vital Records",
      description:
        "Birth, marriage, and other vital record services without hassle.",
      image: vitalRecord,
    },
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
    <section
      className="relative overflow-hidden w-full"
      style={{
        background: "linear-gradient(180deg,#071020 0%, #081826 100%)",
      }}
    >
      <div className="relative h-[550px] md:h-[620px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              transform:
                currentSlide === index
                  ? "translateX(0)"
                  : currentSlide < index
                  ? "translateX(100%)"
                  : "translateX(-100%)",
              pointerEvents: currentSlide === index ? "auto" : "none",
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative max-w-full mx-auto px-8 md:px-12 lg:px-16 h-full flex items-center">
              <div className="w-full max-w-3xl">
                
                {/* Text Section */}
                <div className="z-10">
                  <h1
                    className="text-3xl md:text-5xl font-extrabold mb-4"
                    style={{
                      color: "#d4af37",
                      letterSpacing: "2px",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {slide.title}
                  </h1>
                  <p className="mb-6 text-lg md:text-xl" style={{ 
                    color: "#ffffff",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                  }}>
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="px-6 py-3 rounded-md shadow-lg transition-transform hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(90deg,#d4af37,#ffd86b)",
                        color: "#071020",
                        fontWeight: 700,
                      }}
                    >
                      Get Started
                    </a>
                    <a
                      href="#"
                      className="px-6 py-3 rounded-md border-2 transition-all hover:bg-white hover:bg-opacity-10"
                      style={{
                        borderColor: "#d4af37",
                        color: "#ffffff",
                        fontWeight: 600,
                      }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-20"
          style={{
            background: "rgba(212,175,55,0.3)",
            border: "1px solid rgba(212,175,55,0.6)",
          }}
        >
          <ChevronLeft size={28} style={{ color: "#d4af37" }} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-20"
          style={{
            background: "rgba(212,175,55,0.3)",
            border: "1px solid rgba(212,175,55,0.6)",
          }}
        >
          <ChevronRight size={28} style={{ color: "#d4af37" }} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? "40px" : "12px",
                height: "12px",
                borderRadius: "6px",
                background:
                  currentSlide === index
                    ? "#d4af37"
                    : "rgba(212,175,55,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}