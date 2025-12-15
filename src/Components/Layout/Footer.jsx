import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer Content */}
      <div style={{ background: 'linear-gradient(180deg, #f5f1e8 0%, #e8dfc8 100%)' }}>
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 items-start">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                {/* Golden BIGB Logo */}
                <div className="w-12 h-12 flex-shrink-0">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="footerGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#DAA520', stopOpacity:1}} />
                        <stop offset="50%" style={{stopColor:'#FFD700', stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:'#B8860B', stopOpacity:1}} />
                      </linearGradient>
                    </defs>
                    
                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#footerGoldGradient)" strokeWidth="3"/>
                    <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="url(#footerGoldGradient)" strokeWidth="2"/>
                    <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="url(#footerGoldGradient)" strokeWidth="2"/>
                    <ellipse cx="50" cy="50" rx="30" ry="45" fill="none" stroke="url(#footerGoldGradient)" strokeWidth="1.5" opacity="0.7"/>
                    <ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="url(#footerGoldGradient)" strokeWidth="1.5" opacity="0.7"/>
                  </svg>
                </div>
                
                {/* Text Section */}
                <div className="flex flex-col leading-tight">
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    letterSpacing: '-2px',
                    background: 'linear-gradient(135deg, #DAA520 0%, #FFD700 50%, #B8860B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    position: 'relative',
                    lineHeight: '1'
                  }}>
                    BIGB
                    <span style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '15px',
                      width: '12px',
                      height: '2.5px',
                      background: 'linear-gradient(135deg, #DAA520 0%, #FFD700 50%, #B8860B 100%)',
                      display: 'block'
                    }}></span>
                  </div>
                  <div style={{
                    fontSize: '9px',
                    color: '#B8860B',
                    letterSpacing: '0.5px',
                    marginTop: '3px',
                    fontWeight: '500'
                  }}>
                  NRI Services
                  </div>
                </div>
              </div>
              <p className="mb-6 leading-relaxed text-sm" style={{ color: '#5c4a3a' }}>
                Your trusted partner for comprehensive NRI services. We provide expert solutions 
                in property management, legal assistance, financial consulting, and more.
              </p>
              <div className="flex gap-4">
                <SocialIcon href="#" icon="facebook" />
                <SocialIcon href="#" icon="twitter" />
                <SocialIcon href="#" icon="linkedin" />
                <SocialIcon href="#" icon="instagram" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:mx-auto">
              <h3 className="text-lg font-bold mb-6 relative inline-block" style={{ color: '#d4af37' }}>
                Quick Links
                <div className="absolute bottom-0 left-0 w-1/2 h-0.5" style={{ background: 'linear-gradient(to right, #d4af37, #ffd86b)' }}></div>
              </h3>
              <ul className="space-y-3">
                <FooterLink href="/" text="Home" />
                <FooterLink href="/about-us" text="About Us" />
                <FooterLink href="/contact-us" text="Contact Us" />
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block" style={{ color: '#d4af37' }}>
                Get In Touch
                <div className="absolute bottom-0 left-0 w-1/2 h-0.5" style={{ background: 'linear-gradient(to right, #d4af37, #ffd86b)' }}></div>
              </h3>
              <div className="space-y-4">
                <ContactItem 
                  icon="phone"
                  content="+91 9989103388"
                  href="tel:+919989103388"
                />
                <ContactItem 
                  icon="email"
                  content="connect@bigbnriservices.com"
                  href="mailto:connect@bigbnriservices.com"
                />
                <ContactItem 
                  icon="location"
                  content="Flat No. 107, Multi Naik Plaza, Abids, Hyderabad – 500001"
                  href="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative" style={{ background: 'linear-gradient(to right, #071020, #0b2740, #071020)' }}>
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }}></div>
        <div className="container mx-auto px-4 relative z-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm" style={{ color: '#bfb38a' }}>
              © {new Date().getFullYear()} BIG B NRI Services. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="transition-colors duration-300 hover:underline" style={{ color: '#bfb38a' }} onMouseEnter={(e) => e.target.style.color = '#d4af37'} onMouseLeave={(e) => e.target.style.color = '#bfb38a'}>
                Privacy Policy
              </a>
              <a href="/terms" className="transition-colors duration-300 hover:underline" style={{ color: '#bfb38a' }} onMouseEnter={(e) => e.target.style.color = '#d4af37'} onMouseLeave={(e) => e.target.style.color = '#bfb38a'}>
                Terms of Service
              </a>
              <a href="/cookies" className="transition-colors duration-300 hover:underline" style={{ color: '#bfb38a' }} onMouseEnter={(e) => e.target.style.color = '#d4af37'} onMouseLeave={(e) => e.target.style.color = '#bfb38a'}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, text }) {
  return (
    <li>
      <Link 
        to={href} 
        className="text-sm transition-colors duration-300 hover:underline inline-block transform hover:translate-x-1 transition-transform"
        style={{ color: '#6b5744' }}
        onMouseEnter={(e) => e.target.style.color = '#d4af37'}
        onMouseLeave={(e) => e.target.style.color = '#6b5744'}
      >
        {text}
      </Link>
    </li>
  )
}

function SocialIcon({ href, icon }) {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'facebook':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        )
      case 'twitter':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        )
      case 'linkedin':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      case 'instagram':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.017 0C8.396 0 7.987 0.011 6.762 0.06 2.702 0.227 0.227 2.688 0.06 6.748 0.011 7.973 0 8.382 0 11.998c0 3.615 0.011 4.025 0.06 5.25 0.167 4.06 2.642 6.525 6.702 6.692 1.225 0.049 1.634 0.06 5.25 0.06 3.614 0 4.024-0.011 5.249-0.06 4.061-0.167 6.526-2.642 6.692-6.702 0.049-1.225 0.06-1.634 0.06-5.25 0-3.616-0.011-4.025-0.06-5.25-0.166-4.061-2.641-6.526-6.702-6.692C16.041 0.011 15.631 0 12.017 0zM12.017 2.16c3.203 0 3.585 0.009 4.791 0.057 3.404 0.148 5.027 1.771 5.175 5.175 0.048 1.206 0.057 1.588 0.057 4.791 0 3.203-0.009 3.585-0.057 4.791-0.148 3.404-1.771 5.027-5.175 5.175-1.206 0.048-1.588 0.057-4.791 0.057-3.203 0-3.585-0.009-4.791-0.057-3.404-0.148-5.027-1.771-5.175-5.175-0.048-1.206-0.057-1.588-0.057-4.791 0-3.203 0.009-3.585 0.057-4.791 0.148-3.404 1.771-5.027 5.175-5.175 1.206-0.048 1.588-0.057 4.791-0.057z"/>
            <path d="M12.017 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12.017 16c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4z"/>
            <circle cx="18.406" cy="5.595" r="1.439"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <a 
      href={href}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      style={{
        background: '#c9a96e',
        color: '#2a2419'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#d4af37';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(212,175,55,0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#c9a96e';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {getIcon(icon)}
    </a>
  )
}

function ContactItem({ icon, content, href }) {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'phone':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        )
      case 'email':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        )
      case 'location':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" style={{ background: 'linear-gradient(135deg, #c9a96e 0%, #d4af37 100%)' }}>
        <div style={{ color: '#2a2419' }}>
          {getIcon(icon)}
        </div>
      </div>
      <div className="flex-1">
        <a 
          href={href} 
          className="text-sm transition-colors duration-300 leading-relaxed block"
          style={{ color: '#6b5744' }}
          onMouseEnter={(e) => e.target.style.color = '#d4af37'}
          onMouseLeave={(e) => e.target.style.color = '#6b5744'}
        >
          {content}
        </a>
      </div>
    </div>
  )
}