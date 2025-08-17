import { useState, useEffect } from "react";
import { Routes, BrowserRouter, Route } from "react-router";
import MainPage from "./components/MainPage";
import UserPanel from "./components/UserPanel";
import TrainingBuilder from "./components/TrainingBuilder";
import UserLayout from "./components/layout/UserLayout";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./components/LoginPage";
import LogoutDialog from "./components/ui/LogoutDialog";
import { isUserLoggedIn, getCurrentUserStatus, logoutUser } from "./storage/Users";

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  useEffect(() => {
    // Check if user is already logged in on app start
    const userStatus = getCurrentUserStatus();
    if (userStatus && isUserLoggedIn()) {
      setCurrentUser(userStatus);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (userType: "admin" | "user") => {
    setCurrentUser(userType);
    setIsAuthenticated(true);
  };

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleLogoutConfirm = () => {
    logoutUser();
    setCurrentUser(null);
    setIsAuthenticated(false);
    setShowLogoutDialog(false);
  };

  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
