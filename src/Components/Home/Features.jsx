import { useState } from "react";
import { useNavigate } from "react-router-dom";
import civilWorks from "../../assets/carouselCivilWork.jpeg";
import propertyManagement from "../../assets/carouselPropertyManagement.jpeg";
import Business from "../../assets/CarouselBusinessConsulting.jpeg"
import health from "../../assets/HealthAndMedicalCarousel.jpeg"
import Banking from "../../assets/bankingcarousel.jpeg";
import Document from "../../assets/documentattestationcarousel.jpg";
import Tax from "../../assets/taxCarousel.webp";
import Vital from "../../assets/vitalrecordCaraousel.webp";
import Online from "../../assets/onlineServiesCarousel.avif";

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const services = [
    {
      title: "Civil Works & Construction Services",
      description: "Expert management and maintenance of residential and commercial properties for NRIs.",
      image: "civil", 
      imageSrc: civilWorks, 
      // tag: "Case Study"
      path:"/civil-works",
    },
    {
      title: "Property Management",
      description: "Professional civil construction and renovation services with trusted contractors.",
      image: "property", // Changed from "civil" to "property"
      imageSrc: propertyManagement, // Added image source
      // tag: "Featured",
      path:"/property-management",
    },
    {
      title: "Vital Records Procurement",
      description: "Hassle-free assistance with birth certificate registration and documentation.",
      imageSrc: Vital,
      // tag: "Service"
      path:"/vital-records",
    },
    {
      title: "Complete Document Attestation",
      description: "Professional document attestation services for all your legal requirements.",
      imageSrc: Document,
      // tag: "Service"
      path:"/complete-document",
    },
    {
      title: "Online Services",
      description: "Digital solutions for visa, passport, and government document processing.",
      imageSrc: Online,
      // tag: "Product Guide"
      path:"/online-services",
    },
    {
      title: "Taxes and Legal",
      description: "Expert financial planning and legal advisory services tailored for NRIs.",
      imageSrc: Tax,
      // tag: "Service"
      path:"/taxes-legal",
    },
    {
      title: "Business Consulting/ Registrations",
      description: "Strategic business guidance for NRI entrepreneurs and startup ventures.",
      image: "Business",
      imageSrc: Business,
      // tag: "Service"
      path:"/business-consulting",
    },
    {
      title: "Banking Assistance",
      description: "Complete banking solutions including remittance and investment services.",
      imageSrc: Banking,
      // tag: "Service"
      path:"/banking",
    },
    {
      title: "Health/Medical",
      description: "Access to quality healthcare services and medical consultation facilities.",
      image: "health",
      imageSrc: health,
      // tag: "Service"
      path:"/health",
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= services.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, services.length - 3) : prev - 3));
  };

  const visibleServices = services.slice(currentIndex, currentIndex + 3);

  return (
    <section style={{ background: "#f8f9fa" }} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 style={{ color: "#d4af37" }} className="text-4xl font-bold mb-3">
            BIG B NRI services 
          </h2>
          <p style={{ color: "#d4af37" }} className="font-semibold">
            Explore our comprehensive range of NRI services
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: "#17a2b8", boxShadow: "0 4px 12px rgba(23, 162, 184, 0.3)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex + 3 >= services.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: "#17a2b8", boxShadow: "0 4px 12px rgba(23, 162, 184, 0.3)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleServices.map((service, idx) => (
              <ServiceFeatureCard
                key={currentIndex + idx}
                {...service}
              />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(services.length / 3) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * 3)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: currentIndex === idx * 3 ? "#d4af37" : "#d1d5db",
                width: currentIndex === idx * 3 ? "24px" : "8px"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceFeatureCard({ title, description, imageSrc,path }) {
  const navigate = useNavigate();
  
  const getIcon = (imageName) => {
    switch (imageName) {
      case "property":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21H5M19 21H21M5 21H3M9 7H10M9 11H10M14 7H15M14 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "civil":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "birth":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M9 12L11 14L15 10M12 3L13.2 5.4L15.9 5.8L13.9 7.8L14.4 10.5L12 9.3L9.6 10.5L10.1 7.8L8.1 5.8L10.8 5.4L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "document":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858L19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "online":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 12H22M12 2C14.5 4.5 16 8.5 16 12C16 15.5 14.5 19.5 12 22M12 2C9.5 4.5 8 8.5 8 12C8 15.5 9.5 19.5 12 22" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case "financial":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 1V23M17 5H9.5C7.5 5 6 6.5 6 8.5C6 10.5 7.5 12 9.5 12H14.5C16.5 12 18 13.5 18 15.5C18 17.5 16.5 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "business":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case "banking":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M3 21H21M3 10H21M5 6L12 3L19 6M5 10V17M19 10V17M9 14H10M14 14H15M12 10V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "health":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const getBackgroundPattern = () => {
    const patterns = [
      "linear-gradient(135deg, #17a2b8 0%, #071020 100%)",
      "linear-gradient(135deg, #071020 0%, #123a57 100%)",
      "linear-gradient(135deg, #071020 0%, #17a2b8 100%)"
    ];
    return patterns[Math.floor(Math.random() * patterns.length)];
  };

  return (
    <div
      onClick={() => navigate(path)}
      className="group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ background: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
    >
      {/* Image/Pattern Header */}
      <div className="relative h-52 overflow-hidden">
        {/* Use actual image if imageSrc exists, otherwise use gradient pattern */}
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div 
            className="w-full h-full"
            style={{ background: getBackgroundPattern() }}
          >
            {/* Decorative Elements for gradient cards */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full" style={{ background: "rgba(255,255,255,0.1)", transform: "translate(40%, -40%)" }} />
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full" style={{ background: "rgba(255,255,255,0.1)", transform: "translate(30%, 30%)" }} />
          </div>
        )}
        
        {/* Overlay for better text readability on images */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
        
        {/* Tag Badge */}
        {/* <div className="absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-bold" style={{ background: "#071020", color: "#ffffff" }}>
          {tag}
        </div> */}
        
        {/* Icon */}
        {/* <div className="absolute bottom-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}>
          <div style={{ color: "#ffffff" }}>
            {getIcon(image)}
          </div>
        </div> */}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 style={{ color: "#071020" }} className="text-xl font-bold mb-3 leading-tight">
          {title}
        </h3>
        <p style={{ color: "#6b7280" }} className="text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* CTA */}
        <button className="flex items-center gap-2 font-bold text-lg transition-all duration-300 group-hover:gap-4" style={{ color: "#d4af37" }}>
          LEARN MORE
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}