import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Bell, User, Settings, Home, Linkedin } from "lucide-react";
import { useState } from "react";

const Navigation = ({ activeSection, onSectionChange }: { 
  activeSection: string; 
  onSectionChange: (section: string) => void;
}) => {
  const [notificationCount] = useState(3);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: Brain },
    { id: 'linkedin', label: 'LinkedIn Profiles', icon: Linkedin },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">PM InternAI</h1>
              <p className="text-xs text-muted-foreground">Recommendation Engine</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onSectionChange(item.id)}
                className={`transition-all duration-200 ${
                  activeSection === item.id 
                    ? "bg-gradient-primary shadow-md" 
                    : "hover:bg-muted"
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Notifications */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center animate-pulse-soft"
                >
                  {notificationCount}
                </Badge>
              )}
            </Button>
            
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;