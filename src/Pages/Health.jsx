import { useState } from 'react'
import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header';
import ContactForm from '../Components/Home/EmailForm';
import emergecny from "../assets/emergency.jpeg";
import healthHome from "../assets/homeHealth.jpeg";
import medicineDelivery from "../assets/medicineDelivery.jpeg";
import sample from "../assets/sampleCollection.jpeg";
import health from "../assets/HealthAndMedicalCarousel.jpeg"

export default function Health() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  // Health sub-services array
  const healthSubServices = [
    'Medicine Delivery',
    'Home Health Assistance',
    'Laboratory Services',
    'Second Opinion & Emergency Medical Consultants'
  ];

  const services = [
    {
      title: 'Medicine Delivery',
      image: medicineDelivery,
      description: 'Purchasing medicines can be challenging, especially for elderly or less-mobile patients who cannot easily visit pharmacies. BIGB NRI provides assistance in procuring medicines in India and ensuring timely delivery.',
      features: ['Procuring medicines locally in India for patients unable to do so themselves', 'Coordinating monthly deliveries for patients on regular medication', 'Prescription management and verification', 'Quality assurance and authenticity checks', 'Timely doorstep delivery', 'Emergency medicine assistance']
    },
    {
      title: 'Home Health Assistance',
      image: healthHome,
      description: 'BIG B NRI Services facilitates professional home health care for aging parents, grandparents, or patients recovering at home. Our services include skilled nursing and medical care with elderly and post-surgery support.',
      features: ['Skilled nursing and medical care', 'Elderly and post-surgery support', 'Daily health monitoring', 'Medication management assistance', 'Physical therapy coordination', 'Regular health check-ups at home']
    },
    {
      title: 'Laboratory Services',
      image: sample,
      description: 'For aging parents or grandparents, visiting a laboratory for diagnostic tests can be stressful and inconvenient. BIG B NRI Services ensures comfort and ease by providing comprehensive support for all laboratory and diagnostic needs.',
      features: ['Scheduling appointments and coordinating with labs', 'Home sample collection services (where available)', 'Assistance with reports, documentation, and follow-ups', 'Multiple test coordination', 'Digital report delivery', 'Doctor consultation coordination']
    },
    {
      title: 'Second Opinion & Emergency Medical Consultants',
      image: emergecny,
      description: 'BIG B NRI Services provides NRIs and their families with quick access to expert medical second opinions and emergency consultants. We help with reviewing medical reports and treatment options while coordinating with hospitals and doctors.',
      features: ['Reviewing medical reports and treatment options', 'Coordinating with hospitals and doctors', 'Guidance during medical emergencies', 'Specialist doctor referrals', 'Treatment plan evaluation', 'Emergency response coordination']
    }
  ];

  const stats = [
    { value: '1000+', label: 'Patients Assisted' },
    { value: '24/7', label: 'Emergency Support' },
    { value: '50+', label: 'Partner Hospitals' },
    { value: '100%', label: 'Quality Assurance' }
  ];

  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, rgba(247, 230, 181, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)'}}>
      <Header/>
   
      {/* Pass healthSubServices to ContactForm */}
      <ContactForm 
        isOpen={showEmailForm}
        onClose={() => setShowEmailForm(false)}
        showAsModal={true}
        servicesList={healthSubServices}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden text-white" style={{background: 'linear-gradient(135deg, #071020 0%, #123a57 100%)'}}>
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${health})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.5'
          }}></div>
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(7, 16, 32, 0.85) 0%, rgba(18, 58, 87, 0.85) 100%)'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Health & Medical Assistance
              <div className="w-24 h-1 mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #d4af37 0%, #ffd86b 100%)'}}></div>
            </h1>
            <p className="text-xl leading-relaxed" style={{color: '#bfa46f'}}>
              Health is the foundation of all happiness and success. As the saying goes, only a healthy body and mind can produce meaningful results. Good health is the first prerequisite for achieving any other form of happiness.
            </p>
            <p className="text-lg mt-4 leading-relaxed" style={{color: '#bfa46f'}}>
              For NRIs, taking care of elderly parents or family members back home is both a social and personal responsibility. BIGB NRI provides professional health management services, ensuring that your loved ones receive the best quality care. With our support, NRIs can rest assured that their family's health needs are managed efficiently, compassionately, and affordably.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-32 translate-x-32" 
             style={{background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full translate-y-48 -translate-x-48"
             style={{background: 'radial-gradient(circle, rgba(11, 39, 64, 0.1) 0%, transparent 70%)'}}></div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 230, 181, 0.2) 100%)',
                   border: '1px solid rgba(212, 175, 55, 0.3)',
                   boxShadow: '0 10px 30px rgba(11, 39, 64, 0.1)'
                 }}>
              <div className="text-3xl md:text-4xl font-bold text-center mb-2 gold-number">{stat.value}</div>
              <div className="text-center text-sm md:text-base font-medium" style={{color: '#5a4a1a'}}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#071020'}}>
            Our Health Care Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8" style={{color: '#5a4a1a'}}>
            Comprehensive health management solutions designed for NRIs and their families in India. We provide compassionate, reliable, and professional care ensuring your loved ones receive the best medical attention and support.
          </p>
          
          {/* CTA Button at Top */}
          <button
            onClick={() => setShowEmailForm(true)}
            className="px-10 py-4 text-white text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)',
              boxShadow: '0 15px 35px rgba(212, 175, 55, 0.4)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Request Health Assistance
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                 style={{
                   border: '1px solid rgba(212, 175, 55, 0.3)',
                   boxShadow: '0 20px 40px rgba(11, 39, 64, 0.1)'
                 }}>
              <div className={`md:flex items-stretch ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Section */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br"></div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-start gap-3 mb-4">
                    <h3 className="text-2xl font-bold pt-2" style={{color: '#071020'}}>{service.title}</h3>
                  </div>
                  
                  <p className="mb-6 leading-relaxed text-base font-medium" style={{color: '#5a4a1a'}}>{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{color: '#071020'}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      Our Services Include
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2" style={{color: '#5a4a1a'}}>
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background: '#d4af37'}}></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)',
               border: '2px solid rgba(212, 175, 55, 0.3)',
               boxShadow: '0 40px 110px rgba(212, 175, 55, 0.25)'
             }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-32 translate-x-32" 
               style={{background: 'rgba(255, 255, 255, 0.1)'}}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full translate-y-48 -translate-x-48"
               style={{background: 'rgba(255, 255, 255, 0.1)'}}></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Worried About Your Family's Health Back Home?
            </h2>
            <p className="text-lg mb-8" style={{color: '#fff7e6'}}>
              With BIGB NRI, NRIs can ensure that their loved ones receive timely, efficient, and hassle-free health care without any stress or discomfort. From medicine delivery and home health assistance to laboratory services and emergency medical support, we provide comprehensive health management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowEmailForm(true)}
                className="px-8 py-4 font-bold rounded-xl transition-colors duration-300 shadow-2xl transform hover:scale-105"
                style={{
                  background: 'white',
                  color: '#b08a2f',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                }}>
                Schedule Health Consultation
              </button>
              <a 
                href="https://wa.me/919989103388" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                style={{
                  background: 'transparent',
                  border: '2px solid white',
                  color: 'white',
                  textDecoration: 'none'
                }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Health Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gold-number {
          background: linear-gradient(135deg, #b08a2f 0%, #d4af37 25%, #ffd86b 50%, #d4af37 75%, #b08a2f 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: number-shine 4s ease-in-out infinite;
        }
        
        @keyframes number-shine {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
      <Footer/>
    </main>
  )
}