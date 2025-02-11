import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// ถ้าเป็นหน้าเดียว แล้วอยากได้ mainlayout ต้องใช้ children prop แทน outlet
//outlet เอาไว้สำหรับ render children ใน route สำหรับทำหลายๆหน้า
interface MainLayoutProps {
  children: React.ReactNode; // Add this line to define the children prop
}
function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col place-items-center flex-1 justify-center font-inter dark:bg-[#0a0c0c] duration-200 transition-all ease-in">
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
