import { useLocation } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import UserNavbar from "./UserNavbar";

interface UserLayoutProps {
  onLogout: () => void;
}

const UserLayout = ({ onLogout }: UserLayoutProps) => {
  const location = useLocation();

  const iconType = location.pathname === "/user" ? "arrow" : "close";

  const BackToSite = location.pathname === "/user" ? "/" : "/user";

  const LocalisationBack =
    location.pathname === "/user" ? "Dashboard" : "Profile";

  return (
    <BaseLayout
      NavbarComponent={
        <UserNavbar
          iconType={iconType}
          BackTo={BackToSite}
          LocalisationBack={LocalisationBack}
          onLogout={onLogout}
        />
      }
    />
  );
};

export default UserLayout;
