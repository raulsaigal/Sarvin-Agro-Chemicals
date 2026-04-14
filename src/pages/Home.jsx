import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import AboutTeaser from '../components/home/AboutTeaser';
import Services from '../components/home/Services';
import StatsCounter from '../components/home/StatsCounter';
import ProjectsGallery from '../components/home/ProjectsGallery';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CommitmentSplit from '../components/home/CommitmentSplit';
import NewsletterBar from '../components/home/NewsletterBar';
import TeamSection from '../components/home/TeamSection';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <>
      <SEO />
      <div className="w-full">
        <Hero />
        <AboutTeaser />
        <Services />
        <StatsCounter />
        <ProjectsGallery />
        <WhyChooseUs />
        <CommitmentSplit />
        <NewsletterBar />
        <TeamSection />
        <Testimonials />
      </div>
    </>
  );
}
