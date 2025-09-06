import { useState } from "react";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import LinkedInManager from "@/components/LinkedInManager";
import Profile from "@/components/Profile";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "hero":
        return <Hero />;
      case "dashboard":
        return <Dashboard />;
      case "linkedin":
        return <LinkedInManager />;
      case "profile":
        return <Profile />;
      case "settings":
        return (
          <div className="min-h-screen bg-background flex items-center justify-center p-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Settings</h1>
              <p className="text-muted-foreground">Notification preferences and account settings coming soon!</p>
            </div>
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      {renderActiveSection()}
    </div>
  );
};

export default Index;
