export default function Stats() {
  return (
    <section style={{ background: 'linear-gradient(180deg,#081826 0%, #0a1f2e 100%)' }} className="py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #d4af37 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 style={{ color: '#d4af37' }} className="text-3xl font-bold mb-2 text-center gold-shine-text">Why Choose BIG B</h2>
        <p style={{ color: '#bfa46f' }} className="mb-12 text-center text-lg">Our track record speaks for itself</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StatCard
            title="1000+"
            subtitle="Happy Clients"
            description="Trusted by NRIs across the globe for our reliable services."
            icon="clients"
          />
          <StatCard
            title="500+"
            subtitle="Projects Completed"
            description="Successfully delivered projects in property, legal, and financial sectors."
            icon="projects"
          />
          <StatCard
            title="15+"
            subtitle="Years of Experience"
            description="Decades of expertise in NRI services and solutions."
            icon="experience"
          />
          <StatCard
            title="24/7"
            subtitle="Customer Support"
            description="Always available to assist with your queries and concerns."
            icon="support"
          />
        </div>
      </div>

      <style jsx>{`
        .gold-shine-text {
          background: linear-gradient(90deg, #b08a2f 20%, #ffd86b 50%, #b08a2f 80%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: gold-shimmer 3.5s linear infinite;
        }
        
        @keyframes gold-shimmer {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        
        .stat-glow {
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
        }
        
        .stat-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.8s;
        }
        
        .stat-card:hover .stat-shine::before {
          left: 100%;
        }
      `}</style>
    </section>
  )
}

function StatCard({ title, subtitle, description, icon }) {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'clients':
        return (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'projects':
        return (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17V7M9 17C9 18.1046 8.10457 19 7 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H7C8.10457 5 9 5.89543 9 7M9 17C9 18.1046 9.89543 19 11 19H13C14.1046 19 15 18.1046 15 17M9 7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7M15 17V7M15 17C15 18.1046 15.8954 19 17 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H17C15.8954 5 15 5.89543 15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'experience':
        return (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'support':
        return (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.3639M14.828 9.17157C16.3905 10.7341 16.3905 13.2659 14.828 14.8284M11 19.9442C6.03356 19.478 2 15.2671 2 10.0001C2 4.73314 6.03356 0.522188 11 0.0560303M11 19.9442C13.0696 19.7219 15.0005 18.9334 16.618 17.681M11 19.9442V23.0001M21 12.0001C21 13.6569 19.6569 15.0001 18 15.0001C16.3431 15.0001 15 13.6569 15 12.0001C15 10.3432 16.3431 9.00006 18 9.00006C19.6569 9.00006 21 10.3432 21 12.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      default:
        return (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
    }
  }

  return (
    <div className="stat-card group rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 relative">
      {/* Main Card with Gradient Background */}
      <div className="relative h-full bg-gradient-to-br from-amber-50 via-white to-amber-50 border border-amber-200 rounded-2xl overflow-hidden stat-shine">
        {/* Golden Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
          <div className="w-full h-full bg-white rounded-xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full relative z-10">
          {/* Icon Section with Golden Gradient */}
          <div className="h-48 md:h-full overflow-hidden relative bg-gradient-to-br from-[#b8924a] via-[#d4af37] to-[#c9a45c] group-hover:from-[#d4af37] group-hover:via-[#e6c56a] group-hover:to-[#d4af37] transition-all duration-500">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Icon Container */}
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="text-white/90 group-hover:text-white transition-colors duration-300">
                {getIcon(icon)}
              </div>
              
              {/* Floating Particles */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col justify-center bg-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-3">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            <div className="relative z-10">
              {/* Animated Number */}
              <div className="text-5xl font-bold mb-2 gold-number group-hover:scale-110 transition-transform duration-300">
                {title}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
                {subtitle}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {description}
              </p>

              {/* Animated Indicator */}
              <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full animate-pulse"></div>
                  <span className="text-amber-600 text-xs font-semibold tracking-wide">EXPLORE MORE</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-600 transform group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gold-number {
          background: linear-gradient(135deg, #b08a2f 0%, #d4af37 25%, #f4d03f 50%, #d4af37 75%, #b08a2f 100%);
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
            filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.6));
          }
        }
        
        .stat-card {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        
        .stat-card:hover {
          box-shadow: 0 20px 50px rgba(212, 175, 55, 0.25), 0 10px 30px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  )
}