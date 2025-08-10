import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Lock, User, Stethoscope } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import hospitalLogo from "@/assets/hospital-logo.png";
import medicalHero from "@/assets/medical-hero.jpg";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      if (username && password) {
        toast({
          title: "Login Successful",
          description: "Welcome to Karapitiya Hospital Management System",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter valid credentials",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-medical opacity-90 z-10" />
        <img 
          src={medicalHero} 
          alt="Medical professionals at work" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-primary-foreground p-12">
          <Stethoscope className="w-16 h-16 mb-6" />
          <h1 className="text-4xl font-bold text-center mb-4">
            Advanced Patient Care
          </h1>
          <p className="text-xl text-center opacity-90 max-w-md">
            Streamlining healthcare management for better patient outcomes and efficient hospital operations.
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-subtle p-8">
        <div className="w-full max-w-md">
          {/* Hospital Branding */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <img 
                src={hospitalLogo} 
                alt="Karapitiya Hospital" 
                className="w-16 h-16 mr-4"
              />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-foreground">Karapitiya Hospital</h2>
                <p className="text-muted-foreground">Patient Record Management</p>
              </div>
            </div>
          </div>

          {/* Login Card */}
          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-2">
                <Lock className="w-6 h-6" />
                Secure Login
              </CardTitle>
              <CardDescription>
                Access your medical records and hospital services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-foreground font-medium">
                    Username or Employee ID
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="pl-10 h-11"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 h-11"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="medical"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Signing in...
                    </div>
                  ) : (
                    <>
                      <Heart className="w-4 h-4" />
                      Sign In to PRMS
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Forgot your password?
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Karapitiya Hospital. All rights reserved.</p>
            <p className="mt-1">For technical support, contact IT Department</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;