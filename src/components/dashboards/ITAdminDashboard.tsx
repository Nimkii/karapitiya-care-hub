import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Server, 
  Users, 
  Shield, 
  Database, 
  Settings, 
  Activity,
  AlertTriangle,
  HardDrive,
  Wifi,
  Monitor,
  UserPlus,
  Lock,
  BarChart3,
  Bell,
  Search,
  LogOut
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import hospitalLogo from "@/assets/hospital-logo.png";

const ITAdminDashboard = () => {
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
                <h1 className="text-xl font-bold text-foreground">IT Administration</h1>
                <p className="text-sm text-muted-foreground">System Management & Security</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search systems, users..." 
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
            Monitor and manage hospital IT infrastructure and security.
          </p>
        </div>

        {/* System Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Server Status
              </CardTitle>
              <Server className="w-4 h-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">98.5%</div>
              <p className="text-xs text-accent flex items-center mt-1">
                <Activity className="w-3 h-3 mr-1" />
                All systems operational
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Users
              </CardTitle>
              <Users className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">247</div>
              <p className="text-xs text-muted-foreground mt-1">
                Currently logged in
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Security Alerts
              </CardTitle>
              <Shield className="w-4 h-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-destructive mt-1">
                Requires attention
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Storage Usage
              </CardTitle>
              <Database className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">78%</div>
              <p className="text-xs text-muted-foreground mt-1">
                2.3TB of 3TB used
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* IT Management Tools */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">System Management</CardTitle>
                <CardDescription>Core IT administration tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline-medical" className="w-full justify-start">
                  <UserPlus className="w-4 h-4 mr-2" />
                  User Management
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <Server className="w-4 h-4 mr-2" />
                  Server Monitoring
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <Database className="w-4 h-4 mr-2" />
                  Database Admin
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Center
                </Button>
                <Button variant="outline-medical" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  System Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* System Health & Alerts */}
          <div className="lg:col-span-2 space-y-6">
            {/* System Health */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">System Health</CardTitle>
                <CardDescription>Real-time infrastructure monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Main Database Server", status: "Healthy", uptime: "99.8%", icon: Database, color: "text-accent" },
                    { name: "Application Server", status: "Healthy", uptime: "99.5%", icon: Server, color: "text-accent" },
                    { name: "Backup System", status: "Warning", uptime: "97.2%", icon: HardDrive, color: "text-yellow-500" },
                    { name: "Network Infrastructure", status: "Healthy", uptime: "99.9%", icon: Wifi, color: "text-accent" },
                  ].map((system, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <system.icon className={`w-5 h-5 ${system.color}`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{system.name}</p>
                          <p className="text-sm text-muted-foreground">Uptime: {system.uptime}</p>
                        </div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        system.status === 'Healthy' ? 'bg-accent/20 text-accent' :
                        'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {system.status}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Activity</CardTitle>
                <CardDescription>Latest system events and user actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: "09:15 AM", event: "Security scan completed", type: "security", icon: Shield },
                    { time: "08:45 AM", event: "Database backup successful", type: "backup", icon: Database },
                    { time: "08:30 AM", event: "User 'dr.silva' logged in", type: "user", icon: Users },
                    { time: "07:00 AM", event: "System maintenance completed", type: "maintenance", icon: Settings },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-md bg-muted/30">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                        <activity.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{activity.event}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        activity.type === 'security' ? 'bg-destructive/20 text-destructive' :
                        activity.type === 'backup' ? 'bg-accent/20 text-accent' :
                        'bg-primary/20 text-primary'
                      }`}>
                        {activity.type}
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

export default ITAdminDashboard;