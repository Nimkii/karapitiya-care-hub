import { useAuth } from "@/contexts/AuthContext";
import ITAdminDashboard from "./dashboards/ITAdminDashboard";
import GeneralAdminDashboard from "./dashboards/GeneralAdminDashboard";
import ConsultantDashboard from "./dashboards/ConsultantDashboard";
import { Navigate } from "react-router-dom";

const DashboardRouter = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  switch (user.role) {
    case 'IT_ADMIN':
      return <ITAdminDashboard />;
    case 'GENERAL_ADMIN':
      return <GeneralAdminDashboard />;
    case 'CONSULTANT':
      return <ConsultantDashboard />;
    default:
      return <Navigate to="/" replace />;
  }
};

export default DashboardRouter;