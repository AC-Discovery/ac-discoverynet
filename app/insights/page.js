import Nav from "../Cx/Nav";
import InsightsHero from "../Cx/InsightsHero";
import InsightsGrid from "../Cx/InsightsGrid";
import Footer from "../Cx/Footer";

export default function InsightsPage() {
  return (
    <main className="relative bg-black">
      <Nav />
      <InsightsHero />
      <InsightsGrid />
      <Footer/>
    </main>
  );
}
