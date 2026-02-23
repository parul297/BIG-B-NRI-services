import Header from './Layout/Header.jsx'
import Footer from './Layout/Footer.jsx'
import Hero from './Home/Hero.jsx'
import Features from './Home/Features.jsx'
import Stats from './Home/Stats.jsx'
import Testimonials from './Home/Testimonials.jsx'
import { useState } from 'react';

export default function HomePage() {
	const [servicesOpen, setServicesOpen] = useState(false);

	return (
		<>
			<Header servicesOpen={servicesOpen} setServicesOpen={setServicesOpen} />
			{/* Hero is full-bleed, render before the constrained main container */}
			<Hero onOpenServices={() => setServicesOpen(true)} />
			<main className="container mx-auto px-4">
				<Features />
			</main>
			<Stats />
			
			<Testimonials />
			<Footer />
		</>
	)
}
