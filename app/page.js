import Nav from "./Cx/Nav";
import Hero from "./Cx/Hero";
import Excellence from "./Cx/Excellence";
import Solutions from "./Cx/Solutions";
import Services from "./Cx/Services";
import Vision from "./Cx/Vision";
import Testimonials from "./Cx/Testimonials";
import Connect from "./Cx/Connect";
import Footer from "./Cx/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Excellence />
      <Solutions />
      <Services />
      <Vision />
      <Testimonials />
      <Connect />
      <Footer />
    </main>
  );
}
