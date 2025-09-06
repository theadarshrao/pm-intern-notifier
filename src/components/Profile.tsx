import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  Target, 
  Star,
  Plus,
  X
} from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [skills, setSkills] = useState([
    "Product Strategy", "Data Analysis", "User Research", "Agile Methodology", 
    "A/B Testing", "Market Research", "Competitive Analysis"
  ]);
  
  const [newSkill, setNewSkill] = useState("");
  const [preferences, setPreferences] = useState({
    locations: ["San Francisco, CA", "Seattle, WA", "New York, NY"],
    companySize: ["Startup", "Mid-size", "Enterprise"],
    industries: ["Technology", "E-commerce", "SaaS"]
  });

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Candidate Profile</h1>
          <p className="text-muted-foreground">Customize your profile to get better AI-powered recommendations</p>
        </div>

        {/* Profile Overview */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Sarah" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Johnson" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="sarah.johnson@university.edu" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="university">University</Label>
                <Input id="university" defaultValue="Stanford University" />
              </div>
              <div>
                <Label htmlFor="degree">Degree</Label>
                <Input id="degree" defaultValue="Computer Science" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gpa">GPA</Label>
                <Input id="gpa" defaultValue="3.8" />
              </div>
              <div>
                <Label htmlFor="graduation">Expected Graduation</Label>
                <Input id="graduation" defaultValue="May 2025" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Skills & Competencies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1 py-1 px-3">
                  {skill}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSkill(skill)}
                    className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input
                placeholder="Add a new skill..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
              <Button onClick={addSkill} variant="outline" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Experience & Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="experience">Previous Experience</Label>
              <Textarea 
                id="experience" 
                placeholder="Describe your relevant work experience, internships, or significant projects..."
                className="min-h-[100px]"
                defaultValue="Product Management Intern at TechCorp (Summer 2024) - Led user research initiative for mobile app, resulting in 25% increase in user engagement. Collaborated with engineering and design teams to ship 3 major features."
              />
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Job Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-base font-medium mb-3 block">Preferred Locations</Label>
              <div className="flex flex-wrap gap-2">
                {preferences.locations.map((location, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {location}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <Label className="text-base font-medium mb-3 block">Company Size</Label>
              <div className="flex flex-wrap gap-2">
                {preferences.companySize.map((size, index) => (
                  <Badge key={index} variant="outline">
                    {size}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <Label className="text-base font-medium mb-3 block">Industries of Interest</Label>
              <div className="flex flex-wrap gap-2">
                {preferences.industries.map((industry, index) => (
                  <Badge key={index} variant="outline">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-center">
          <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all duration-300">
            <Star className="w-5 h-5 mr-2" />
            Update Profile & Refresh Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;