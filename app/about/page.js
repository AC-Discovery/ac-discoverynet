import Nav from "../Cx/Nav";
import AboutHero from "../Cx/AboutHero";
import AboutGoal from "../Cx/AboutGoal";
import Connect from "../Cx/Connect";
import Footer from "../Cx/Footer";

export default function AboutPage() {
  return (
    <main className="relative bg-black">
      <Nav />
      <AboutHero />
      <AboutGoal />
      <Connect/>
      <Footer/>
    </main>
  );
}
