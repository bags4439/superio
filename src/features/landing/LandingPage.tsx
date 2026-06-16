import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { StatsStrip } from './components/sections/StatsStrip';
import { Services } from './components/sections/Services';
import { HowItWorks } from './components/sections/HowItWorks';
import { WhyUs } from './components/sections/WhyUs';
import { Work } from './components/sections/Work';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

export function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
