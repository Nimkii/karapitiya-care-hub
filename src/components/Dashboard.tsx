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
  LogOut
} from "lucide-react";
import { Input } from "@/components/ui/input";
import hospitalLogo from "@/assets/hospital-logo.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card shadow-card border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={hospitalLogo} alt="Karapitiya Hospital" className="w-10 h-10" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Karapitiya Hospital</h1>
                <p className="text-sm text-muted-foreground">Patient Record Management System</p>
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
              <Button variant="outline-medical" size="sm">
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
            Welcome back, Dr. Perera
          </h2>
          <p className="text-muted-foreground">
            Here's what's happening at the hospital today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Patients
              </CardTitle>
              <Users className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2,847</div>
              <p className="text-xs text-accent flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12% from last month
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
              <div className="text-2xl font-bold text-foreground">143</div>
              <p className="text-xs text-muted-foreground mt-1">
                23 pending, 120 completed
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Records
              </CardTitle>
              <FileText className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1,234</div>
              <p className="text-xs text-muted-foreground mt-1">
                Updated this week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Critical Alerts
              </CardTitle>
              <Activity className="w-4 h-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
              <p className="text-xs text-destructive mt-1">
                Requires immediate attention
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
                <CardDescription>Common tasks and operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline-medical" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Patient
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Create Medical Record
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  View Lab Results
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <UserCheck className="w-4 h-4 mr-2" />
                  Patient Check-in
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Patients & Today's Schedule */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Patients */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Patients</CardTitle>
                <CardDescription>Latest patient records accessed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Amal Silva", id: "P-2024-001", time: "2 minutes ago", status: "Active" },
                    { name: "Kamala Perera", id: "P-2024-002", time: "15 minutes ago", status: "Discharged" },
                    { name: "Nimal Fernando", id: "P-2024-003", time: "1 hour ago", status: "In Treatment" },
                    { name: "Sita Jayawardena", id: "P-2024-004", time: "2 hours ago", status: "Active" },
                  ].map((patient, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">{patient.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{patient.time}</p>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          patient.status === 'Active' ? 'bg-accent/20 text-accent' :
                          patient.status === 'Discharged' ? 'bg-muted text-muted-foreground' :
                          'bg-primary/20 text-primary'
                        }`}>
                          {patient.status}
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
                <CardDescription>Upcoming appointments and tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: "09:00 AM", task: "Ward Round - ICU", type: "appointment" },
                    { time: "10:30 AM", task: "Surgery - Appendectomy", type: "surgery" },
                    { time: "02:00 PM", task: "Patient Consultation", type: "consultation" },
                    { time: "04:00 PM", task: "Lab Results Review", type: "review" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-md bg-muted/30">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.task}</p>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        item.type === 'surgery' ? 'bg-destructive/20 text-destructive' :
                        item.type === 'consultation' ? 'bg-accent/20 text-accent' :
                        'bg-primary/20 text-primary'
                      }`}>
                        {item.type}
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

export default Dashboard;