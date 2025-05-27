import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import BackToTopButton from "@/components/Shared/BackToTopButton";
import "../styles/globals.css";
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}