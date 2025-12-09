import PropertyManagement from "../../Pages/PropertyManagement";
import OnlineServices from "../../Pages/PropertyManagement";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <section style={{ background: "#ffffff" }} className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 style={{ color: "#071020" }} className="text-3xl font-bold mb-2">
          Our Services
        </h2>
        <p style={{ color: "#3a3a3a" }} className="mb-10">
          Explore our comprehensive range of NRI services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceFeatureCard
            title="Civil Works & Construction Services"
            description="Expert management and maintenance of residential and commercial properties for NRIs."
            image="property"
          />
          <Link to="/property-management">
            <ServiceFeatureCard
              title="Property Management"
              description="Professional civil construction and renovation services with trusted contractors."
              image="civil"
              highlight
            />
          </Link>
          <ServiceFeatureCard
            title="Vital Records Procurement "
            description="Hassle-free assistance with birth certificate registration and documentation."
            image="birth"
          />
          <ServiceFeatureCard
            title="Complete Document Attestation"
            description="Hassle-free assistance with birth certificate registration and documentation."
            image="birth"
          />
          <Link to="/online-services">
            <ServiceFeatureCard
              title="Online Services"
              description="Digital solutions for visa, passport, and government document processing."
              image="online"
            />
          </Link>

          <ServiceFeatureCard
            title="Taxes and Legal"
            description="Expert financial planning and legal advisory services tailored for NRIs."
            image="financial"
          />
          <ServiceFeatureCard
            title="Business Consulting/ Registrations"
            description="Strategic business guidance for NRI entrepreneurs and startup ventures."
            image="business"
          />
          <ServiceFeatureCard
            title="Banking Assistance"
            description="Complete banking solutions including remittance and investment services."
            image="banking"
          />
          <ServiceFeatureCard
            title="Health/Medical"
            description="Access to quality healthcare services and medical consultation facilities."
            image="health"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceFeatureCard({ title, description, image, highlight }) {
  const getIcon = (imageName) => {
    switch (imageName) {
      case "property":
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21H5M19 21H21M5 21H3M9 7H10M9 11H10M14 7H15M14 11H15M10 21V17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "civil":
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 10V3L4 14H11V21L20 10H13Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 14H9M15 10H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "birth":
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 12L11 14L15 10M12 3L13.2 5.4L15.9 5.8L13.9 7.8L14.4 10.5L12 9.3L9.6 10.5L10.1 7.8L8.1 5.8L10.8 5.4L12 3ZM5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "online":
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "financial":
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "business":
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 12H12M12 12H15M12 12V9M12 12V15M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.1978 3.23373 14.3437 3.662 15.3944C3.74373 15.5945 3.78459 15.6945 3.80306 15.7898C3.81968 15.8759 3.8235 15.9399 3.821 16.0265C3.81828 16.1228 3.7987 16.2261 3.75955 16.4327L3.38321 18.3027C3.21597 19.1291 3.13235 19.5423 3.30817 19.785C3.45522 19.9883 3.7058 20.1055 3.96662 20.092C4.27394 20.076 4.56678 19.7603 5.15247 19.1288C5.48903 18.7711 5.65731 18.5922 5.84515 18.4818C6.04063 18.3667 6.28109 18.3223 6.51126 18.3578C6.75594 18.3956 6.98763 18.5273 7.451 18.7908L8.94189 19.5992C9.85003 20.1067 10.3036 20.3605 10.7772 20.4564C11.1783 20.5381 11.5929 20.5381 11.994 20.4564C12.4676 20.3605 12.9212 20.1067 13.8293 19.5992L15.3202 18.7908C15.7836 18.5273 16.0153 18.3956 16.26 18.3578C16.4902 18.3223 16.7306 18.3667 16.9261 18.4818C17.1139 18.5922 17.2822 18.7711 17.6188 19.1288C18.2045 19.7603 18.4973 20.076 18.8046 20.092C19.0655 20.1055 19.316 19.9883 19.4631 19.785C19.6389 19.5423 19.5553 19.1291 19.3881 18.3027L19.0117 16.4327C18.9726 16.2261 18.953 16.1228 18.9503 16.0265C18.9478 15.9399 18.9516 15.8759 18.9682 15.7898C18.9867 15.6945 19.0276 15.5945 19.1093 15.3944C19.5376 14.3437 19.7713 13.1978 19.7713 12C19.7713 7.02944 15.7419 3 10.7713 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "banking":
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 21H21M3 10H21M5 6L12 3L19 6M5 10V17M19 10V17M9 14H10M14 14H15M12 10V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "health":
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 16H10M12 14V18M8 8H16M8 12H16M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2v20M2 12h20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`feature-card group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl relative ${
        highlight ? "feature-highlight" : ""
      }`}
      style={{ background: "#ffffff" }}
    >
      {/* Icon Section with Golden Gradient */}
      <div className="h-32 w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b8924a] via-[#d4af37] to-[#c9a45c] group-hover:from-[#d4af37] group-hover:via-[#e6c56a] group-hover:to-[#d4af37] transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/90 group-hover:text-white transition-colors duration-300">
            {getIcon(image)}
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3
          style={{ color: "#071020" }}
          className="text-xl font-bold mb-3 group-hover:text-amber-700 transition-colors duration-300"
        >
          {title}
        </h3>
        <p
          style={{ color: "#3a3a3a" }}
          className="text-sm mb-4 leading-relaxed"
        >
          {description}
        </p>

        {/* News badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-amber-300 bg-amber-50 text-amber-700 text-xs font-semibold">
          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
          Featured Service
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="#d4af37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Golden border effect on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-300 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}
