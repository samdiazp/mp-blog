"use client";
import { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  setAuth: (value: boolean) => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setAuth: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status (e.g., by checking a cookie or making an API call)
    const checkAuthenticated = async () => {
      try {
        const response = await fetch("/api/auth");
        const data = await response.json();
        setIsAuthenticated(data.authenticated);
      } catch (error: unknown) {
        console.error(error);
        setIsAuthenticated(false);
      }
    };

    checkAuthenticated();
  }, []);

  const setAuth = (value: boolean) => {
    setIsAuthenticated(value);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
