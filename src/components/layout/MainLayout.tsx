import BaseLayout from "./BaseLayout";
import Navbar from "./Navbar";

const MainLayout = () => {
  return <BaseLayout NavbarComponent={<Navbar />} />;
};

export default MainLayout;
