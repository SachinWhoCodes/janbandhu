import Header from "@/components/Header";
import PlatformCards from "@/components/PlatformCards";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PlatformCards />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
