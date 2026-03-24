import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SuccessCasesSection from "@/components/sections/SuccessCasesSection";
import LeadFormSection from "@/components/sections/LeadFormSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="noise-overlay"></div>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <ProblemSection />
        <ShowcaseSection />
        <ProcessSection />
        <SuccessCasesSection />
        <LeadFormSection />
      </main>
      <Footer />
      {/* Floating WhatsApp Action */}
      <a className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[100] border-4 border-background/50" href="#">
        <span className="material-symbols-outlined [font-variation-settings:'FILL'_1]">chat</span>
      </a>
    </>
  );
}
