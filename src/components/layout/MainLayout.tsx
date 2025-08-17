import BaseLayout from "./BaseLayout";
import Navbar from "./Navbar";

interface MainLayoutProps {
  onLogout: () => void;
}

const MainLayout = ({ onLogout }: MainLayoutProps) => {
  return <BaseLayout NavbarComponent={<Navbar onLogout={onLogout} />} />;
};

export default MainLayout;
