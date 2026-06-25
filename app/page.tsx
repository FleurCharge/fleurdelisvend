import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { TrustedVenues } from '@/components/sections/trusted-venues';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Benefits } from '@/components/sections/benefits';
import { RevenueShare } from '@/components/sections/revenue-share';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { FAQ } from '@/components/sections/faq';
import { ContactForm } from '@/components/sections/contact-form';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <TrustedVenues />
      <HowItWorks />
      <Benefits />
      <RevenueShare />
      <ProductShowcase />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
