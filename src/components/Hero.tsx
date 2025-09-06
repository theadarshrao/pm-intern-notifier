import { Button } from "@/components/ui/button";
import { Brain, Target, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary/10 rounded-full">
            <Brain className="w-12 h-12 text-primary animate-pulse-soft" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          AI-Powered PM Internship Engine
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover perfect Product Manager internship opportunities with our intelligent matching system. 
          Get personalized recommendations based on your skills, preferences, and career goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all duration-300">
            <Target className="w-5 h-5 mr-2" />
            Find My Perfect Match
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
            <Zap className="w-5 h-5 mr-2" />
            Learn How It Works
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Matching</h3>
            <p className="text-muted-foreground text-sm">
              AI analyzes your profile and matches you with the most relevant PM internship opportunities
            </p>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-time Notifications</h3>
            <p className="text-muted-foreground text-sm">
              Get instant alerts when new internships match your criteria and preferences
            </p>
          </div>
          
          <div className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-6 h-6 text-warning" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Recommendations</h3>
            <p className="text-muted-foreground text-sm">
              Receive curated internship suggestions tailored to your skills and career aspirations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;