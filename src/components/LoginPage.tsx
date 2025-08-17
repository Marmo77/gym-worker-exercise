import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, isUserLoggedIn, logoutUser } from "../storage/Users";

interface LoginPageProps {
  onLogin: (userType: "admin" | "user") => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [selectedUser, setSelectedUser] = useState<"admin" | "user" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUserSelect = (userType: "admin" | "user") => {
    setSelectedUser(userType);
  };

  const handleLogin = async () => {
    if (!selectedUser) return;

    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const user = loginUser(selectedUser);
      onLogin(selectedUser);
      setIsLoading(false);
      
      // Navigate based on user type
      if (selectedUser === "admin") {
        navigate("/");
      } else {
        navigate("/user");
      }
    }, 1000);
  };

  const handleLogout = () => {
    logoutUser();
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Choose your profile to continue</p>
          </div>

          {/* User Selection */}
          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-2 gap-4">
              {/* Admin Option */}
              <button
                onClick={() => handleUserSelect("admin")}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedUser === "admin"
                    ? "border-red-500 bg-red-50 text-red-700"
                    : "border-gray-200 hover:border-red-300 hover:bg-red-50"
                }`}
              >
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Admin</h3>
                  <p className="text-sm text-gray-500">Full access</p>
                </div>
              </button>

              {/* User Option */}
              <button
                onClick={() => handleUserSelect("user")}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedUser === "user"
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">User</h3>
                  <p className="text-sm text-gray-500">Standard access</p>
                </div>
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={!selectedUser || isLoading}
            className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
              selectedUser && !isLoading
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </div>
            ) : (
              "Sign In"
            )}
          </button>

          {/* Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              This is a demo app with local storage. No real authentication required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
