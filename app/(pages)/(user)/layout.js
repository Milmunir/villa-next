import DirectWA from "@/app/components/User/Direct-wa";
import Footer from "@/app/components/User/Footer";
import Navbar from "@/app/components/User/Navbar";
import 'react-lazy-load-image-component/src/effects/blur.css';

function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <DirectWA />
    </>
  );
}

export default UserLayout;
