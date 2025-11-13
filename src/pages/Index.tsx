import Snowfall from '@/components/Snowfall';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Snowfall />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
