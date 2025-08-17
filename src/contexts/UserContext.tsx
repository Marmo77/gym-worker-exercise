import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import {
  getUserFromStorage,
  getCurrentUserStatus,
  isUserLoggedIn,
  saveUserToStorage,
} from "../storage/Users";
import type { UserInfo } from "../storage/Users";

interface UserContextType {
  currentUser: UserInfo | null;
  userStatus: string | null;
  isAuthenticated: boolean;
  setCurrentUser: (user: UserInfo | null) => void;
  setUserStatus: (status: string | null) => void;
  setIsAuthenticated: (authenticated: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
  const [userStatus, setUserStatus] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in on app start
    const user = getUserFromStorage();
    const status = getCurrentUserStatus();

    if (user && status && isUserLoggedIn()) {
      setCurrentUser(user);
      setUserStatus(status);
      setIsAuthenticated(true);
    }
  }, []);

  // Wrapper function to save to localStorage when user is updated
  const updateCurrentUser = (user: UserInfo | null) => {
    setCurrentUser(user);
    if (user) {
      saveUserToStorage(user);
    }
  };

  const value: UserContextType = {
    currentUser,
    userStatus,
    isAuthenticated,
    setCurrentUser: updateCurrentUser,
    setUserStatus,
    setIsAuthenticated,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
