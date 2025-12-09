import Header from './Layout/Header.jsx'
import Footer from './Layout/Footer.jsx'
import Hero from './Home/Hero.jsx'
import Features from './Home/Features.jsx'
import Stats from './Home/Stats.jsx'
import Testimonials from './Home/Testimonials.jsx'

export default function HomePage() {
	return (
		<>
			<Header />
			{/* Hero is full-bleed, render before the constrained main container */}
			<Hero />
			<main className="container mx-auto px-4">
				<Features />
			</main>
			<Stats />
			<Testimonials />
			<Footer />
		</>
	)
}
