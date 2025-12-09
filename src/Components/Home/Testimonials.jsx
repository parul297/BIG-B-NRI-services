export default function Testimonials() {
  return (
    <section style={{ background: '#ffffff' }} className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 style={{ color: '#071020' }} className="text-3xl font-bold mb-2 text-center">What Our Clients Say</h2>
        <p style={{ color: '#3a3a3a' }} className="mb-12 text-center text-lg">Real feedback from satisfied NRI clients</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Rajesh Kumar"
            role="NRI, USA"
            testimonial="BIG B helped me manage my property in India seamlessly. Their professional approach and timely updates made the entire process hassle-free."
            rating={5}
          />
          <TestimonialCard
            name="Priya Sharma"
            role="NRI, UK"
            testimonial="Exceptional service! They handled my legal documentation and financial planning with utmost care. Highly recommended for all NRIs."
            rating={5}
          />
          <TestimonialCard
            name="Vikram Patel"
            role="NRI, Canada"
            testimonial="Outstanding support team available 24/7. They made my business consulting process smooth and efficient. Great work!"
            rating={5}
          />
          <TestimonialCard
            name="Anjali Desai"
            role="NRI, Australia"
            testimonial="Their renovation services exceeded my expectations. The team was professional, transparent, and delivered on time. Worth every penny."
            rating={5}
          />
          <TestimonialCard
            name="Suresh Reddy"
            role="NRI, Singapore"
            testimonial="Top-notch banking assistance and investment guidance. They understand the unique needs of NRIs and provide tailored solutions."
            rating={5}
          />
          <TestimonialCard
            name="Neha Gupta"
            role="NRI, UAE"
            testimonial="Best decision ever! Their comprehensive services made managing my family affairs from abroad incredibly convenient."
            rating={5}
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, role, testimonial, rating }) {
  return (
    <div className="testimonial-card group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6" style={{ background: '#ffffff', border: '1px solid #e6e6e6' }}>
      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#d4af37" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26H22L17.09 13.16L19.17 19.42L12 14.53L4.83 19.42L6.91 13.16L2 8.26H8.91L12 2Z"/>
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p style={{ color: '#3a3a3a' }} className="mb-6 text-sm leading-relaxed relative">
        <span className="text-3xl text-amber-300 opacity-30 mr-2">"</span>
        {testimonial}
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f3d77d 100%)' }}>
          <div style={{ color: '#071020', fontSize: '1.25rem', fontWeight: 'bold' }}>
            {name.charAt(0)}
          </div>
        </div>

        {/* Name and Role */}
        <div>
          <h4 style={{ color: '#071020' }} className="font-bold text-sm">{name}</h4>
          <p style={{ color: '#bfa46f' }} className="text-xs">{role}</p>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-transparent to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
    </div>
  )
}
