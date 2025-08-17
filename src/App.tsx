import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router";
import MainPage from "./components/MainPage";
import UserPanel from "./components/UserPanel";
import TrainingBuilder from "./components/TrainingBuilder";
import UserLayout from "./components/layout/UserLayout";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./components/LoginPage";
import LogoutDialog from "./components/ui/LogoutDialog";
import { UserProvider, useUser } from "./contexts/UserContext";
import { logoutUser, getUserFromStorage } from "./storage/Users";

function AppContent() {
  const { isAuthenticated, setCurrentUser, setUserStatus, setIsAuthenticated } = useUser();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogin = (userType: "admin" | "user") => {
    // The loginUser function will handle storage, we just need to update context
    const user = getUserFromStorage();
    if (user) {
      setCurrentUser(user);
      setUserStatus(userType);
      setIsAuthenticated(true);
    }
  };

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleLogoutConfirm = () => {
    logoutUser();
    setCurrentUser(null);
    setUserStatus(null);
    setIsAuthenticated(false);
    setShowLogoutDialog(false);
  };

  return (
    <>
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout onLogout={handleLogoutClick} />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="/user" element={<UserLayout onLogout={handleLogoutClick} />}>
            <Route index element={<UserPanel />} />
            <Route path="training" element={<TrainingBuilder />} />
          </Route>
        </Routes>
      )}
      
      {/* Logout Dialog */}
      <LogoutDialog
        isOpen={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
