import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  FileText, 
  Activity, 
  Bell, 
  Search,
  Plus,
  TrendingUp,
  Clock,
  UserCheck,
  Stethoscope,
  LogOut,
  Heart,
  ClipboardList,
  TestTube,
  Pill
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import hospitalLogo from "@/assets/hospital-logo.png";

const ConsultantDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card shadow-card border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={hospitalLogo} alt="Karapitiya Hospital" className="w-10 h-10" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Medical Consultation</h1>
                <p className="text-sm text-muted-foreground">Patient Care & Medical Records</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search patients, records..." 
                  className="w-80 pl-10"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="outline-medical" size="sm" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user?.name}
          </h2>
          <p className="text-muted-foreground">
            {user?.department} Department - Manage your patients and medical consultations.
          </p>
        </div>

        {/* Medical Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                My Patients
              </CardTitle>
              <Users className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">47</div>
              <p className="text-xs text-accent flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +3 new this week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Today's Appointments
              </CardTitle>
              <Calendar className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground mt-1">
                3 pending, 9 completed
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Lab Results Pending
              </CardTitle>
              <TestTube className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
              <p className="text-xs text-muted-foreground mt-1">
                Awaiting review
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Critical Cases
              </CardTitle>
              <Activity className="w-4 h-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2</div>
              <p className="text-xs text-destructive mt-1">
                Requires attention
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Medical Actions */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
                <CardDescription>Common medical tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline-medical" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  New Consultation
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Patient Records
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <TestTube className="w-4 h-4 mr-2" />
                  Lab Results
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <Pill className="w-4 h-4 mr-2" />
                  Prescriptions
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Follow-up
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Patient Information & Schedule */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Patients */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Patients</CardTitle>
                <CardDescription>Latest consultations and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Kumara Wijayasiri", id: "P-2024-156", condition: "Hypertension Follow-up", time: "30 mins ago", priority: "Normal" },
                    { name: "Malini Rathnayake", id: "P-2024-157", condition: "Chest Pain Evaluation", time: "1 hour ago", priority: "High" },
                    { name: "Sunil Bandara", id: "P-2024-158", condition: "Diabetes Management", time: "2 hours ago", priority: "Normal" },
                    { name: "Chamari Fernando", id: "P-2024-159", condition: "Cardiac Assessment", time: "3 hours ago", priority: "High" },
                  ].map((patient, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">{patient.id} • {patient.condition}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{patient.time}</p>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          patient.priority === 'High' ? 'bg-destructive/20 text-destructive' :
                          'bg-accent/20 text-accent'
                        }`}>
                          {patient.priority}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">Today's Schedule</CardTitle>
                <CardDescription>Upcoming appointments and consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: "02:00 PM", patient: "Ravi Perera", type: "Follow-up", condition: "Post-surgery check", icon: UserCheck },
                    { time: "02:30 PM", patient: "Sita Jayawardena", type: "Consultation", condition: "Heart palpitations", icon: Heart },
                    { time: "03:00 PM", patient: "Nimal Silva", type: "Review", condition: "Lab results discussion", icon: ClipboardList },
                    { time: "03:30 PM", patient: "Kamani Fernando", type: "Emergency", condition: "Chest pain", icon: Activity },
                  ].map((appointment, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-md bg-muted/30">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                        <appointment.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{appointment.patient}</p>
                        <p className="text-sm text-muted-foreground">{appointment.condition}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{appointment.time}</p>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          appointment.type === 'Emergency' ? 'bg-destructive/20 text-destructive' :
                          appointment.type === 'Consultation' ? 'bg-accent/20 text-accent' :
                          'bg-primary/20 text-primary'
                        }`}>
                          {appointment.type}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantDashboard;