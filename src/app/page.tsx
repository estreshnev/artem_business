import Header from '@/components/Header';
import Services from '@/components/Services';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Services />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
