import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="h-[70vh] flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">JanBandhu</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-foreground mb-4 font-semibold">
            Citizen-Powered Civic Reporting System
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the full journey from complaint to resolution with our innovative platform that empowers citizens and ensures transparency.
          </p>

          {/* Hero Demo Button */}
          <div className="relative inline-block">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-12 py-6 animate-pulse-glow"
              onClick={() => window.open("https://youtube.com", "_blank")}
            >
              <Play className="mr-3 h-6 w-6" />
              🎥 Watch Demo Video
            </Button>
          </div>

          {/* Supporting Text */}
          <p className="text-sm text-muted-foreground mt-6 italic">
            Experience the complete journey from complaint to resolution
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-float hidden lg:block"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl animate-float animation-delay-1000 hidden lg:block"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-lg animate-float animation-delay-2000 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default HeroSection;