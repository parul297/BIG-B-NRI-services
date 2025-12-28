import { useState } from 'react'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'
import ContactForm from '../Components/Home/EmailForm';
import GAD from "../assets/GADAttestation.jpeg";
import HRD from "../assets/HRDAttestation.jpeg";
import MEA from "../assets/MEAattestation.jpeg";
import apostile from "../assets/ApostilleAttestation.jpeg";
import visa from "../assets/visaEndorsment.jpeg";

export default function DocumentAttestation() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const services = [
    {
      title: 'GAD Attestation',
      image: GAD,
      description: 'GAD Attestation refers to the authentication of personal and educational documents by the General Administration Department (GAD) of the respective state government. This attestation confirms that the certificate is genuine and has been verified by authorized state officials. Required for individuals traveling abroad for employment, education, migration, or other official purposes.',
      features: ['Degree & Diploma Certificates', 'Birth & Marriage Certificates', 'Transfer & Bonafide Certificates', 'Experience Certificates', 'Personal Documents', 'All State-Level Authentication']
    },
    {
      title: 'HRD Attestation',
      image: HRD,
      description: 'HRD (Human Resource Development) Attestation is the process of authenticating educational documents by the respective State HRD Department. It is a mandatory step for individuals planning to study, work, or migrate abroad, as foreign authorities require verified and genuine educational certificates.',
      features: ['Degree Certificates', 'Diploma Certificates', 'HSC / SSLC Mark Sheets', 'Transcripts', 'Nursing, Engineering & Medical Certificates', 'State & Central Board Documents']
    },
    {
      title: 'MEA Attestation',
      image: MEA,
      description: 'MEA Attestation is the official verification of documents by the Ministry of External Affairs (MEA), Government of India. It is a mandatory step for anyone planning to work, study, migrate, or travel abroad, as it confirms the authenticity of documents after state-level verification.',
      features: ['Degree & Diploma Certificates', 'Birth & Marriage Certificates', 'PCC, Medical & Affidavits', 'Commercial Documents', 'Company Documents', 'Post State-Level Verification']
    },
    {
      title: 'Apostille Attestation',
      image: apostile,
      description: 'Apostille Attestation is the process of certifying documents for use in countries that are members of the Hague Convention of 1961. An Apostille is a unique, internationally accepted stamp issued by the Ministry of External Affairs (MEA), Government of India, requiring no further embassy attestation in Hague member countries.',
      features: ['Degree & Diploma Certificates', 'Birth & Marriage Certificates', 'PCC & Medical Documents', 'Commercial Papers', 'Business Documents', 'Hague Convention Countries']
    },
    {
      title: 'Visa Endorsements',
      image: visa,
      description: 'Visa Endorsement is the official process of stamping, approving, or updating a visa on your passport by the respective embassy, consulate, or immigration authority. It confirms your eligibility to enter, work, study, or reside in a foreign country. We handle all embassy procedures to ensure your passport is approved without delays.',
      features: ['Work Visas', 'Student Visas', 'Family/Residence Visas', 'Business Travel', 'Fast Processing', 'Safe Passport Handling']
    }
  ]

  const stats = [
    { value: '10,000+', label: 'Documents Attested' },
    { value: '99.9%', label: 'Success Rate' },
    { value: '7-10', label: 'Days Processing' },
    { value: '50+', label: 'Countries Covered' }
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
              Complete Document Attestation
              <div className="w-24 h-1 mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #d4af37 0%, #ffd86b 100%)'}}></div>
            </h1>
            <p className="text-xl leading-relaxed" style={{color: '#bfa46f'}}>
              Professional document attestation services for all your international requirements. From GAD and HRD to MEA, Apostille, and Visa Endorsements, 
              we provide fast, secure, and reliable attestation services across all Indian states.
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
            Our Attestation Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8" style={{color: '#5a4a1a'}}>
            End-to-end document attestation solutions for individuals and businesses. We provide seamless, reliable, and fast attestation services across all categories.
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
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Request Attestation Service
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
                  
                  <p className="mb-6 leading-relaxed text-base" style={{color: '#5a4a1a'}}>{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{color: '#071020'}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      Documents We Attest
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

                  {service.title === 'Visa Endorsements' && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" 
                            style={{background: 'rgba(34, 197, 94, 0.1)', color: '#059669', border: '1px solid rgba(34, 197, 94, 0.2)'}}>
                        ✓ Fast Processing
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" 
                            style={{background: 'rgba(34, 197, 94, 0.1)', color: '#059669', border: '1px solid rgba(34, 197, 94, 0.2)'}}>
                        ✓ Safe Passport Handling
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" 
                            style={{background: 'rgba(34, 197, 94, 0.1)', color: '#059669', border: '1px solid rgba(34, 197, 94, 0.2)'}}>
                        ✓ Complete Documentation Support
                      </span>
                    </div>
                  )}
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
              Need Document Attestation?
            </h2>
            <p className="text-lg mb-8" style={{color: '#fff7e6'}}>
              At BIG B NRI Services, we provide seamless, reliable, and end-to-end assistance for all types of document attestation. 
              Get your documents attested quickly and securely for international use.
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
                Start Attestation Process
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
                WhatsApp Support
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