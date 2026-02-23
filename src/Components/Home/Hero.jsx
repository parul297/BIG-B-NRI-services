import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Document from "../../assets/DocumentAttestation.jpeg";
import vital from "../../assets/vitalRecordsCarousel.jpeg";
import online from "../../assets/CarouselonlineServices.jpeg"
import taxes from "../../assets/carouselTaxesAndLegal.jpeg";
import propertyManagement from "../../assets/propertyManagement.webp";
import businessConsulting from "../../assets/businessConsulting.webp";
import civilWorks from "../../assets/civilWorksAndMaintaince.jpg";
import healthANDmedical from "../../assets/healthAndMedical.jpg";
import bankingAssistance from "../../assets/bankingAssistance.png"
import contactUs from "../../Pages/ContactUs";

export default function Hero({ onOpenServices }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Banking Assistance for NRIs",
      description:
        "Hassle-free banking solutions including account management, remittances, and compliance support.",
      image: bankingAssistance,
    },
    {
      title: "Civil Works & Maintenance",
      description:
        "Trusted civil works, repairs, and maintenance services for your property in India.",
      image: civilWorks,
    },
    {
      title: "Business Consulting",
      description:
        "Professional business consulting and advisory services for NRIs.",
      image: businessConsulting,
    },
    {
      title: "Documents & Certificates",
      description:
        "Assistance with document procurement, attestation, and certificate services.",
      image: Document,
    },
    {
      title: "Health & Medical Support",
      description:
        "Medical coordination, hospital assistance, and healthcare support for your family.",
      image: healthANDmedical,
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
      image: propertyManagement,
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
      image: vital,
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
              <div className="w-full max-w-4xl">
                
                {/* Text Section */}
                <div className="z-10 space-y-6">
                  <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    style={{
                      color: "#ffd86b",
                      letterSpacing: "-1px",
                      textShadow: "3px 3px 8px rgba(0,0,0,0.9)",
                      background: "linear-gradient(135deg, #ffd86b 0%, #d4af37 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl" style={{ 
                    color: "#ffffff",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  }}>
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={onOpenServices}
                      className="px-8 py-4 rounded-lg shadow-lg transition-all hover:shadow-2xl hover:scale-105 font-bold text-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #d4af37, #ffd86b)",
                        color: "#071020",
                      }}
                    >
                      Explore Services
                    </button>
                    <a
                      href='contact-us'
                      className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                      style={{
                        background: "rgba(212, 175, 55, 0.2)",
                        border: "2px solid #d4af37",
                        color: "#ffd86b",
                      }}
                    >
                      Contact Us
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
          className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full z-20 transition-all hover:scale-110 backdrop-blur-sm"
          style={{
            background: "rgba(212,175,55,0.4)",
            border: "2px solid rgba(212,175,55,0.8)",
            boxShadow: "0 8px 16px rgba(212, 175, 55, 0.2)"
          }}
        >
          <ChevronLeft size={32} style={{ color: "#ffd86b" }} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full z-20 transition-all hover:scale-110 backdrop-blur-sm"
          style={{
            background: "rgba(212,175,55,0.4)",
            border: "2px solid rgba(212,175,55,0.8)",
            boxShadow: "0 8px 16px rgba(212, 175, 55, 0.2)"
          }}
        >
          <ChevronRight size={32} style={{ color: "#ffd86b" }} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="transition-all hover:scale-110"
              style={{
                width: currentSlide === index ? "32px" : "10px",
                height: "10px",
                borderRadius: "6px",
                background:
                  currentSlide === index
                    ? "#ffd86b"
                    : "rgba(212,175,55,0.4)",
                border: currentSlide === index ? "2px solid #ffd86b" : "none",
                boxShadow: currentSlide === index ? "0 0 15px rgba(212, 175, 55, 0.5)" : "none"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}