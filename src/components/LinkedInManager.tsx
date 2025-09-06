import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  Linkedin, 
  Upload, 
  Brain, 
  User, 
  Building2, 
  GraduationCap,
  Award,
  TrendingUp,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useState, useEffect } from "react";

interface LinkedInProfile {
  id: string;
  name: string;
  headline: string;
  location: string;
  education: string[];
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  skills: string[];
  connections: number;
  profileUrl: string;
  aiAnalysis?: {
    suitabilityScore: number;
    matchedInternships: string[];
    strengthAreas: string[];
    improvementAreas: string[];
  };
}

const mockLinkedInProfiles: LinkedInProfile[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    headline: "Computer Science Student | Product Management Enthusiast | Data Analytics",
    location: "Stanford, CA",
    education: ["Stanford University - Computer Science", "Data Science Specialization"],
    experience: [
      {
        company: "TechCorp",
        position: "Product Management Intern",
        duration: "Jun 2024 - Aug 2024",
        description: "Led user research initiative for mobile app, resulting in 25% increase in user engagement"
      },
      {
        company: "StartupXYZ",
        position: "Data Analysis Intern",
        duration: "Jan 2024 - May 2024", 
        description: "Analyzed user behavior data and created dashboards for product decision making"
      }
    ],
    skills: ["Product Strategy", "Data Analysis", "User Research", "Python", "SQL", "A/B Testing"],
    connections: 847,
    profileUrl: "linkedin.com/in/sarah-johnson-pm",
    aiAnalysis: {
      suitabilityScore: 95,
      matchedInternships: ["Google PM Intern", "Microsoft Azure PM", "Meta Product Intern"],
      strengthAreas: ["Product Strategy", "Data-Driven Decision Making", "User Research"],
      improvementAreas: ["Technical Writing", "Stakeholder Management"]
    }
  },
  {
    id: "2", 
    name: "Alex Chen",
    headline: "MBA Student | Product Strategy | Business Development",
    location: "Berkeley, CA",
    education: ["UC Berkeley Haas - MBA", "UC Berkeley - Engineering"],
    experience: [
      {
        company: "Consulting Firm",
        position: "Business Analyst",
        duration: "Sep 2023 - Dec 2023",
        description: "Conducted market research and competitive analysis for tech clients"
      }
    ],
    skills: ["Business Strategy", "Market Research", "Competitive Analysis", "Excel", "PowerPoint"],
    connections: 623,
    profileUrl: "linkedin.com/in/alex-chen-mba",
    aiAnalysis: {
      suitabilityScore: 78,
      matchedInternships: ["Airbnb PM Intern", "Uber Strategy Intern", "Tesla Business Intern"],
      strengthAreas: ["Strategic Thinking", "Market Analysis", "Business Acumen"],
      improvementAreas: ["Technical Skills", "Product Development Experience"]
    }
  }
];

const LinkedInManager = () => {
  const [profiles, setProfiles] = useState<LinkedInProfile[]>([]);
  const [newProfileUrl, setNewProfileUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load profiles from localStorage or use mock data
    const savedProfiles = localStorage.getItem('linkedinProfiles');
    if (savedProfiles) {
      setProfiles(JSON.parse(savedProfiles));
    } else {
      setProfiles(mockLinkedInProfiles);
      localStorage.setItem('linkedinProfiles', JSON.stringify(mockLinkedInProfiles));
    }
  }, []);

  const addLinkedInProfile = async () => {
    if (!newProfileUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid LinkedIn profile URL",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis of LinkedIn profile
    setTimeout(() => {
      const newProfile: LinkedInProfile = {
        id: Date.now().toString(),
        name: "New Candidate",
        headline: "Extracted from LinkedIn Profile",
        location: "Location from LinkedIn",
        education: ["University extracted from profile"],
        experience: [{
          company: "Company from LinkedIn",
          position: "Position from LinkedIn", 
          duration: "Duration from LinkedIn",
          description: "Description extracted from profile"
        }],
        skills: ["Skills", "Extracted", "From", "LinkedIn"],
        connections: Math.floor(Math.random() * 1000) + 100,
        profileUrl: newProfileUrl,
        aiAnalysis: {
          suitabilityScore: Math.floor(Math.random() * 30) + 70,
          matchedInternships: ["Google PM Intern", "Microsoft PM Intern"],
          strengthAreas: ["Communication", "Leadership"],
          improvementAreas: ["Technical Skills"]
        }
      };

      const updatedProfiles = [...profiles, newProfile];
      setProfiles(updatedProfiles);
      localStorage.setItem('linkedinProfiles', JSON.stringify(updatedProfiles));
      setNewProfileUrl("");
      setIsAnalyzing(false);

      toast({
        title: "Profile Added Successfully",
        description: "LinkedIn profile has been analyzed and added to the system",
      });
    }, 3000);
  };

  const analyzeProfile = async (profileId: string) => {
    setIsAnalyzing(true);
    
    // Simulate AI re-analysis
    setTimeout(() => {
      const updatedProfiles = profiles.map(profile => {
        if (profile.id === profileId) {
          return {
            ...profile,
            aiAnalysis: {
              suitabilityScore: Math.floor(Math.random() * 30) + 70,
              matchedInternships: ["Updated Match 1", "Updated Match 2", "Updated Match 3"],
              strengthAreas: ["Updated Strength 1", "Updated Strength 2"],
              improvementAreas: ["Updated Improvement 1"]
            }
          };
        }
        return profile;
      });
      
      setProfiles(updatedProfiles);
      localStorage.setItem('linkedinProfiles', JSON.stringify(updatedProfiles));
      setIsAnalyzing(false);

      toast({
        title: "Analysis Complete",
        description: "AI has updated the profile analysis and internship recommendations",
      });
    }, 2000);
  };

  const getSuitabilityColor = (score: number) => {
    if (score >= 90) return "text-accent";
    if (score >= 75) return "text-primary";
    return "text-warning";
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <Linkedin className="w-8 h-8 text-primary" />
            LinkedIn Profile Manager
          </h1>
          <p className="text-muted-foreground">Import and analyze LinkedIn profiles for AI-powered internship matching</p>
        </div>

        {/* Add New Profile */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Import LinkedIn Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="profileUrl">LinkedIn Profile URL</Label>
                <Input
                  id="profileUrl"
                  placeholder="https://linkedin.com/in/username"
                  value={newProfileUrl}
                  onChange={(e) => setNewProfileUrl(e.target.value)}
                />
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={addLinkedInProfile}
                  disabled={isAnalyzing}
                  className="bg-gradient-primary"
                >
                  {isAnalyzing ? (
                    <>
                      <Brain className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4 mr-2" />
                      Import & Analyze
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            {isAnalyzing && (
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Brain className="w-4 h-4 animate-pulse" />
                  AI is analyzing the LinkedIn profile...
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>✓ Extracting profile information</div>
                  <div>✓ Analyzing skills and experience</div>
                  <div>⏳ Matching with internship opportunities</div>
                  <div>⏳ Generating suitability score</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Profiles List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Stored LinkedIn Profiles ({profiles.length})</h2>
          
          <div className="grid gap-6">
            {profiles.map((profile) => (
              <Card key={profile.id} className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{profile.name}</h3>
                        <p className="text-muted-foreground mb-2">{profile.headline}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {profile.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Linkedin className="w-4 h-4" />
                            {profile.connections} connections
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {profile.aiAnalysis && (
                      <div className="text-right">
                        <div className={`text-3xl font-bold ${getSuitabilityColor(profile.aiAnalysis.suitabilityScore)}`}>
                          {profile.aiAnalysis.suitabilityScore}%
                        </div>
                        <p className="text-sm text-muted-foreground">AI Suitability Score</p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Education */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        Education
                      </h4>
                      <div className="space-y-1">
                        {profile.education.map((edu, index) => (
                          <p key={index} className="text-sm text-muted-foreground">{edu}</p>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        Experience
                      </h4>
                      <div className="space-y-2">
                        {profile.experience.slice(0, 2).map((exp, index) => (
                          <div key={index} className="text-sm">
                            <p className="font-medium">{exp.position} at {exp.company}</p>
                            <p className="text-muted-foreground text-xs">{exp.duration}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* AI Analysis */}
                  {profile.aiAnalysis && (
                    <>
                      <Separator className="mb-4" />
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Brain className="w-4 h-4 text-primary" />
                          AI Analysis & Recommendations
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="text-sm font-medium mb-2 flex items-center gap-1">
                              <TrendingUp className="w-3 h-3 text-accent" />
                              Top Matches
                            </h5>
                            <div className="space-y-1">
                              {profile.aiAnalysis.matchedInternships.slice(0, 3).map((internship, index) => (
                                <p key={index} className="text-xs text-muted-foreground">{internship}</p>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-2 flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-accent" />
                              Strengths
                            </h5>
                            <div className="space-y-1">
                              {profile.aiAnalysis.strengthAreas.map((strength, index) => (
                                <p key={index} className="text-xs text-muted-foreground">{strength}</p>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-2 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3 text-warning" />
                              Improve
                            </h5>
                            <div className="space-y-1">
                              {profile.aiAnalysis.improvementAreas.map((improvement, index) => (
                                <p key={index} className="text-xs text-muted-foreground">{improvement}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        <Linkedin className="w-3 h-3 mr-1" />
                        LinkedIn Profile
                      </Badge>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => analyzeProfile(profile.id)}
                        disabled={isAnalyzing}
                        className="bg-gradient-primary"
                      >
                        <Brain className="w-4 h-4 mr-2" />
                        Re-analyze
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

export default LinkedInManager;