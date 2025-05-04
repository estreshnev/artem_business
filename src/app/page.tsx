import Header from '@/components/Header';
import Services from '@/components/Services';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import FloatingButton from '@/components/FloatingButton';

export default function Home() {
  return (
    <main>
      <Header />
      <Services />
      <About />
      <Gallery />
      <FAQ />
      <Contact />
      <FloatingButton />
    </main>
  );
}
