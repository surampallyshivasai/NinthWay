import { Navbar } from "@/components/Navbar"
import { Careers } from "@/components/Careers"
import { Footer } from "@/components/Footer"
import { SEO } from "@/components/SEO"

const CareersPage = () => {
  return (
    <>
      <SEO 
        title="Careers - NinthWay Branders | Join Our Team"
        description="Join NinthWay Branders and help us create exceptional brands. Explore exciting career opportunities in design, development, marketing, and more."
        keywords="careers, jobs, hiring, design jobs, developer jobs, marketing jobs, remote work"
        url="https://ninthway.netlify.app/careers"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <Careers />
        <Footer />
      </div>
    </>
  );
};

export default CareersPage;
