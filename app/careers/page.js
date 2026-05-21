import Nav from "../Cx/Nav";
import CareersHero from "../Cx/CareersHero";
import CareersContent from "../Cx/CareersContent";
import Footer from "../Cx/Footer";

export default function CareersPage() {
  return (
    <main className="relative bg-black">
      <Nav />
      <CareersHero />
      <CareersContent />
      <Footer />
    </main>
  );
}
