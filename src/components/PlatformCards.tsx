import { ExternalLink, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Import the generated icons
import citizenAppIcon from "@/assets/citizen-app-icon.png";
import resolverAppIcon from "@/assets/resolver-app-icon.png";
import dashboardIcon from "@/assets/dashboard-icon.png";
import pressPanelIcon from "@/assets/press-panel-icon.png";
import demoVideoIcon from "@/assets/demo-video-icon.png";

const PlatformCards = () => {
  const platforms = [
    {
      title: "Janbandhu APIs",
      description: "Complete walkthrough of the JanBandhu APIs",
      icon: demoVideoIcon,
      buttons: [
        { label: "Watch", link:"https://janbandhu-api.vercel.app", icon: Play, variant: "default" as const }
      ],
      featured: true
    },
    {
      title: "💻 Authority Dashboard",
      description: "Monitor and track all civic issues across regions",
      icon: dashboardIcon,
      buttons: [
        { label: "Launch", link:"https://janbandhu-authority-portal.vercel.app/", icon: ExternalLink, variant: "default" as const }
      ],
      featured: false
    },
    {
      title: "📱 Citizen App",
      description: "Report civic issues with voice support and real-time tracking",
      icon: citizenAppIcon,
      buttons: [
        { label: "Preview", link:"youtube.com", icon: ExternalLink, variant: "default" as const }
      ],
      featured: false
    },
    {
      title: "📱 Resolver App", 
      description: "Manage and resolve civic issues with geo-tagged proof",
      icon: resolverAppIcon,
      buttons: [
        { label: "Preview", link:"youtube.com", icon: ExternalLink, variant: "default" as const }
      ],
      featured: false
    },
    {
      title: "🌍 Public Transparency Panel",
      description: "Public dashboard for transparent civic issue tracking",
      icon: pressPanelIcon,
      buttons: [
        { label: "Launch", link:"youtube.com", icon: ExternalLink, variant: "default" as const }
      ],
      featured: false
    }
  ];

  const handleButtonClick = (label: string, link: string) => {
    // Dummy links for now
    window.open(link);
  };

  return (
    <main id="apps" className="py-8 px-4 min-h-[80vh] flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {platforms.map((platform, index) => (
            <Card 
              key={index} 
              className={`platform-card group relative overflow-hidden h-fit ${
                platform.featured ? 'ring-2 ring-secondary col-span-1 md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardHeader className="text-center pb-3">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-3">
                  <img 
                    src={platform.icon} 
                    alt={platform.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-lg font-bold mb-2 leading-tight">
                  {platform.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-snug">
                  {platform.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 pb-6">
                <div className="flex flex-col gap-2">
                  {platform.buttons.map((button, buttonIndex) => (
                    <Button
                      key={buttonIndex}
                      variant={button.variant}
                      size="sm"
                      className={`w-full ${platform.featured ? 'btn-demo' : ''} group-hover:scale-105 transition-transform`}
                      onClick={() => handleButtonClick(button.label, button.link)}
                    >
                      <button.icon className="mr-2 h-4 w-4" />
                      {button.label}
                    </Button>
                  ))}
                </div>
              </CardContent>

              {platform.featured && (
                <div className="absolute top-3 right-3">
                  <div className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PlatformCards;