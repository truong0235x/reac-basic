import HeroSection from './HeroSection';
import CompaniesSection from './CompaniesSection';
import BrandingSection from './BrandingSection';
import CustomeSection from './CustomeSection';
import TestimonialSection from './TestimonialSection';
import ContacSection from './ContacSection';
import './index.css'

function Home() {
  return (
    <div className="content">
      <HeroSection />
      <CompaniesSection />
      <BrandingSection />
      <CustomeSection />
      <TestimonialSection />
      <ContacSection />
    </div>
  )
}

export default Home;