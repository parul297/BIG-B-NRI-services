import { useState } from 'react'
import Footer from '../Components/Layout/Footer.jsx';
import Header from '../Components/Layout/Header.jsx';
import ContactForm from '../Components/Home/EmailForm.jsx';

export default function PropertyManagement() {
  const [showEmailForm, setShowEmailForm] = useState(false);


  const services = [
    {
      title: 'Buying / Selling Assistance',
      description: 'Complete verification and due diligence for your property transactions. We physically inspect properties, verify ownership records, geo-tag locations, and ensure all documents are reviewed by reputed lawyers. Our relationship manager stays with you throughout the entire process.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Physical Property Inspection', 'Document Verification by Lawyer', 'GPS Geo-tagging', 'Encumbrance Certificate Assistance', 'Sale Deed Drafting', 'Registration Support']
    },
    {
      title: 'Encumbrance Certificate',
      description: 'Comprehensive assistance in obtaining statutory property-related documents on behalf of non-resident property owners. We handle all administrative tasks including retrieval of Encumbrance Certificates, Khata/Patta documents from jurisdictional authorities without requiring your physical presence.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Encumbrance Certificate Retrieval', 'Khata/Patta Documents', 'Application Submission', 'Follow-up & Collection', 'Legal Compliance', 'No Physical Presence Required']
    },
    {
      title: 'Tenant Management & Vacating Inspections',
      description: 'Complete tenant management services including pre-tenancy inspection, inventory preparation, rent collection and remittance, periodic property inspections with reports, and comprehensive exit inventory checks to verify property condition upon tenancy termination.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Pre-tenancy Inspection', 'Inventory Documentation', 'Rent Collection & Remittance', 'Periodic Property Inspections', 'Exit Inventory Check', 'Tenant Coordination']
    },
    {
      title: 'Final Handover Inspection (New Construction)',
      description: 'Complete final-handover inspection for newly constructed properties. Our experts review structural work, electrical systems, plumbing, waterproofing, finishes, fixtures, and safety features. We document every observation with photos and detailed notes to ensure defect-free delivery.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Structural Work Review', 'Electrical Systems Check', 'Plumbing Inspection', 'Waterproofing Verification', 'Photo Documentation', 'Detailed Defect Reports']
    },
    {
      title: 'Property Maintenance',
      description: 'Comprehensive, end-to-end upkeep and care of your property year-round. Our services include routine inspections, preventive maintenance, deep cleaning, repair coordination, utility monitoring, and security checks. We provide transparent updates and photo reports for complete peace of mind.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Routine Inspections', 'Preventive Maintenance', 'Deep Cleaning Services', 'Repair Coordination', 'Utility Monitoring', 'Photo Reports & Updates']
    },
    {
      title: 'Rental Agreement Services',
      description: 'Professional assistance with drafting and execution of rental/lease agreements tailored to your requirements. All agreements are reviewed by qualified legal professionals and we facilitate communication between owners and tenants to ensure clarity of all contractual obligations.',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Agreement Drafting', 'Legal Professional Review', 'Customized Terms', 'Owner-Tenant Liaison', 'Legal Compliance', 'Rights & Obligations Clarity']
    }
  ]

  const stats = [
    { value: '500+', label: 'Properties Managed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
    { value: 'Global', label: 'NRI Coverage' }
  ]



  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, rgba(247, 230, 181, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)'}}>
      <Header />

         <ContactForm 
        isOpen={showEmailForm}
        onClose={() => setShowEmailForm(false)}
        showAsModal={true}
      />
  

      {/* Hero Section */}
      <div className="relative overflow-hidden text-white" style={{background: 'linear-gradient(135deg, #071020 0%, #123a57 100%)'}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Property Management Services
              <div className="w-24 h-1 mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #d4af37 0%, #ffd86b 100%)'}}></div>
            </h1>
            <p className="text-xl leading-relaxed" style={{color: '#bfa46f'}}>
              Professional property management solutions for NRIs. From buying assistance to complete maintenance, 
              we handle all aspects of your property needs in India while you focus on your life abroad.
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
            Our Property Management Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8" style={{color: '#5a4a1a'}}>
            Comprehensive property solutions designed specifically for NRIs to manage their real estate investments in India.
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
            Request Service Information
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
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                          <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                      </div>
                      <p className="text-white font-semibold text-lg">Property Service</p>
                      <p className="mt-2 text-sm" style={{color: '#e6c56a'}}>Professional Management</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold"
                       style={{background: 'rgba(255, 255, 255, 0.9)', color: '#b08a2f'}}>
                    Service {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-start gap-3 mb-4">
                    {/* <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0"
                         style={{background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)'}}>
                      {index + 1}
                    </div> */}
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
              Need Immediate Assistance?
            </h2>
            <p className="text-lg mb-8" style={{color: '#fff7e6'}}>
              Schedule a virtual consultation with our property management specialists or reach out via WhatsApp for quick support.
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
                Book Virtual Consultation
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