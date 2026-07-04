import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFF8E7]">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;