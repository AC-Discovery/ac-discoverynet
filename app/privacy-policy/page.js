import Nav from "../Cx/Nav";
import PrivacyHero from "../Cx/PrivacyHero";
import PrivacyContent from "../Cx/PrivacyContent";
import Footer from "../Cx/Footer";

export const metadata = {
  title: "Privacy Policy | AC Discovery",
  description:
    "AC Discovery's Privacy Policy describes how we collect, use, and protect your information when you visit our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative bg-black">
      <Nav />
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
