import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'IT_ADMIN' | 'GENERAL_ADMIN' | 'CONSULTANT';

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  email: string;
  department?: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demonstration
const mockUsers: Record<string, User> = {
  'it.admin': {
    id: '1',
    username: 'it.admin',
    name: 'Rajesh Kumar',
    role: 'IT_ADMIN',
    email: 'rajesh.kumar@karapitiya.lk',
    department: 'Information Technology'
  },
  'admin': {
    id: '2',
    username: 'admin',
    name: 'Priya Jayawardena',
    role: 'GENERAL_ADMIN',
    email: 'priya.jayawardena@karapitiya.lk',
    department: 'Administration'
  },
  'dr.perera': {
    id: '3',
    username: 'dr.perera',
    name: 'Dr. Nimal Perera',
    role: 'CONSULTANT',
    email: 'dr.perera@karapitiya.lk',
    department: 'Cardiology'
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored authentication on app start
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers[username];
    
    if (foundUser && password === 'password') { // Simple auth for demo
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};