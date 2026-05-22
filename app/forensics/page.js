import Nav from "../Cx/Nav";
import ForensicsHero from "../Cx/ForensicsHero";
import Connect from "../Cx/Connect";
import Footer from "../Cx/Footer";

export default function ForensicsPage() {
  return (
    <main className="relative bg-black">
      <Nav />
      <ForensicsHero />
      <Connect />
      <Footer />
    </main>
  );
}