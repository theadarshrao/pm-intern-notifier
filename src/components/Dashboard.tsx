import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bell, BellRing, Building2, Clock, MapPin, Star, TrendingUp, Users, Linkedin, Brain } from "lucide-react";
import { useState, useEffect } from "react";

interface Internship {
  id: string;
  company: string;
  position: string;
  location: string;
  matchPercentage: number;
  requirements: string[];
  description: string;
  duration: string;
  isNew: boolean;
  logo: string;
}

const mockInternships: Internship[] = [
  {
    id: "1",
    company: "Google",
    position: "Product Manager Intern",
    location: "Mountain View, CA",
    matchPercentage: 95,
    requirements: ["Product Strategy", "Data Analysis", "User Research"],
    description: "Join Google's Product team to work on consumer-facing products used by billions of users worldwide. Perfect match based on Sarah's LinkedIn profile analysis.",
    duration: "12 weeks",
    isNew: true,
    logo: "🏢"
  },
  {
    id: "2", 
    company: "Microsoft",
    position: "PM Intern - Azure Products",
    location: "Seattle, WA",
    matchPercentage: 87,
    requirements: ["Cloud Technologies", "Product Management", "Technical Writing"],
    description: "Work with the Azure team to develop and improve cloud infrastructure products for enterprise clients.",
    duration: "10 weeks",
    isNew: true,
    logo: "🏢"
  },
  {
    id: "3",
    company: "Airbnb",
    position: "Product Management Intern",
    location: "San Francisco, CA", 
    matchPercentage: 82,
    requirements: ["Design Thinking", "Market Research", "Analytics"],
    description: "Help shape the future of travel by working on innovative features for our platform.",
    duration: "14 weeks",
    isNew: false,
    logo: "🏢"
  }
];

const Dashboard = () => {
  const [linkedInProfiles, setLinkedInProfiles] = useState([]);
  const [notifications] = useState([
    { id: 1, message: "AI analyzed Sarah's LinkedIn: 95% match with Google PM role!", isNew: true },
    { id: 2, message: "New PM internship at Microsoft matches Alex's profile", isNew: true },
    { id: 3, message: "LinkedIn skill analysis complete - 3 new recommendations", isNew: false }
  ]);

  useEffect(() => {
    // Load LinkedIn profiles for analysis
    const savedProfiles = localStorage.getItem('linkedinProfiles');
    if (savedProfiles) {
      setLinkedInProfiles(JSON.parse(savedProfiles));
    }
  }, []);

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return "bg-accent text-accent-foreground";
    if (percentage >= 75) return "bg-primary text-primary-foreground";
    return "bg-warning text-warning-foreground";
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your PM Internship Dashboard</h1>
            <p className="text-muted-foreground">Discover perfect Product Manager internship opportunities tailored for you</p>
          </div>
          
          {/* Notifications */}
          <Card className="w-80">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BellRing className="w-5 h-5 text-primary" />
                Recent Notifications
                <Badge variant="secondary" className="ml-auto">
                  {notifications.filter(n => n.isNew).length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.slice(0, 3).map((notification) => (
                <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${notification.isNew ? 'bg-primary animate-pulse-soft' : 'bg-muted-foreground'}`} />
                  <p className="text-sm leading-relaxed">{notification.message}</p>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full mt-3">
                <Bell className="w-4 h-4 mr-2" />
                View All Notifications
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">87%</p>
                  <p className="text-sm text-muted-foreground">Avg Match Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">23</p>
                  <p className="text-sm text-muted-foreground">New Matches</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Users className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-sm text-muted-foreground">Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Interviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* LinkedIn Analysis Summary */}
        {linkedInProfiles.length > 0 && (
          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-primary" />
                LinkedIn Profile Analysis Summary
                <Badge variant="secondary" className="ml-auto">
                  {linkedInProfiles.length} Profile{linkedInProfiles.length !== 1 ? 's' : ''}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {linkedInProfiles.slice(0, 3).map((profile: any, index: number) => (
                  <div key={profile.id || index} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Linkedin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{profile.name}</p>
                        <p className="text-xs text-muted-foreground">{profile.headline?.slice(0, 30)}...</p>
                      </div>
                    </div>
                    {profile.aiAnalysis && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">AI Match Score</span>
                          <Badge className={getMatchColor(profile.aiAnalysis.suitabilityScore)}>
                            {profile.aiAnalysis.suitabilityScore}%
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          <Brain className="w-3 h-3 text-primary" />
                          <span className="text-xs text-muted-foreground">
                            {profile.aiAnalysis.matchedInternships?.length || 0} matches found
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Linkedin className="w-4 h-4 mr-2" />
                View All LinkedIn Profiles
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Recommended Internships */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">AI-Recommended Internships</h2>
            <Button variant="outline">
              <Star className="w-4 h-4 mr-2" />
              Update Preferences
            </Button>
          </div>

          <div className="grid gap-6">
            {mockInternships.map((internship) => (
              <Card key={internship.id} className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                        {internship.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{internship.position}</h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          {internship.company}
                          <MapPin className="w-4 h-4 ml-2" />
                          {internship.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {internship.isNew && (
                        <Badge variant="destructive" className="animate-pulse-soft">
                          New
                        </Badge>
                      )}
                      <Badge className={getMatchColor(internship.matchPercentage)}>
                        {internship.matchPercentage}% Match
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {internship.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Duration: {internship.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {internship.requirements.map((req, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="mb-4" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span>AI Confidence: High</span>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        Save for Later
                      </Button>
                      <Button size="sm" className="bg-gradient-primary">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;