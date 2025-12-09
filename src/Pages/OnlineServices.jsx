import { Link } from 'react-router-dom'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'

export default function OnlineServices() {
  const services = [
    {
      title: 'Visa Application Assistance',
      description: 'Professional guidance for visa applications and document processing for various countries. We handle everything from document collection to interview preparation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Document Preparation', 'Application Submission', 'Interview Coaching', 'Status Tracking']
    },
    {
      title: 'Passport Services',
      description: 'Complete assistance with passport applications, renewals, and related documentation for you and your family members.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['New Application', 'Renewal Processing', 'Tatkal Service', 'Document Verification']
    },
    {
      title: 'Government Document Processing',
      description: 'Streamlined processing of various government documents including PAN cards, Aadhaar updates, and other essential certificates.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['PAN Card Services', 'Aadhaar Updates', 'Document Verification', 'Fast Processing']
    },
    {
      title: 'Digital Verification Services',
      description: 'Secure digital verification and attestation of documents for various official purposes.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Digital Signatures', 'Document Attestation', 'Online Verification', 'Secure Processing']
    },
    {
      title: 'Online Legal Consultations',
      description: 'Virtual legal consultations with expert lawyers specializing in NRI-related legal matters.',
      image: 'https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Virtual Meetings', 'Legal Documentation', 'Expert Advice', 'Confidential Service']
    },
    {
      title: 'Financial Document Processing',
      description: 'Assistance with financial documents including tax filings, investment documentation, and banking paperwork.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Tax Filing', 'Investment Docs', 'Banking Forms', 'Financial Planning']
    }
  ]

  const stats = [
    { value: '2000+', label: 'Applications Processed' },
    { value: '99%', label: 'Success Rate' },
    { value: '48h', label: 'Average Processing' },
    { value: 'Global', label: 'Service Coverage' }
  ]

  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, rgba(247, 230, 181, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)'}}>
      <Header/>
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white" style={{background: 'linear-gradient(135deg, #071020 0%, #123a57 100%)'}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-4">
              {/* <Link to="/" className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to home
              </Link> */}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Online Services
              <div className="w-24 h-1 mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #d4af37 0%, #ffd86b 100%)'}}></div>
            </h1>
            <p className="text-xl leading-relaxed" style={{color: '#bfa46f'}}>
              Digital solutions for all your document processing needs. From visa applications to legal consultations, 
              we provide comprehensive online services for NRIs worldwide.
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
            Our Online Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{color: '#5a4a1a'}}>
            Comprehensive digital solutions designed for NRIs to handle documentation and legal processes remotely.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className={`rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 230, 181, 0.1) 100%)',
                   border: '1px solid rgba(212, 175, 55, 0.3)',
                   boxShadow: '0 20px 40px rgba(11, 39, 64, 0.1)'
                 }}>
              <div className="md:flex items-stretch">
                {/* Image Placeholder */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(185, 143, 43, 0.1) 100%)'}}></div>
                  <div className="h-64 md:h-full flex items-center justify-center" 
                       style={{background: 'linear-gradient(135deg, #071020 0%, #123a57 100%)'}}>
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                           style={{background: 'rgba(255, 255, 255, 0.1)'}}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
                        </svg>
                      </div>
                      <p className="text-white font-semibold text-lg">Service Image</p>
                      <p className="mt-2 text-sm" style={{color: '#e6c56a'}}>Replace with service photo</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold"
                       style={{background: 'rgba(255, 255, 255, 0.9)', color: '#b08a2f'}}>
                    Service {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                         style={{background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)'}}>
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold" style={{color: '#071020'}}>{service.title}</h3>
                  </div>
                  
                  <p className="mb-6 leading-relaxed" style={{color: '#5a4a1a'}}>{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{color: '#071020'}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2" style={{color: '#5a4a1a'}}>
                          <div className="w-2 h-2 rounded-full" style={{background: '#d4af37'}}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                          style={{
                            background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)',
                            boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)'
                          }}>
                    Learn More
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
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
              Ready to Simplify Your Document Processing?
            </h2>
            <p className="text-lg mb-8" style={{color: '#fff7e6'}}>
              Get expert online services tailored for NRIs. Schedule a virtual consultation with our specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 font-bold rounded-xl transition-colors duration-300 shadow-2xl transform hover:scale-105"
                      style={{
                        background: 'white',
                        color: '#b08a2f',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                      }}>
                Book Virtual Consultation
              </button>
              <button className="px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                      style={{
                        background: 'transparent',
                        border: '2px solid white',
                        color: 'white'
                      }}>
                WhatsApp: +1 (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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