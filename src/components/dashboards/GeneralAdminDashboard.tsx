import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  FileText, 
  Building, 
  TrendingUp,
  UserCheck,
  Clipboard,
  PieChart,
  Bell,
  Search,
  LogOut,
  Plus,
  Clock,
  DollarSign,
  Bed,
  Activity
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import hospitalLogo from "@/assets/hospital-logo.png";

const GeneralAdminDashboard = () => {
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
                <h1 className="text-xl font-bold text-foreground">General Administration</h1>
                <p className="text-sm text-muted-foreground">Hospital Operations & Management</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search staff, departments..." 
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
            Manage hospital operations, staff, and administrative functions.
          </p>
        </div>

        {/* Administrative Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Staff
              </CardTitle>
              <Users className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">487</div>
              <p className="text-xs text-accent flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Bed Occupancy
              </CardTitle>
              <Bed className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">85%</div>
              <p className="text-xs text-muted-foreground mt-1">
                340 of 400 beds occupied
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Monthly Revenue
              </CardTitle>
              <DollarSign className="w-4 h-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">₹45.2L</div>
              <p className="text-xs text-accent flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending Tasks
              </CardTitle>
              <Clipboard className="w-4 h-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <p className="text-xs text-destructive mt-1">
                Requires approval
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Administrative Actions */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline-medical" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Staff Management
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <Building className="w-4 h-4 mr-2" />
                  Department Overview
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Shift Scheduling
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Reports & Analytics
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <PieChart className="w-4 h-4 mr-2" />
                  Budget Management
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Department Status & Recent Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Department Status */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">Department Status</CardTitle>
                <CardDescription>Real-time department operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Emergency", staff: "24/24", occupancy: "95%", status: "Critical", color: "text-destructive" },
                    { name: "ICU", staff: "18/20", occupancy: "88%", status: "High", color: "text-yellow-500" },
                    { name: "General Ward", staff: "45/50", occupancy: "75%", status: "Normal", color: "text-accent" },
                    { name: "Surgery", staff: "12/15", occupancy: "60%", status: "Normal", color: "text-accent" },
                  ].map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Building className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{dept.name}</p>
                          <p className="text-sm text-muted-foreground">Staff: {dept.staff} | Occupancy: {dept.occupancy}</p>
                        </div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        dept.status === 'Critical' ? 'bg-destructive/20 text-destructive' :
                        dept.status === 'High' ? 'bg-yellow-500/20 text-yellow-500' :
                        'bg-accent/20 text-accent'
                      }`}>
                        {dept.status}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Administrative Actions */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Actions</CardTitle>
                <CardDescription>Latest administrative activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: "10:30 AM", action: "Staff schedule updated for ICU", type: "schedule", icon: Calendar },
                    { time: "09:45 AM", action: "New nurse onboarded - Sarah Silva", type: "staff", icon: UserCheck },
                    { time: "09:15 AM", action: "Monthly budget report generated", type: "finance", icon: DollarSign },
                    { time: "08:30 AM", action: "Equipment maintenance scheduled", type: "maintenance", icon: Activity },
                  ].map((action, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-md bg-muted/30">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                        <action.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{action.action}</p>
                        <p className="text-sm text-muted-foreground">{action.time}</p>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        action.type === 'finance' ? 'bg-accent/20 text-accent' :
                        action.type === 'staff' ? 'bg-primary/20 text-primary' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {action.type}
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

export default GeneralAdminDashboard;