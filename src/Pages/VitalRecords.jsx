import { useState } from 'react'
import Header from '../Components/Layout/Header.jsx'
import Footer from '../Components/Layout/Footer.jsx';
import ContactForm from '../Components/Home/EmailForm.jsx';

export default function VitalRecords() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const services = [
    {
      title: 'Birth Certificate',
      description: 'A Birth Certificate is a vital document serving as the first official record issued after birth. It provides essential proof of identity and forms the foundation for citizenship-related rights and various legal and administrative processes. We facilitate the entire process on behalf of the applicant, handling municipal records searches and name additions as needed.',
      features: ['Initial Registration Support', 'Name Addition Services', 'Municipal Records Search', 'Authorization Letter Processing', 'English Certificate Assistance', 'Complete Documentation Support']
    },
    {
      title: 'Non-Availability of Birth Certificate',
      description: 'We assist in procuring a Non-Availability of Birth Certificate (NABC) or Birth Identity Certificate from relevant municipal or government authorities. Our services include conducting searches of official records based on your date of birth and parents\' names, coordinating with authorities, and facilitating certificate issuance.',
      features: ['Official Records Search', 'Authority Coordination', 'NABC Procurement', 'Birth Identity Certificate', 'Email Scanned Copies', 'Courier Delivery in India']
    },
    {
      title: 'Marriage Certificate',
      description: 'We assist in obtaining Marriage Certificates from relevant municipal or government authorities in India. Our services include verification of marriage registration records, preparation and submission of applications on your behalf, and coordination with authorities to facilitate issuance of the certificate.',
      features: ['Registration Verification', 'Application Preparation', 'Authority Coordination', 'Authorization Processing', 'Digital Copies via Email', 'Physical Delivery Support']
    },
    {
      title: 'Death Certificate',
      description: 'A Death Certificate is an official document issued by the Municipality or Government authority recording the date, fact, and cause of death. We assist in obtaining Death Certificates by searching relevant offices, requesting certificates on your behalf, and providing both digital and physical copies as needed.',
      features: ['Municipal Office Search', 'Certificate Procurement', 'Authorization Support', 'Scanned Email Delivery', 'Courier Service in India', 'International Delivery Available']
    },
    {
      title: 'Income Certificate',
      description: 'An Income Certificate is an official government document certifying an individual\'s annual income. Commonly required for scholarships, government benefits, property transactions, taxation, and other legal or financial matters. We guide you through documentation, prepare applications, and coordinate with local offices.',
      features: ['Documentation Guidance', 'Eligibility Assessment', 'Application Preparation', 'Local Office Coordination', 'Application Follow-up', 'Certificate Delivery']
    },
    {
      title: 'Caste Certificate',
      description: 'A Caste Certificate is an official government document certifying an individual\'s caste or community. Required for government benefits, educational admissions, reservations, employment, and legal purposes. We assist with eligibility verification, documentation, and application submission to relevant authorities.',
      features: ['Eligibility Guidance', 'Documentation Support', 'Application Submission', 'Authority Coordination', 'Follow-up Services', 'Certificate Procurement']
    }
  ]

  const stats = [
    { value: '5000+', label: 'Certificates Issued' },
    { value: '98%', label: 'Success Rate' },
    { value: '7-14', label: 'Days Average' },
    { value: 'Pan-India', label: 'Coverage' }
  ]

  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, rgba(247, 230, 181, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)'}}>
      <Header/>
    <ContactForm 
        isOpen={showEmailForm}
        onClose={() => setShowEmailForm(false)}
        showAsModal={true}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden text-white" style={{background: 'linear-gradient(135deg, #071020 0%, #123a57 100%)'}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Vital Records Procurement
              <div className="w-24 h-1 mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #d4af37 0%, #ffd86b 100%)'}}></div>
            </h1>
            <p className="text-xl leading-relaxed" style={{color: '#bfa46f'}}>
              Professional assistance for all your vital records needs. From birth and marriage certificates to death, income, and caste certificates, 
              we facilitate seamless procurement from Indian government authorities for NRIs worldwide.
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

      {/* Important Notice */}
      {/* <div className="container mx-auto px-4 py-8">
        <div className="rounded-2xl p-6 md:p-8" style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)',
          border: '2px solid rgba(212, 175, 55, 0.3)'
        }}>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center"
                   style={{background: 'rgba(212, 175, 55, 0.2)'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b08a2f" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#071020'}}>Important Notes</h3>
              <ul className="space-y-2" style={{color: '#5a4a1a'}}>
                <li className="flex gap-2">
                  <span className="text-sm">•</span>
                  <span className="text-sm">BIGB NRI facilitates document procurement but shall not be held responsible for inaccuracies in government records or original registrations.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sm">•</span>
                  <span className="text-sm">While we strive to obtain certificates in English, issuance in regional or vernacular language cannot be guaranteed.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sm">•</span>
                  <span className="text-sm">We shall not be liable for bureaucratic delays or delays arising from incomplete, insufficient, or late submission of information by the client.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sm">•</span>
                  <span className="text-sm">Physical delivery within India is provided via courier at no additional charge; international courier services are subject to applicable charges.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      {/* Services Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#071020'}}>
            Our Vital Records Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8" style={{color: '#5a4a1a'}}>
            Comprehensive certificate procurement services designed for NRIs to obtain essential vital records from Indian authorities.
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Request Certificate Service
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
                  <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(185, 143, 43, 0.1) 100%)'}}></div>
                  <div className="h-64 md:h-full flex items-center justify-center" 
                       style={{background: 'linear-gradient(135deg, #071020 0%, #123a57 100%)'}}>
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                           style={{background: 'rgba(255, 255, 255, 0.1)'}}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                          <path d="M16 13H8M16 17H8M10 9H8"/>
                        </svg>
                      </div>
                      <p className="text-white font-semibold text-lg">Official Certificate</p>
                      <p className="mt-2 text-sm" style={{color: '#e6c56a'}}>Government Procurement</p>
                    </div>
                  </div>
                  {/* <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold"
                       style={{background: 'rgba(255, 255, 255, 0.9)', color: '#b08a2f'}}>
                    Service {index + 1}
                  </div> */}
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-start gap-3 mb-4">
                    <h3 className="text-2xl font-bold pt-2" style={{color: '#071020'}}>{service.title}</h3>
                  </div>
                  
                  <p className="mb-6 leading-relaxed text-base" style={{color: '#5a4a1a'}}>{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{color: '#071020'}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2" style={{color: '#5a4a1a'}}>
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background: '#d4af37'}}></div>
                          <span className="text-sm">{feature}</span>
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
              Need Help with Vital Records?
            </h2>
            <p className="text-lg mb-8" style={{color: '#fff7e6'}}>
              Get expert assistance in procuring birth, marriage, death, income, and caste certificates from Indian authorities. 
              Schedule a consultation with our specialists or reach out via WhatsApp for quick support.
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
                Start Your Application
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
                Contact on WhatsApp
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